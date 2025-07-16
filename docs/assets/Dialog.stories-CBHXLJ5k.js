import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DatCARk7.js";import{D as a}from"./Dialog-BkE9zIDr.js";import{a as n}from"./Button-bb1s2N95.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";import"./styled-components.browser.esm-DD6bt04G.js";import"./dialog.utils-CnFIdgQW.js";import"./Flex-DwwaOy33.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";const B={title:"Dialog",component:a},d=l=>{const[p,s]=m.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open dialog"}),e.jsx(a,{...l,open:p,onDismiss:()=>s(!1)})]})},t=d.bind({});t.args={"aria-labelledby":"dialog-title","aria-describedby":"dialog-message",children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{id:"dialog-title",children:"Dialog title"}),e.jsx("p",{id:"dialog-message",children:"Dialog message"}),e.jsx(n,{children:"Action"})]})};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [open, setOpen] = React.useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog {...args} open={open} onDismiss={() => setOpen(false)} />
    </div>;
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,B as default};
