import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DatCARk7.js";import{d as s}from"./styled-components.browser.esm-DD6bt04G.js";import{F as W}from"./Flex-DwwaOy33.js";import{a as O}from"./Button-bb1s2N95.js";import{f as N,a as T,b as R,p as B,c as F,d as E,e as K}from"./date-DLO9q3mC.js";import"./string-BWSckzgf.js";import{D as G}from"./DatePicker-Y5pd1jpE.js";import{D as J}from"./DateHandle-BqCLvfPI.js";import{M as Q}from"./MonthSelectionWidget-D8nJJ0Zg.js";import{P as U}from"./Popover-OOY3LJLk.js";import{V as X}from"./VisuallyHidden-BUtF7OPd.js";import{d as z}from"./TextInput-IdzidpeS.js";function L(e){return e.mode==="month"?r.jsx(Q,{selected:e.selected,onSelect:e.onSelect,className:e.className}):r.jsx(Y,{...e})}function Y({label:e,selected:o=new Date,onSelect:c,className:a,mode:h="day",disabled:i}){const u=d.useRef(null),[k,w]=d.useState(y(o)),[v,p]=d.useState(!1),[_,l]=d.useState(""),S=d.useRef(null),{step:j,prevHandleAriaLabel:I,nextHandleAriaLabel:$,getStyleModifiers:C}=ee(h),n=te(k),A=new Date,g=n?T(n,j):void 0,b=n?R(n,j):void 0;function m(t){t?(w(y(t)),c(t),l("")):l(z)}function M(){p(!1)}return r.jsxs("div",{className:a,children:[r.jsxs(W,{children:[r.jsx(P,{ariaLabel:I(b),onClick:()=>m(b),direction:"left",size:"small",disabled:f(b,i)}),r.jsx(W,{children:r.jsxs(oe,{children:[r.jsx(X,{children:e}),r.jsx(ne,{ref:u,type:"text",maxLength:10,role:"combobox","aria-autocomplete":"none","aria-haspopup":"dialog","aria-expanded":v,"aria-controls":"date-picker-input-dialog","data-date-input":!0,value:k,onChange:t=>{l(""),w(t.target.value)},onKeyDown:t=>{var V;if(t.key==="Down"||t.key==="ArrowDown"){p(!0),(V=S.current)==null||V.focus();return}else t.key==="Tab"&&p(!1)},onClick:()=>{v||p(t=>!t)},onBlur:()=>{n?f(n,i)?l(Z):c(n):l(z)}})]})}),r.jsx(P,{ariaLabel:$(g),onClick:()=>m(g),size:"small",direction:"right",disabled:f(g,i)}),r.jsx(ie,{type:"button",size:"small",onClick:()=>m(A),$hidden:f(A,i),children:"Oggi"})]}),_&&r.jsx(x,{role:"alert",children:_}),r.jsx(D,{open:v,triggerRef:u,onDismiss:M,children:r.jsx("div",{ref:S,children:r.jsx(se,{selected:n??new Date,onSelect:t=>{m(t),M()},required:!0,modifiersStyles:C(o),disabled:i})})})]})}const Z="Data non compresa nell'anno scolastico",f=(e,o)=>e?o?e<o.before||e>=o.after:!1:!0,ee=e=>e==="week"?re():ae();function ae(){return{step:1,prevHandleAriaLabel:a=>`seleziona giorno precedente, ${a?y(a):"data non invalida"}`,nextHandleAriaLabel:a=>`seleziona giorno successivo, ${a?y(a):"data invalida"}`,getStyleModifiers:()=>({modifiers:void 0,modifiersClassNames:void 0})}}function re(){return{step:7,prevHandleAriaLabel:a=>`seleziona settimana precedente, ${a?q(a):"data non invalida"}`,nextHandleAriaLabel:a=>`seleziona settimana successiva, ${a?q(a):"data invalida"}`,getStyleModifiers:a=>({modifiers:{weekday:a?Array(7).fill(E(a)).map((i,u)=>T(i,u)):[]},modifiersClassNames:{weekday:"weekday"}})}}function q(e){return`${H(E(e))} - ${H(K(e))}`}const H=e=>N(e,"dd MMM"),y=e=>N(e,"dd/MM/yyyy");function te(e){const o=B(e,"dd/MM/yyyy");return F(o)?o:void 0}const P=s(J)`
  &:focus {
    z-index: 1;
  }
`,oe=s.label`
  &:focus-within {
    z-index: 1;
  }
`,ne=s.input`
  background-color: inherit;
  color: var(--on-background);
  padding: var(--space-1);
  border-top: 1px solid var(--outline);
  border-right: 1px solid var(--outline);
  border-bottom: 1px solid var(--outline);
  border-left: none;
  width: 80px;
  height: 100%;
  font-size: var(--font-size-small);
  &:focus-within {
    box-shadow: var(--shadow-focus);
    outline: none;
  }
`,ie=s(O)`
  margin-left: var(--space-1);
  display: ${({$hidden:e})=>e?"none":"initial"};
`,D=s(U)`
  border: 1px solid var(--outline);
  border-radius: 10px;
  z-index: var(--z-index-header);
  margin-top: var(--space-1);
`,se=s(G)`
  .weekday {
    border-radius: 0;
  }
  .weekday:not(.rdp-day_selected) {
    background-color: var(--primary-variant);
    color: var(--on-primary);
  }
  .weekday:first-child {
    border-radius: 50% 0 0 50%;
  }
  .weekday:last-child {
    border-radius: 0 50% 50% 0;
  }
  .rdp-selected > button {
    background-color: var(--primary);
    color: var(--on-primary);
    border-color: var(--primary);
  }
  .rdp-today:not(.rdp-selected) > button {
    color: var(--on-background);
  }
`,x=s.small`
  color: var(--error);
  font-weight: 600;
  font-size: 0.7rem;
`;try{L.displayName="DateSelectionWidget",L.__docgenInfo={description:"",displayName:"DateSelectionWidget",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"Date"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(date: Date) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"month"'},{value:'"week"'},{value:'"day"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"{ after: Date; before: Date; }"}}}}}catch{}try{D.displayName="DatePopover",D.__docgenInfo={description:"",displayName:"DatePopover",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="ErrorText",x.__docgenInfo={description:"",displayName:"ErrorText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{L as D,x as E,D as a};
