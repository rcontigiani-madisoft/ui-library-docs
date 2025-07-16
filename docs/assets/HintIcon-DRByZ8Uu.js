import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as e}from"./styled-components.browser.esm-DD6bt04G.js";import{F as s}from"./info-DX6kh3Lj.js";import{F as d}from"./hint-CWBE4nNZ.js";import{I as l}from"./Tooltip-FXVI7MEq.js";import{a as p}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import{i as c}from"./isNewDesignEnabled-CECVVFcR.js";function a({size:o,hint:t}){const n=c()?r.jsx(u,{width:o,height:o}):r.jsx(m,{width:o,height:o}),i=`tooltip-hint-${p()}`;return t?r.jsx(l,{id:i,message:t,children:r.jsx(f,{type:"button","aria-label":t,"aria-labelledby":i,children:n})}):n}const m=e(s)`
  color: var(--warning);
`,u=e(d)`
  color: var(--brand);
`,f=e.button`
  border: none;
  background-color: transparent;
  padding: var(--space-2xs);
  line-height: 0;

  @media print {
    display: none;
  }
`;try{a.displayName="HintIcon",a.__docgenInfo={description:"",displayName:"HintIcon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}}}}}catch{}export{a as H};
