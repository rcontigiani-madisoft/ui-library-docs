import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as u}from"./styled-components.browser.esm-DD6bt04G.js";import{B as x,a as m}from"./Button-bb1s2N95.js";import{F as b}from"./delete-BcFbdolr.js";import"./string-BWSckzgf.js";import"./index-DatCARk7.js";import"./Flex-DwwaOy33.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";function y(e,o){return[...e.slice(0,o),...e.slice(o+1)]}function n({items:e,newItemValue:o,onChange:l,renderItem:p,addLabel:g="Aggiungi",deleteLabel:f=" Rimuovi"}){const v=()=>l([...e,o]),h=(i,t)=>l(y(e,t));return r.jsxs(r.Fragment,{children:[e.map((i,t)=>r.jsxs(_,{children:[p(i,t),r.jsxs(j,{type:"button",appearance:"ghost",onClick:()=>h(i,t),"aria-label":"Rimuovi",children:[r.jsx(b,{width:14,height:14})," ",f]})]},t)),r.jsx(x,{children:r.jsxs(m,{type:"button",appearance:"ghost",onClick:v,children:[r.jsx("span",{"aria-hidden":!0,children:"+"})," ",g]})})]})}const _=u.div`
  border: 1px solid var(--outline);
  border-radius: var(--border-radius);
  padding: var(--space-2);
  margin: var(--space-3) var(--space-1);
`,j=u(m)`
  display: flex;
  color: var(--error);
  &:hover:not(:disabled) {
    color: var(--error);
    background-color: var(--error-container);
  }
  svg {
    margin-right: var(--space-1);
  }
`;try{n.displayName="Collection",n.__docgenInfo={description:"",displayName:"Collection",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},newItemValue:{defaultValue:null,description:"",name:"newItemValue",required:!0,type:{name:"T"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(items: T[]) => void"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: T, index: number) => ReactNode"}},addLabel:{defaultValue:{value:"Aggiungi"},description:"",name:"addLabel",required:!1,type:{name:"string"}},deleteLabel:{defaultValue:{value:"Rimuovi"},description:"",name:"deleteLabel",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Collection",component:n},C=e=>r.jsx(n,{...e}),a=C.bind({});a.args={items:["Andrea","Mirco","Samuele"],renderItem:e=>r.jsx("div",{children:e})};var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Collection {...args} />",...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,L as default};
