import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as a}from"./styled-components.browser.esm-DD6bt04G.js";import{a as h}from"./Button-bb1s2N95.js";import{r as l}from"./index-DatCARk7.js";import{P as f}from"./PageHeader-CcWHGBcN.js";import{T as b,a as T,b as x,c as y}from"./Tabs-CC2d4Y7U.js";import"./Flex-DwwaOy33.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";function s({title:r,headerChildren:p,tabTitles:i,children:n}){if(i.length!==l.Children.count(n))throw new Error("Children and titles count should match");return e.jsxs(b,{children:[e.jsxs(f,{title:r,children:[e.jsx(_,{children:"|"}),e.jsx(T,{style:{flex:1},children:i.map(o=>e.jsx(x,{children:e.jsx(j,{children:o})},o))}),p]}),l.Children.map(n,(o,g)=>e.jsx(y,{children:o},g))]})}const j=a.h2`
  font-size: var(--font-size-medium);
  margin: auto;
`,_=a.strong`
  margin: auto var(--space-2);
  font-size: var(--font-size-large);
`;try{s.displayName="TabsPageLayout",s.__docgenInfo={description:"",displayName:"TabsPageLayout",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},headerChildren:{defaultValue:null,description:"",name:"headerChildren",required:!1,type:{name:"ReactNode"}},tabTitles:{defaultValue:null,description:"",name:"tabTitles",required:!0,type:{name:"string[]"}}}}}catch{}const k={title:"Tabs Page Layout",component:s},C=r=>e.jsx(s,{...r}),u=a.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 3rem;
  color: white;
  font-size: 2rem;
`,P=a(u)`
  background-color: mediumseagreen;
`,z=a(u)`
  background-color: mediumslateblue;
`,t=C.bind({});t.args={title:"Registro di classe",tabTitles:["Argomenti di lezione e firme","Appello, giustificazioni e note"],headerChildren:e.jsx(h,{children:"Action"}),children:[e.jsx(P,{children:"Tab 1"},"tab-1"),e.jsx(z,{children:"Tab 2"},"tab-2")]};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"args => <TabsPageLayout {...args} />",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,k as default};
