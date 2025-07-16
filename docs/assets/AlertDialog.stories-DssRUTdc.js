import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-DatCARk7.js";import{d as v}from"./styled-components.browser.esm-DD6bt04G.js";import{B as L,a as l}from"./Button-bb1s2N95.js";import{D as V}from"./Dialog-BkE9zIDr.js";import"./Flex-DwwaOy33.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";import"./dialog.utils-CnFIdgQW.js";function a({label:n,description:c,confirmLabel:t="OK",dismissLabel:o="Annulla",children:r,onConfirm:_,onDismiss:d,disabled:m,primaryDismiss:k,className:q}){const{labelId:p,descriptionId:u}=I(),f={label:o,onClick:d},g={label:t,onClick:_},[b,D]=k?[f,g]:[g,f];return e.jsxs(V,{open:!0,role:"alertdialog","aria-labelledby":p,"aria-describedby":u,onDismiss:d,className:q,children:[e.jsx(P,{id:p,children:n}),e.jsx(N,{id:u,children:c}),r,e.jsxs(L,{$justifyContent:"flex-end",children:[e.jsx(l,{onClick:D.onClick,disabled:m,children:D.label}),e.jsx(l,{appearance:"filled",onClick:b.onClick,disabled:m,children:b.label})]})]})}function I(){const n=A.useId();return{labelId:`alert-dialog-label-${n}`,descriptionId:`alert-dialog-description-${n}`}}const P=v.div`
  font-weight: 600;
  font-size: var(--font-size-large);
  margin-bottom: var(--space-2);
`,N=v.div`
  margin: var(--space-3) 0;
`;try{a.displayName="AlertDialog",a.__docgenInfo={description:"",displayName:"AlertDialog",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}},dismissLabel:{defaultValue:{value:"Annulla"},description:"",name:"dismissLabel",required:!1,type:{name:"string"}},confirmLabel:{defaultValue:{value:"OK"},description:"",name:"confirmLabel",required:!1,type:{name:"string"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!0,type:{name:"() => void"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},primaryDismiss:{defaultValue:null,description:"",name:"primaryDismiss",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const J={title:"AlertDialog",component:a},B=({onDismiss:n,onConfirm:c,...t})=>{const[o,r]=A.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>r(!0),children:"Open Dialog"}),o&&e.jsx(a,{onDismiss:()=>r(!1),onConfirm:()=>{r(!1)},...t})]})},i=B.bind({});i.args={label:"Confirm your choice?",description:"Deleting an item is an irreversible action.",dismissLabel:"Cancel",confirmLabel:"OK, delete"};const s=B.bind({});s.args={label:"Confirm your choice?",description:"Deleting an item is an irreversible action.",dismissLabel:"Cancel",confirmLabel:"OK, delete",primaryDismiss:!0};var y,C,O;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`({
  onDismiss,
  onConfirm,
  ...args
}) => {
  const [open, setOpen] = React.useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      {open && <AlertDialog onDismiss={() => setOpen(false)} onConfirm={() => {
      setOpen(false);
    }} {...args} />}
    </>;
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var x,h,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`({
  onDismiss,
  onConfirm,
  ...args
}) => {
  const [open, setOpen] = React.useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      {open && <AlertDialog onDismiss={() => setOpen(false)} onConfirm={() => {
      setOpen(false);
    }} {...args} />}
    </>;
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const M=["Default","DismissPrimary"];export{i as Default,s as DismissPrimary,M as __namedExportsOrder,J as default};
