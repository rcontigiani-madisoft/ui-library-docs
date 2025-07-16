import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{l as p}from"./date-DLO9q3mC.js";import"./string-BWSckzgf.js";import{D as m,T as c}from"./DescriptionList-BzszD35O.js";import"./styled-components.browser.esm-DD6bt04G.js";import"./index-DatCARk7.js";const u=e=>e?"Sì":"No",y=e=>g(e)?u(e):void 0;function g(e){return e!=null}function n({fields:e,ImageComponent:o}){return e.length===0?t.jsx("p",{children:"Nessuna informazione da visualizzare"}):t.jsx(m,{children:e.map(a=>t.jsx(c,{dt:a.label,children:a.type==="image"?a.value?t.jsx(o,{src:a.value,alt:a.label}):"":D(a)},a.label))})}function D(e){return e.value===null||e.value===void 0?"-":e.type==="bool"?y(e.value):e.type==="date"?p(new Date(e.value)):e.type==="array"&&Array.isArray(e.value)?e.value.join(", "):e.value}try{n.displayName="DynamicDescriptionList",n.__docgenInfo={description:"",displayName:"DynamicDescriptionList",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"DynamicDescriptionListField[]"}},ImageComponent:{defaultValue:null,description:"",name:"ImageComponent",required:!0,type:{name:"FC<{ src: string; alt: string; }>"}}}}}catch{}const j={title:"Dynamic Description list",component:n},r=()=>t.jsx(n,{fields:[{type:"string",label:"Nome",value:"Alberto"},{type:"array",label:"Materie",value:["Italiano","Storia","Geografia"]},{type:"bool",label:"Sostegno",value:!1}],ImageComponent:({src:e,alt:o})=>t.jsx("img",{src:e,alt:o})});var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => <DynamicDescriptionList fields={[{
  type: 'string',
  label: 'Nome',
  value: 'Alberto'
}, {
  type: 'array',
  label: 'Materie',
  value: ['Italiano', 'Storia', 'Geografia']
}, {
  type: 'bool',
  label: 'Sostegno',
  value: false
}]} ImageComponent={({
  src,
  alt
}: {
  src: string;
  alt: string;
}) => <img src={src} alt={alt} />} />`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,j as default};
