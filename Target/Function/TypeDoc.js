import{Converter as t,ParameterType as o}from"typedoc";const n=e=>{e.options.addDeclaration({name:"plugin-option",help:"Displayed when --help is passed",type:o.String,defaultValue:""}),e.converter.on(t.EVENT_RESOLVE,i=>{e.options.getValue("plugin-option")})};var r=n;export{r as default,n as load};