(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{504:function(e,t,r){"use strict";r.r(t);var a=r(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"quick-start-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-start-guide"}},[e._v("#")]),e._v(" Quick Start Guide")]),e._v(" "),r("p",[e._v("In this Quick Start guide, we're going to create a simple starter project that you can be used as a framework for developing your own SubQuery Project.")]),e._v(" "),r("p",[e._v("At the end of this guide, you'll have a working SubQuery project running on a SubQuery node with a GraphQL endpoint that you can query data from.")]),e._v(" "),r("p",[e._v("If you haven't already, we suggest that you familiarise yourself with the "),r("RouterLink",{attrs:{to:"/ja/#terminology"}},[e._v("terminology")]),e._v(" used in SubQuery.")],1),e._v(" "),r("h2",{attrs:{id:"preparation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),r("h3",{attrs:{id:"local-development-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#local-development-environment"}},[e._v("#")]),e._v(" Local Development Environment")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typescript"),r("OutboundLink")],1),e._v(" is required to compile project and define types.")]),e._v(" "),r("li",[e._v("Both SubQuery CLI and generated Project have dependencies and require a modern version "),r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("SubQuery Nodes require Docker")])]),e._v(" "),r("h3",{attrs:{id:"install-the-subquery-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-the-subquery-cli"}},[e._v("#")]),e._v(" Install the SubQuery CLI")]),e._v(" "),r("p",[e._v("Install SubQuery CLI globally on your terminal by using NPM:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# NPM")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @subql/cli\n")])])]),r("p",[e._v("Please note that we "),r("strong",[e._v("DO NOT")]),e._v(" encourage the use of "),r("code",[e._v("yarn global")]),e._v(" due to its poor dependency management which may lead to an errors down the line.")]),e._v(" "),r("p",[e._v("You can then run help to see available commands and usage provide by CLI")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("subql "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v("\n")])])]),r("h2",{attrs:{id:"initialise-the-starter-subquery-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#initialise-the-starter-subquery-project"}},[e._v("#")]),e._v(" Initialise the Starter SubQuery Project")]),e._v(" "),r("p",[e._v("Inside the directory in which you want to create a SubQuery project, simply replace "),r("code",[e._v("PROJECT_NAME")]),e._v(" with your own and run the command:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("subql init --starter PROJECT_NAME\n")])])]),r("p",[e._v("You'll be asked certain questions as the SubQuery project is initalised:")]),e._v(" "),r("ul",[r("li",[e._v("Git repository (Optional): Provide a Git URL to a repo that this SubQuery project will be hosted in (when hosted in SubQuery Explorer)")]),e._v(" "),r("li",[e._v("RPC endpoint (Required): Provide a wss URL to a running RPC endpoint that will be used by default for this project. You can quickly access public endpoints for different Polkadot networks or even create your own private dedicated node using "),r("a",{attrs:{href:"https://app.onfinality.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("OnFinality"),r("OutboundLink")],1),e._v(" or just use the default Polkadot endpoint.")]),e._v(" "),r("li",[e._v("Authors (Required): Enter the owner of this SubQuery project here")]),e._v(" "),r("li",[e._v("Description (Optional): You can provide a short paragraph about your project that describe what data it contains and what users can do with it")]),e._v(" "),r("li",[e._v("Version (Required): Enter a custom version number or use the default ("),r("code",[e._v("1.0.0")]),e._v(")")]),e._v(" "),r("li",[e._v("License (Required): Provide the software license for this project or accept the default ("),r("code",[e._v("Apache-2.0")]),e._v(")")])]),e._v(" "),r("p",[e._v("After the initialisation process is complete, you should see a folder with your project name has been created inside the directory. The contents of this directoy should be identical to what's listed in the "),r("RouterLink",{attrs:{to:"/ja/create/introduction.html#directory-structure"}},[e._v("Directory Structure")]),e._v(".")],1),e._v(" "),r("p",[e._v("Last, under the project directory, run following command to install the new project's dependencies.")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PROJECT_NAME\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Yarn")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# NPM")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),r("h2",{attrs:{id:"configure-and-build-the-starter-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-and-build-the-starter-project"}},[e._v("#")]),e._v(" Configure and Build the Starter Project")]),e._v(" "),r("p",[e._v("In the starter package that you just initialised, we have provided a standard configuration for your new project. You will mainly be working on the following files:")]),e._v(" "),r("ul",[r("li",[e._v("The Manifest in "),r("code",[e._v("project.yaml")])]),e._v(" "),r("li",[e._v("The GraphQL Schema in "),r("code",[e._v("schema.graphql")])]),e._v(" "),r("li",[e._v("The Mapping functions in "),r("code",[e._v("src/mappings/")]),e._v(" directory")])]),e._v(" "),r("p",[e._v("For more information on how to write your own SubQuery, check out our documentation under "),r("RouterLink",{attrs:{to:"/ja/create/introduction.html"}},[e._v("Create a Project")])],1),e._v(" "),r("h3",{attrs:{id:"graphql-model-generation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#graphql-model-generation"}},[e._v("#")]),e._v(" GraphQL Model Generation")]),e._v(" "),r("p",[e._v("In order to "),r("RouterLink",{attrs:{to:"/ja/run/run.html"}},[e._v("index")]),e._v(" your SubQuery project, you must first generate the required GraphQL models that you have defined in your GraphQL Schema file ("),r("code",[e._v("schema.graphql")]),e._v("). Run this command in the root of the project directory.")],1),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Yarn")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" codegen\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# NPM")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run-script codegen\n")])])]),r("p",[e._v("You'll find the generated models in the "),r("code",[e._v("/src/types/models")]),e._v(" directory")]),e._v(" "),r("h2",{attrs:{id:"build-the-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-the-project"}},[e._v("#")]),e._v(" Build the Project")]),e._v(" "),r("p",[e._v("In order run your SubQuery Project on a locally hosted SubQuery Node, you need to build your work.")]),e._v(" "),r("p",[e._v("Run the build command from the project's root directory.")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Yarn")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" build\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# NPM")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run-script build\n")])])]),r("h2",{attrs:{id:"running-and-querying-your-starter-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-and-querying-your-starter-project"}},[e._v("#")]),e._v(" Running and Querying your Starter Project")]),e._v(" "),r("p",[e._v("Although you can quickly publish your new project to "),r("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("SubQuery Projects"),r("OutboundLink")],1),e._v(" and query it using our "),r("a",{attrs:{href:"https://explorer.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Explorer"),r("OutboundLink")],1),e._v(", the easiest way to run SubQuery nodes locally is in a Docker container, if you don't already have Docker you can install it from "),r("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.com"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ja/publish/publish.html"}},[r("em",[e._v("Skip this and publish your new project to SubQuery Projects")])])],1),e._v(" "),r("h3",{attrs:{id:"run-your-subquery-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-your-subquery-project"}},[e._v("#")]),e._v(" Run your SubQuery Project")]),e._v(" "),r("p",[e._v("All configuration that controls how a SubQuery node is run is defined in this "),r("code",[e._v("docker-compose.yml")]),e._v(" file. For a new project that has been just initalised you won't need to change anything here, but you can read more about the file and the settings in our "),r("RouterLink",{attrs:{to:"/ja/run/run.html"}},[e._v("Run a Project section")])],1),e._v(" "),r("p",[e._v("Under the project directory run following command:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("docker-compose pull "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" docker-compose up\n")])])]),r("p",[e._v("It may take some time to download the required packages ("),r("a",{attrs:{href:"https://www.npmjs.com/package/@subql/node",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("@subql/node")]),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.npmjs.com/package/@subql/query",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("@subql/query")]),r("OutboundLink")],1),e._v(", and Postgres) for the first time but soon you'll see a running SubQuery node.")]),e._v(" "),r("h3",{attrs:{id:"query-your-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-your-project"}},[e._v("#")]),e._v(" Query your Project")]),e._v(" "),r("p",[e._v("Open your browser and head to "),r("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("You should see a GraphQL playground is showing in the explorer and the schemas that are ready to query. On the top right of the playground, you'll find a "),r("em",[e._v("Docs")]),e._v(" button that will open a documentation draw. This documentation is automatically generated and helps you find what entities and methods you can query.")]),e._v(" "),r("p",[e._v("For a new SubQuery starter project, you can try the following query to get a taste of how it works or "),r("RouterLink",{attrs:{to:"/ja/query/graphql.html"}},[e._v("learn more about the GraphQL Query language")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"language-graphql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-graphql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("query")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    starterEntities"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("first")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      nodes "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        field1\n        field2\n        field3\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("h2",{attrs:{id:"next-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),r("p",[e._v("Congratulations, you now have a locally running SubQuery project that accepts GraphQL API requests for sample data. In the next guide, we'll show you how to publish your new project to "),r("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("SubQuery Projects"),r("OutboundLink")],1),e._v(" and query it using our "),r("a",{attrs:{href:"https://explorer.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Explorer"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ja/publish/publish.html"}},[e._v("Publish your new project to SubQuery Projects")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);