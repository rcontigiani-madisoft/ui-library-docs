import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{t as w,F as R}from"./theme.utils-BeVOnAPh.js";import{F as L}from"./circle-exclamation-BXEBVndQ.js";import{F as T}from"./lock-C1jbjoO5.js";import{d as l,l as q}from"./styled-components.browser.esm-DD6bt04G.js";import{a as z,R as v}from"./Flex-DwwaOy33.js";import{H as V}from"./HintIcon-DRByZ8Uu.js";import{i as B}from"./isNewDesignEnabled-CECVVFcR.js";import{r as m}from"./index-DatCARk7.js";const g=l.label`
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-regular);
  color: var(--weak);
`;try{g.displayName="Label",g.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const F=({title:e,titleId:r,...o},n)=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 8",fill:"currentColor",ref:n,"aria-labelledby":r,...o},e?m.createElement("title",{id:r},e):null,m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 3.63604C1 2.1802 2.18019 1 3.63604 1C3.75343 1 3.86789 1.00709 3.97922 1.02078L4 1H6.58579C7.47669 1 7.92286 2.07714 7.29289 2.70711L5 5L2.70711 7.29289C2.07714 7.92286 1 7.47669 1 6.58579V4L1.02078 3.97922C1.00709 3.86789 1 3.75343 1 3.63604Z"})),D=m.forwardRef(F);function b({children:e,label:r,labelId:o,labelAriaLabelledBy:n,inputId:c,appearance:t="default",className:p,hint:d,required:f,message:s,extraContent:i}){return a.jsxs(H,{className:p,children:[a.jsxs(M,{$alignItems:"center",children:[f&&a.jsx(A,{width:8,height:8}),a.jsx(g,{id:o,"aria-labelledby":n,htmlFor:c,children:r}),i||null,a.jsx(z,{}),d?a.jsx(V,{size:12,hint:d}):null]}),a.jsx(v,{$alignItems:"center",children:e}),s&&a.jsx(E,{$appearance:t,children:s})]})}const A=l(D)`
  align-self: flex-start;
  margin-right: 1px;
  color: var(--alternate);
`,N=({$appearance:e="default",$defaultColor:r="var(--on-background)"})=>e==="default"?r:e==="danger"?"var(--negative-light)":w[e].$fill,y=e=>N({...e,$defaultColor:"var(--bright-darker)"}),h=e=>N({...e,$defaultColor:"var(--weak-dark)"}),E=l.p`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  color: ${h};
  margin: 0;
  padding-top: var(--space-xs);
`,H=l.div`
  margin-bottom: var(--space-s);
`,M=l(v)`
  height: 1rem;
  margin-bottom: 2px;
`,P=q`
  display: flex;
  flex-grow: 1;
  max-width: 100%;
  min-height: 1.5rem;
  background-color: var(--bright-subtle);
  border: 1px solid ${y};
  color: var(--solid);
  padding: 0 var(--space-s);
  border-radius: var(--space-2xs);
  outline: none;
  transition: border-color 0.2s ease;

  &:hover:not(:disabled, :read-only),
  :focus:not(:read-only),
  :active:not(:disabled, :read-only) {
    border-color: var(--weak);
  }

  &:focus-visible {
    box-shadow: var(--focus);
  }

  &::placeholder {
    color: var(--bright-darker);
  }

  &:read-only {
    color: var(--solid);
  }

  &:disabled {
    color: var(--solid-subtle);
  }

  &:disabled,
  &:read-only {
    border-color: var(--medium-subtle);
    background-color: var(--medium-subtle);
  }
`;try{b.displayName="ControlNewDesign",b.__docgenInfo={description:"",displayName:"ControlNewDesign",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},labelAriaLabelledBy:{defaultValue:null,description:"",name:"labelAriaLabelledBy",required:!1,type:{name:"string"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},extraContent:{defaultValue:null,description:"",name:"extraContent",required:!1,type:{name:"ReactNode"}}}}}catch{}try{y.displayName="controlBorderColor",y.__docgenInfo={description:"",displayName:"controlBorderColor",props:{$appearance:{defaultValue:{value:"default"},description:"",name:"$appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},$defaultColor:{defaultValue:{value:"var(--on-background)"},description:"",name:"$defaultColor",required:!1,type:{name:"string"}}}}}catch{}try{h.displayName="controlTextColor",h.__docgenInfo={description:"",displayName:"controlTextColor",props:{$appearance:{defaultValue:{value:"default"},description:"",name:"$appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},$defaultColor:{defaultValue:{value:"var(--on-background)"},description:"",name:"$defaultColor",required:!1,type:{name:"string"}}}}}catch{}function $({children:e,label:r,labelId:o,labelAriaLabelledBy:n,inputId:c,appearance:t="default",className:p,hint:d,required:f,disabled:s,message:i,extraContent:C}){return B()?a.jsx(b,{label:r,labelId:o,labelAriaLabelledBy:n,inputId:c,appearance:t,className:p,hint:d,required:f,disabled:s,message:i,children:e}):a.jsxs(S,{className:p,$appearance:t,children:[a.jsxs(v,{as:"span",$alignItems:"center",$gap:"var(--space-1)",children:[a.jsxs(u,{id:o,"aria-labelledby":n,htmlFor:c,children:[r,f&&"*"]}),d?a.jsx(V,{size:14,hint:d}):null,C||null]}),a.jsxs(v,{as:"span",$alignItems:"center",children:[e,a.jsx(I,{fill:"var(--disabled)","aria-hidden":"true","data-input-state":!0,$visible:s}),t==="success"?a.jsx(R,{fill:"var(--success)","aria-hidden":"true","data-input-state":!0}):t==="danger"?a.jsx(L,{fill:"var(--error)","aria-hidden":"true","data-input-state":!0}):null]}),i&&a.jsx(j,{children:i})]})}const k=({$appearance:e="default",$defaultColor:r="var(--on-background)"})=>e==="default"?r:w[e].$fill,_=e=>k({...e,$defaultColor:"var(--outline)"}),x=e=>k({...e,$defaultColor:"var(--on-background)"}),u=l.label`
  font-size: var(--font-size-small);
  font-weight: 600;
`,j=l.small`
  font-size: 0.8rem;
`,I=l(T)`
  display: ${({$visible:e})=>e?"block":"none"};
`,S=l.div`
  margin-bottom: var(--space-2);
  & ${u}, & ${j} {
    color: ${x};
    transition: color 0.2s;
  }
  &:focus-within ${u} {
    color: var(--secondary);
  }
  svg[data-input-state] {
    width: var(--font-size-regular);
    height: var(--font-size-regular);
    margin-left: var(--space-1);
    flex-shrink: 0;
  }
  :disabled
    ~ ${I},
    :has(:disabled:not(option))
    ~ svg[data-input-state] {
    display: block;
  }
`;function ee(e,r){if(r.id)return r.id;if(r.name)return e.concat(r.name).filter(Boolean).join("-")}const ae=q`
  display: flex;
  flex-grow: 1;
  max-width: 100%;
  background-color: var(--surface);
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  height: 44px;
  border: 1px solid ${_};
  margin-top: var(--space-1);
  color: var(--on-background);
  padding: var(--space-2);
  border-radius: var(--border-radius);
  outline: none;

  &:hover:not(:disabled):not(:read-only),
  :focus:not(:read-only),
  :active:not(:disabled):not(:read-only) {
    background-color: var(--background);
  }
  &:focus:not(:read-only) {
    color: var(--on-background);
    border-color: var(--secondary);
    box-shadow: 0 0 0 2px var(--secondary);
  }
  &::placeholder {
    color: var(--inactive);
  }
  &:disabled {
    color: var(--disabled);
  }
  &:read-only {
    background-color: var(--surface-variant);
  }
`;try{$.displayName="Control",$.__docgenInfo={description:"",displayName:"Control",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},labelAriaLabelledBy:{defaultValue:null,description:"",name:"labelAriaLabelledBy",required:!1,type:{name:"string"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},extraContent:{defaultValue:null,description:"",name:"extraContent",required:!1,type:{name:"ReactNode"}}}}}catch{}try{_.displayName="controlBorderColor",_.__docgenInfo={description:"",displayName:"controlBorderColor",props:{$appearance:{defaultValue:{value:"default"},description:"",name:"$appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},$defaultColor:{defaultValue:{value:"var(--on-background)"},description:"",name:"$defaultColor",required:!1,type:{name:"string"}}}}}catch{}try{x.displayName="controlTextColor",x.__docgenInfo={description:"",displayName:"controlTextColor",props:{$appearance:{defaultValue:{value:"default"},description:"",name:"$appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},$defaultColor:{defaultValue:{value:"var(--on-background)"},description:"",name:"$defaultColor",required:!1,type:{name:"string"}}}}}catch{}try{u.displayName="Label",u.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{$ as C,ae as a,x as b,ee as c,y as d,_ as e,P as i};
