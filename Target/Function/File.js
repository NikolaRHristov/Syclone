var i=async(...[t])=>{if(t.split(".").pop()==="ts"){const{options:a}=(await import("typescript")).default.convertCompilerOptionsFromJson((await(await import("../Function/JSON.js")).default("../../tsconfig.json",(await import("path")).dirname((await import("url")).fileURLToPath(import.meta.url))))?.compilerOptions,".");(await import("typescript")).default.createProgram([t],a,(await import("typescript")).default.createCompilerHost(a)).emit(),await(await import("fs/promises")).writeFile(t.replace(".ts",".js"),(await import("typescript")).default.transpile((await(await import("fs/promises")).readFile(t,"utf-8")).toString(),a))}return(await import((await import("url")).pathToFileURL(t).toString().replace(".ts",".js"))).default};export{i as default};
