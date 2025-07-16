import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DatCARk7.js";import{r as v}from"./index-RHVwCB2K.js";import{d as y,m as g}from"./styled-components.browser.esm-DD6bt04G.js";import{f,s as w}from"./dialog.utils-CnFIdgQW.js";const p=({closeOnClickOutside:e=!0,onDismiss:a,open:o=!0,role:d="dialog",...l})=>{const{container:t}=h({open:o,closeOnClickOutside:e,onDismiss:a});return o?v.createPortal(m.jsx(E,{children:m.jsx(s,{ref:t,role:d,"aria-modal":"true",onSubmit:i=>i.stopPropagation(),...l})}),document.body):null};function h({open:e,onDismiss:a,closeOnClickOutside:o}){const d=u.useRef(null),l=u.useRef(null);return u.useEffect(()=>{const t=n=>{if(e)switch(n.key){case"Escape":{o&&(a==null||a());break}case"Tab":{n.preventDefault(),f(l.current,!n.shiftKey);break}}},i=n=>{var r;e&&n.target===((r=l.current)==null?void 0:r.parentNode)&&(a==null||a())};return window.addEventListener("keydown",t),o&&document.body.addEventListener("click",i),()=>{window.removeEventListener("keydown",t),o&&document.body.removeEventListener("click",i)}},[o,a,e]),u.useEffect(()=>{const t=l.current;if(!t)return;const i=r=>{t.parentElement&&w(t.parentElement,r)},n=()=>{var r,c;(c=(r=d.current)==null?void 0:r.focus)==null||c.call(r),d.current=null,_()};return e?(d.current=document.activeElement??null,f(l.current),x()):n(),i(e),()=>{i(!1),n()}},[e]),{container:l}}const b="overflow-hidden";function x(){document.body.classList.add(b)}function _(){document.body.classList.remove(b)}const E=y.div`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
`,V=g`
  from {
    opacity: 0;
    transform:translate3d(0, 2rem, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,s=y.div`
  position: relative;
  background-color: var(--background);
  width: auto;
  margin: 10vh var(--space-1);
  border-radius: var(--border-radius);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4);
  padding: var(--space-3);
  animation: ${V} 0.2s;
  @media screen and (min-width: 768px) {
    max-width: 80vw;
    margin: 10vh auto;
  }

  @media screen and (min-width: 1024px) {
    max-width: 50vw;
  }
`;try{p.displayName="Dialog",p.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:{value:"true"},description:"",name:"open",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!1,type:{name:"(() => void)"}},closeOnClickOutside:{defaultValue:{value:"true"},description:"",name:"closeOnClickOutside",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},role:{defaultValue:{value:"dialog"},description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"dialog"'},{value:'"alertdialog"'}]}}}}}catch{}try{s.displayName="DialogContent",s.__docgenInfo={description:"",displayName:"DialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{p as D};
