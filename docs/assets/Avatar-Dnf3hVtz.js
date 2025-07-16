import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as n}from"./styled-components.browser.esm-DD6bt04G.js";import{i as s}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";function t({name:e,size:i="2.3rem",src:a}){return r.jsx(o,{$size:i,children:a?r.jsx("img",{src:a,alt:`Avatar di ${e}`,width:"100%",height:"100%"}):r.jsx(l,{$size:i,"aria-label":`Avatar con iniziali di ${e}`,children:s(e)})})}const o=n.span`
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: var(--on-primary);
  color: var(--primary);
  width: ${({$size:e})=>e};
  height: ${({$size:e})=>e};
`,l=n.span`
  text-align: center;
  font-size: ${({$size:e})=>`calc(${e} * .45)`};
  font-weight: 600;
`;try{t.displayName="Avatar",t.__docgenInfo={description:"",displayName:"Avatar",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:{value:"2.3rem"},description:"",name:"size",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}}}}}catch{}export{t as A};
