import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as l}from"./styled-components.browser.esm-DD6bt04G.js";import{s as c}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import{a as x}from"./Button-bb1s2N95.js";import{C as y}from"./Flex-DwwaOy33.js";import{F as k}from"./triangle-exclamation-DQjt3Dp9.js";import{L as v}from"./Li-BKSEzY3f.js";import{U as F}from"./Ul-ChFEAKwj.js";import"./index-DatCARk7.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";const o=({error:r,title:i=r.message,message:t=_(r),className:E,children:h,reset:n})=>e.jsxs(R,{$center:!0,role:"alert","aria-labelledby":`alert-title-${c(r.message)}`,className:E,children:[e.jsx(k,{width:64,height:64}),e.jsx(q,{id:`alert-title-${c(r.message)}`,children:i}),typeof t=="string"?e.jsx(V,{children:t}):e.jsx(j,{messages:t}),h,n&&e.jsx(N,{type:"button",onClick:n,children:"Reset"})]});function j({messages:r}){return e.jsx(F,{children:r.map((i,t)=>e.jsx(v,{children:i},t))})}function _(r){return C(r)?r.details:D}function C(r){return"details"in r&&typeof r.details=="string"}const D="Riprova più tardi",R=l(y)`
  background-color: var(--error-container);
  color: var(--error);
  padding: var(--space-3);
  margin: var(--space-2);
  text-align: center;
  border-radius: var(--border-radius);
  flex: 1;
`,q=l.strong`
  margin-top: var(--space-3);
`,V=l.p`
  margin-top: var(--space-1);
`,N=l(x)`
  &:hover:not(:disabled) {
    background-color: var(--error-container);
    color: var(--error);
  }
`;try{o.displayName="ErrorFallback",o.__docgenInfo={description:"",displayName:"ErrorFallback",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"Error"}},title:{defaultValue:{value:"error.message"},description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:{value:"errorDetails(error)"},description:"",name:"message",required:!1,type:{name:"string | string[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},reset:{defaultValue:null,description:"",name:"reset",required:!1,type:{name:"(() => void)"}}}}}catch{}const z={title:"Error Fallback",component:o,argTypes:{}},b=r=>e.jsx(o,{...r}),a=b.bind({});a.args={error:new Error("Uncaught ReferenceError: arr is not defined")};const s=b.bind({});s.args={...a.args,title:"Insert your custom title here",message:"Insert your custom message here",children:e.jsx("div",{children:"Custom error fallback"})};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <ErrorFallback {...args} />",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"args => <ErrorFallback {...args} />",...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const H=["DefaultErrorFallback","CustomErrorFallback"];export{s as CustomErrorFallback,a as DefaultErrorFallback,H as __namedExportsOrder,z as default};
