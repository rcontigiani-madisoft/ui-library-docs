import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as D}from"./styled-components.browser.esm-DD6bt04G.js";import{d as J,c as K,C as Q,e as W}from"./Control-DQuhXu0x.js";import{i as X}from"./isNewDesignEnabled-CECVVFcR.js";import"./index-DatCARk7.js";import"./theme.utils-BeVOnAPh.js";import"./circle-exclamation-BXEBVndQ.js";import"./info-DX6kh3Lj.js";import"./triangle-exclamation-DQjt3Dp9.js";import"./lock-C1jbjoO5.js";import"./Flex-DwwaOy33.js";import"./HintIcon-DRByZ8Uu.js";import"./hint-CWBE4nNZ.js";import"./Tooltip-FXVI7MEq.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";import"./popover.module-_MiSh5dU.js";import"./string-BWSckzgf.js";import"./strings-Bn8L0l--.js";const Y=()=>{const r=getComputedStyle(document.body).getPropertyValue("--solid");return"data:image/svg+xml,"+encodeURIComponent(`<svg width="12" height="12" viewBox="0 0 12 12" fill="${r}" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.84282 3.02418C1.02264 2.85934 1.30205 2.87149 1.46689 3.05132L5.99999 7.99652L10.5331 3.05132C10.6979 2.87149 10.9773 2.85934 11.1572 3.02418C11.337 3.18902 11.3491 3.46843 11.1843 3.64825L6.32559 8.94865C6.24193 9.03992 6.1238 9.09188 5.99999 9.09188C5.87618 9.09188 5.75805 9.03992 5.67439 8.94865L0.815687 3.64825C0.650847 3.46843 0.662996 3.18902 0.84282 3.02418Z" />
      </svg>`)},ee=D.select`
  appearance: none;
  background: url(${Y}) no-repeat right var(--space-s) center;
  display: block;
  flex-grow: 1;
  background-color: var(--bright-subtle);
  border: 1px solid ${J};
  color: var(--solid);
  padding: 0 var(--space-s);
  border-radius: var(--space-2xs);
  outline: none;
  width: 100%;

  &:hover:not(:disabled),
  :focus,
  :active:not(:disabled) {
    border-color: var(--weak);
  }

  &:focus {
    box-shadow: var(--focus);
  }

  &:disabled {
    color: var(--solid-subtle);
    background-color: var(--medium-subtle);
    border-color: var(--medium-subtle);
  }
`;function c({id:r,name:i,options:j,value:B,onChange:N,defaultValue:R,required:d,disabled:u,clearable:L=!d,placeholder:U="Seleziona...",...z}){const A=X(),p=r??K`select${{name:i}}`,{label:E,appearance:m,className:P,extraContent:T,hint:M,message:O,...F}=z,G=A?ee:ae;return a.jsx(Q,{inputId:p,disabled:u,required:d,label:E,appearance:m,className:P,extraContent:T,message:O,hint:M,children:a.jsxs(G,{id:p,name:i,value:B,onChange:N,required:d,disabled:u,defaultValue:R,$appearance:m,...F,children:[L&&a.jsx("option",{value:"",children:U}),j.map(({label:Z,value:g,disabled:H})=>a.jsx("option",{value:g,disabled:H,children:Z},g))]})})}const re=()=>{const r=getComputedStyle(document.body).getPropertyValue("--on-background");return"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${r}"><path d="M7 10l5 5 5-5z"/></svg>`)},ae=D.select`
  appearance: none;
  background: url(${re}) no-repeat right 0 center;
  display: block;
  flex-grow: 1;
  background-color: var(--surface);
  transition:
    background-color 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
  border: 1px solid ${W};
  margin-top: var(--space-1);
  color: var(--on-background);
  padding: 0.75rem 0.5rem;
  border-radius: var(--border-radius);
  outline: none;
  width: 100%;

  &:hover:not(:disabled),
  :focus,
  :active:not(:disabled) {
    background-color: var(--background);
  }
  &:focus {
    color: var(--on-background);
    border-color: var(--secondary);
    box-shadow: 0 0 0 2px var(--secondary);
  }
  &:disabled {
    opacity: 1;
    color: var(--disabled);
    background-color: var(--surface-variant);
  }
`;try{c.displayName="Select",c.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},labelAriaLabelledBy:{defaultValue:null,description:"",name:"labelAriaLabelledBy",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},extraContent:{defaultValue:null,description:"",name:"extraContent",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption<string>[]"}},clearable:{defaultValue:{value:"!required"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Seleziona..."},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const Ce={title:"Forms/Select",component:c},n=r=>a.jsx(c,{...r}),oe=[{label:"Blu",value:"1"},{label:"Rosso",value:"2"},{label:"Verde",value:"3"},{label:"Giallo",value:"4"},{label:"Viola",value:"5"},{label:"Arancio",value:"6"}],e=n.bind({});e.args={label:"Colore",name:"colore",options:oe};const o=n.bind({});o.args={...e.args,required:!0};const s=n.bind({});s.args={...e.args,disabled:!0};const l=n.bind({});l.args={...e.args,appearance:"success",message:"The field is valid"};const t=n.bind({});t.args={...e.args,appearance:"danger",message:"The field cannot be empty"};var b,v,f;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Select {...args} />",...(f=(v=e.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,y,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Select {...args} />",...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,S,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Select {...args} />",...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var k,V,q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Select {...args} />",...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var _,I,$;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:"args => <Select {...args} />",...($=(I=t.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};const ke=["Default","Required","Disabled","Success","Danger"];export{t as Danger,e as Default,s as Disabled,o as Required,l as Success,ke as __namedExportsOrder,Ce as default};
