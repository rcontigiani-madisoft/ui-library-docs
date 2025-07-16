import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{l as y,d as V}from"./styled-components.browser.esm-DD6bt04G.js";import{r as s}from"./index-DatCARk7.js";import{V as k}from"./VisuallyHidden-BUtF7OPd.js";const q=({title:e,titleId:a,...i},c)=>s.createElement("svg",{viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",ref:c,"aria-labelledby":a,...i},e?s.createElement("title",{id:a},e):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.64645 1.64645C1.84171 1.45118 2.15829 1.45118 2.35355 1.64645L10.3536 9.64645C10.5488 9.84171 10.5488 10.1583 10.3536 10.3536C10.1583 10.5488 9.84171 10.5488 9.64645 10.3536L1.64645 2.35355C1.45118 2.15829 1.45118 1.84171 1.64645 1.64645Z"}),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.3536 1.64645C10.5488 1.84171 10.5488 2.15829 10.3536 2.35355L2.35355 10.3536C2.15829 10.5488 1.84171 10.5488 1.64645 10.3536C1.45118 10.1583 1.45118 9.84171 1.64645 9.64645L9.64645 1.64645C9.84171 1.45118 10.1583 1.45118 10.3536 1.64645Z"})),$=s.forwardRef(q);function n({className:e,children:a,backgroundColor:i,color:c,theme:_,onClose:u,closeLabel:w}){return r.jsxs(j,{$backgroundColor:i,$color:c,$theme:_,className:e,children:[a,!!u&&r.jsxs(E,{type:"button",onClick:u,children:[r.jsx(k,{children:w}),r.jsx($,{width:12,height:12})]})]})}const j=V.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3xs);
  min-height: 1rem;
  padding: var(--space-3xs) var(--space-2xs);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--space-xs);

  ${({$backgroundColor:e,$color:a})=>y`
    background-color: ${e};
    color: ${a};
  `}

  ${({$theme:e})=>e&&L(e)}
`,E=V.button`
  cursor: pointer;
  padding: 0;
  line-height: 0;
  border: none;
  background: transparent;
`,L=(e="cobalt")=>y`
  color: var(--${e}-darker);
  background: var(--${e}-light);
`;try{n.displayName="Chip",n.__docgenInfo={description:"",displayName:"Chip",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"aquamarine"'},{value:'"grass"'},{value:'"grape"'},{value:'"sunset"'},{value:'"fucsia"'},{value:'"cobalt"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},closeLabel:{defaultValue:null,description:"",name:"closeLabel",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Chip",component:n,argTypes:{}},d=e=>r.jsx(n,{...e,children:"Value"}),o=d.bind({});o.args={theme:"cobalt"};const l=d.bind({});l.args={theme:"aquamarine",onClose:()=>null,closeLabel:"chiudi"};const t=d.bind({});t.args={color:"#F0C9FB",backgroundColor:"#230A2B"};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Chip {...args}>Value</Chip>",...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,C,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Chip {...args}>Value</Chip>",...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var b,v,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Chip {...args}>Value</Chip>",...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const T=["Default","Clearable","Custom"];export{l as Clearable,t as Custom,o as Default,T as __namedExportsOrder,F as default};
