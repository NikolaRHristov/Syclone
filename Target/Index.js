import{Command as o}from"commander";import e from"./Command/Build.js";import r from"./Library/JSON.js";try{new o().name("TypeScript Build").version((await r("../package.json",import.meta.url))?.version).description("Builds files").argument("<Files...>","Files to build").option("-es, --esbuild <File>","esbuild configuration file").option("-ts, --TypeScript <File>","TypeScript configuration file").action(e).parse()}catch(i){console.log(i)}
