import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as g}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import{r as d}from"./index-DatCARk7.js";import{d as p}from"./styled-components.browser.esm-DD6bt04G.js";import{c as F,C as K}from"./Control-DQuhXu0x.js";import{D as q}from"./DateHandle-BqCLvfPI.js";import{I as U,a as B}from"./TextInput-IdzidpeS.js";import{i as G}from"./isNewDesignEnabled-CECVVFcR.js";import"./theme.utils-BeVOnAPh.js";import"./circle-exclamation-BXEBVndQ.js";import"./info-DX6kh3Lj.js";import"./triangle-exclamation-DQjt3Dp9.js";import"./lock-C1jbjoO5.js";import"./Flex-DwwaOy33.js";import"./HintIcon-DRByZ8Uu.js";import"./hint-CWBE4nNZ.js";import"./Tooltip-FXVI7MEq.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";import"./popover.module-_MiSh5dU.js";import"./Button-bb1s2N95.js";import"./Icon-BDJ5phNo.js";function J(e,r){d.useEffect(()=>{const a=u=>{!e.current||e.current.contains(u.target)||r(u)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[e,r])}function x({ref:e,label:r,hint:a="Formato hh:mm",appearance:u="default",message:v,className:f,defaultValue:m,onChange:c,onClick:s,...o}){const i=d.useRef(null);d.useImperativeHandle(e,()=>i.current);const _=G(),{hour:L,minute:S}=k(`${m}`),[h,w]=d.useState(L),[D,y]=d.useState(S),[O,I]=d.useState(!1),R=d.useCallback(()=>I(!1),[]),$=F`text-input${o}`;function T(t){var l;(l=i.current)==null||l.dispatchEvent(new Event("change",{bubbles:!0})),c==null||c(Z(t))}function M(t){w(t),D&&i.current&&(i.current.value=E(t,D),T(i.current))}function A(t){y(t),h&&i.current&&(i.current.value=E(h,t),T(i.current))}function P(t,l){y(l),w(t),i.current&&(i.current.value=E(t,l),T(i.current))}const z=_?U:B;return n.jsxs(ee,{label:r,inputId:$,hint:a,appearance:u,message:v,required:o.required,disabled:o.disabled,className:f,children:[n.jsx(z,{ref:i,type:"time",$appearance:u,id:$,defaultValue:m,onChange:t=>{const{hour:l,minute:j}=k(t.target.value);w(l),y(j),c==null||c(t)},onClick:t=>{if(I(!0),!t.currentTarget.value){const{hour:l,minute:j}=k();P(l,j)}s==null||s(t)},onKeyDown:t=>{t.code==="Space"?t.preventDefault():t.code==="Tab"&&I(!1),o.onKeyDown&&o.onKeyDown(t)},...o}),O&&n.jsx(Q,{isNewDesign:_,hour:Number.parseInt(h),updateHour:M,minute:Number.parseInt(D),updateMinute:A,onClose:R})]})}function Q({hour:e,updateHour:r,minute:a,updateMinute:u,onClose:v,isNewDesign:f}){const m=d.useRef(null);return J(m,v),n.jsxs(te,{ref:m,$isNewDesign:f,children:[n.jsx(W,{hour:e,updateHour:r}),n.jsx(oe,{children:":"}),n.jsx(X,{minute:a,updateMinute:u})]})}function W({hour:e,updateHour:r}){return n.jsx(V,{count:e,defaultCount:new Date().getHours(),max:23,onUp:r,onDown:r})}function X({minute:e,updateMinute:r}){return n.jsx(V,{count:e,defaultCount:new Date().getMinutes(),max:59,onUp:r,onDown:r})}function V({count:e,defaultCount:r,max:a,onUp:u,onDown:v}){const f=isNaN(e)||e<0||e>a?r:e;function m(){const s=f+1,o=s>a?0:s;u(g(o))}function c(){const s=f-1,o=s<0?a:s;v(g(o))}return n.jsxs(re,{children:[n.jsx(ne,{onClick:m,ariaLabel:"indietro"}),n.jsx(ie,{children:g(e)}),n.jsx(ae,{onClick:c,ariaLabel:"avanti"})]})}function E(e,r){return`${e}:${r}`}function Y(e){return!!(e!=null&&e.match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/))}function k(e){return Y(e)?{hour:e.split(":")[0],minute:e.split(":")[1]}:{hour:g(new Date().getHours()),minute:g(new Date().getMinutes())}}function Z(e){return{bubbles:!0,cancelable:!0,timeStamp:new Date().getTime(),defaultPrevented:!1,currentTarget:e,target:e,type:"change"}}const ee=p(K)`
  position: relative;
  [type="time"]::-webkit-calendar-picker-indicator {
    display: none;
  }
`,te=p.div`
  position: absolute;
  top: ${({$isNewDesign:e})=>e?"3rem":"5rem"};
  left: ${({$isNewDesign:e})=>e?"0":"0.5rem"};
  border-radius: var(--border-radius);
  z-index: 1;
  background-color: var(--background);
  padding: 0 var(--space-1);
  border-color: var(--outline);
  box-shadow: var(--shadow-elevation-medium);
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
  }
`,re=p.div`
  text-align: center;
  margin: var(--space-2);
`,ne=p(q)`
  transform: rotate(90deg);
`,ae=p(q)`
  transform: rotate(270deg);
`,ie=p.p`
  margin: 0;
  font-size: 1.2rem;
  width: 50px;
  padding: var(--space-3) 0;
`,oe=p.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: var(--space-2);
`;try{x.displayName="TimeInput",x.__docgenInfo={description:"",displayName:"TimeInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},labelAriaLabelledBy:{defaultValue:null,description:"",name:"labelAriaLabelledBy",required:!1,type:{name:"string"}},hint:{defaultValue:{value:"Formato hh:mm"},description:"",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},extraContent:{defaultValue:null,description:"",name:"extraContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const He={title:"Forms/TimeInput",component:x},ue=e=>n.jsx("form",{onSubmit:r=>r.preventDefault(),children:n.jsx(x,{...e})}),b=ue.bind({});b.args={label:"Ora"};var C,H,N;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`args => <form onSubmit={ev => ev.preventDefault()}>
    <TimeInput {...args} />
  </form>`,...(N=(H=b.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const Ne=["Default"];export{b as Default,Ne as __namedExportsOrder,He as default};
