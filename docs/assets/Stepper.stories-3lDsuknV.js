import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as t}from"./styled-components.browser.esm-DD6bt04G.js";import{R as u,C as v}from"./Flex-DwwaOy33.js";import{U as g}from"./Ul-ChFEAKwj.js";import{L as f}from"./Li-BKSEzY3f.js";import{F as x}from"./done-JR9L2hyb.js";import{V as y}from"./VisuallyHidden-BUtF7OPd.js";import"./index-DatCARk7.js";function s({activeStep:r,steps:i}){var n;return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsxs("span",{id:"current-stepper-item","aria-live":"polite",children:["Passaggio ",r+1," di ",i.length," -"," ",((n=i[r])==null?void 0:n.title)??""]})}),e.jsx(j,{children:i.map((c,a)=>{const h=a===r,p=a<r;return e.jsxs(w,{as:f,"data-stepper-item-active":h,"data-stepper-item-complete":p,$center:!0,children:[e.jsx(_,{$center:!0,children:p?e.jsx(x,{width:24,height:24,stroke:"currentColor",strokeWidth:4}):c.icon??a+1}),e.jsxs(k,{children:[e.jsxs(b,{children:[a+1,"/",i.length]}),e.jsx(S,{children:c.title})]})]},a)})})]})}const w=t(u)`
  display: none;
  &[data-stepper-item-active="true"] {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,j=t(g)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, auto);
  overflow: auto;
`,_=t(u)`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: var(--space-2);
  border: 1px solid var(--outline);
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
  background-color: transparent;
  color: var(--inactive);
  [data-stepper-item-active="true"] & {
    border-color: var(--secondary);
    background-color: var(--secondary);
    color: var(--on-primary);
  }
  [data-stepper-item-complete="true"] & {
    border-color: var(--success-container);
    background-color: var(--success-container);
    color: var(--success);
  }
`,b=t.small`
  font-weight: 800;
  color: var(--inactive);
  [data-stepper-item-active="true"] & {
    color: var(--secondary);
  }
  [data-stepper-item-complete="true"] & {
    color: var(--inactive);
  }
`,S=t.h2`
  margin: 0;
  font-weight: 800;
  font-size: var(--font-size-medium);
  color: var(--inactive);
  [data-stepper-item-active="true"] & {
    color: var(--on-background);
  }
`,k=t(v)`
  width: 0;
  overflow: hidden;
  [data-stepper-item-active="true"] & {
    width: auto;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    margin-right: var(--space-2);
  }
`;try{s.displayName="Stepper",s.__docgenInfo={description:"",displayName:"Stepper",props:{activeStep:{defaultValue:null,description:"",name:"activeStep",required:!0,type:{name:"number"}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Step[]"}}}}}catch{}const q={title:"Forms/Stepper",component:s,argTypes:{}},C=r=>e.jsx(s,{...r}),o=C.bind({});o.args={activeStep:0,steps:[{title:"Configuration"},{title:"Initial values"},{title:"Evaluate"}]};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Stepper {...args} />",...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,q as default};
