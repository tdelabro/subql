// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import assert from 'assert';
import { Injectable } from '@nestjs/common';
import {
  isCustomDs,
  isRuntimeDs,
  manifestIsV0_2_1,
  CustomDataSourceV0_2_0Impl,
  RuntimeDataSourceV0_2_0Impl,
} from '@subql/common';
import { SubqlDatasource } from '@subql/types';
import { plainToClass } from 'class-transformer';
import { Sequelize, Transaction } from 'sequelize/types';
import { SubqueryProject } from '../configure/project.model';
import { getLogger } from '../utils/logger';
import { DsProcessorService } from './ds-processor.service';
import { MetadataFactory, MetadataRepo } from './entities/Metadata.entity';
import { StoreService } from './store.service';

const logger = getLogger('dynamic-ds');

const METADATA_KEY = 'dynamicDatasources';

interface DatasourceParams {
  templateName: string;
  args?: Record<string, unknown>;
  startBlock: number;
}

@Injectable()
export class DynamicDsService {
  private metaDataRepo: MetadataRepo;

  constructor(
    private readonly dsProcessorService: DsProcessorService,
    private readonly project: SubqueryProject,
  ) {}

  init(metaDataRepo: MetadataRepo): void {
    this.metaDataRepo = metaDataRepo;
  }

  private _datasources: SubqlDatasource[];

  async createDynamicDatasource(
    params: DatasourceParams,
    tx: Transaction,
  ): Promise<void> {
    try {
      const ds = await this.getDatasource(params);

      await this.saveDynamicDatasourceParams(params, tx);

      logger.info(
        `Created new dynamic datasource from template: "${params.templateName}"`,
      );

      if (!this._datasources) this._datasources = [];
      this._datasources.push(ds);
    } catch (e) {
      logger.error(e.message);
      process.exit(1);
    }
  }

  async getDynamicDatasources(): Promise<SubqlDatasource[]> {
    if (!this._datasources) {
      try {
        const params = await this.getDynamicDatasourceParams();

        this._datasources = await Promise.all(
          params.map((params) => this.getDatasource(params)),
        );
      } catch (e) {
        logger.error(`Unable to get dynamic datasources:\n${e.message}`);
        process.exit(1);
      }
    }

    return this._datasources;
  }

  private async getDynamicDatasourceParams(): Promise<DatasourceParams[]> {
    assert(this.metaDataRepo, `Model _metadata does not exist`);
    const record = await this.metaDataRepo.findByPk(METADATA_KEY);
    const results = record?.value;

    if (!results || typeof results !== 'string') {
      return [];
    }

    return JSON.parse(results);
  }

  private async saveDynamicDatasourceParams(
    dsParams: DatasourceParams,
    tx: Transaction,
  ): Promise<void> {
    const existing = await this.getDynamicDatasourceParams();

    assert(this.metaDataRepo, `Model _metadata does not exist`);
    await this.metaDataRepo.upsert(
      { key: METADATA_KEY, value: JSON.stringify([...existing, dsParams]) },
      { transaction: tx },
    );
  }

  private async getDatasource(
    params: DatasourceParams,
  ): Promise<SubqlDatasource> {
    const manifest = this.project.projectManifest;

    if (!manifestIsV0_2_1(manifest)) {
      throw new Error(
        `Unsupported project manifest version. Expected at least 0.2.1, received "${manifest.specVersion}"`,
      );
    }

    const template = manifest.asV0_2_1.templates.find(
      (t) => t.name === params.templateName,
    );

    if (!template) {
      throw new Error(
        `Unable to find matching template in project for name: "${params.templateName}"`,
      );
    }

    logger.info(
      `Initialised dynamic datasource from template: "${params.templateName}"`,
    );

    const dsObj: SubqlDatasource = {
      ...template,
      startBlock: params.startBlock,
    };
    delete dsObj.name;
    try {
      if (isCustomDs(dsObj)) {
        dsObj.processor.options = {
          ...dsObj.processor.options,
          ...params.args,
        };
        await this.dsProcessorService.validateCustomDs([dsObj]);

        const customDs: CustomDataSourceV0_2_0Impl = plainToClass(
          CustomDataSourceV0_2_0Impl,
          dsObj,
        );
        customDs.validate();

        return customDs;
      } else if (isRuntimeDs(dsObj)) {
        // XXX add any modifications to the ds here

        const runtimeDs = plainToClass(RuntimeDataSourceV0_2_0Impl, dsObj);
        runtimeDs.validate();

        return runtimeDs;
      }
    } catch (e) {
      throw new Error(`Unable to create dynamic datasource.\n ${e.message}`);
    }
  }
}
