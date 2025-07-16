import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as q}from"./triangle-exclamation-DQjt3Dp9.js";import{s as S}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import{l as z,d as i}from"./styled-components.browser.esm-DD6bt04G.js";import{C as $}from"./Card-DnN0gyrr.js";import{V as E}from"./VisuallyHidden-BUtF7OPd.js";import"./index-DatCARk7.js";function l({children:e,label:r,value:n,appearance:u,className:d,emptyPlaceholder:N="-"}){const p=S(r),m=`value-box-label-${p}`,g=`value-box-value-${p}`;return a.jsxs(M,{className:d,$appearance:u,"data-testid":"valuebox-test",children:[a.jsxs(I,{"aria-labelledby":`${m} ${g}`,children:[r,a.jsxs(E,{id:m,children:[r,":"]})]}),a.jsx(P,{id:g,"aria-hidden":!0,"data-value":!0,children:n??N}),e]})}function c({value:e,className:r,isError:n,errorMessage:u,label:d}){return a.jsx(l,{label:d,value:e,appearance:n?"error":void 0,className:r,children:n&&a.jsxs(w,{children:[a.jsx(q,{"aria-hidden":"true",width:"16",height:"16"}),u]})})}const M=i($)`
  padding: var(--space-1) var(--space-2);
  ${({$appearance:e})=>e==="error"&&z`
      background-color: var(--error-container);
    `}
`,w=i.span`
  display: flex;
  align-items: center;
  color: var(--error);
  font-weight: bold;
  & > svg {
    margin-right: var(--space-2);
  }
`,I=i.h3`
  color: var(--inactive);
  font-weight: 500;
  font-size: var(--font-size-medium);
  margin: 0;
`,P=i.strong`
  display: block;
  font-size: var(--font-size-extra-large);
  line-height: calc(var(--font-size-extra-large) * 1.3);
`;try{l.displayName="ValueBox",l.__docgenInfo={description:"",displayName:"ValueBox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},emptyPlaceholder:{defaultValue:{value:"-"},description:"",name:"emptyPlaceholder",required:!1,type:{name:"string"}}}}}catch{}try{c.displayName="StatusValueBox",c.__docgenInfo={description:"",displayName:"StatusValueBox",props:{isError:{defaultValue:null,description:"",name:"isError",required:!0,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ReactNode"}},emptyPlaceholder:{defaultValue:null,description:"",name:"emptyPlaceholder",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Cards/Value Box",component:l},j=e=>a.jsx(l,{...e}),R=e=>a.jsx(c,{...e}),t=j.bind({});t.args={label:"Default value box",value:100};const s=j.bind({});s.args={children:a.jsx("span",{children:"Messaggio informativo"}),label:"Box senza stato di errore",value:100};const o=R.bind({});o.args={label:"Box con stato errore",value:10,isError:!0,errorMessage:"Messaggio di errore"};var x,f,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"args => <ValueBox {...args} />",...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,V,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"args => <ValueBox {...args} />",...(h=(V=s.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var b,B,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"args => <StatusValueBox {...args} />",...(_=(B=o.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const G=["DefaultValueBox","NoStatusBox","StatusBox"];export{t as DefaultValueBox,s as NoStatusBox,o as StatusBox,G as __namedExportsOrder,A as default};
