import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DatCARk7.js";import{r as p}from"./index-RHVwCB2K.js";import{d as m}from"./styled-components.browser.esm-DD6bt04G.js";import{c as v}from"./popover.module-_MiSh5dU.js";import{s as y}from"./string-BWSckzgf.js";function h(o){const[s,i]=r.useState(!1);return r.useEffect(()=>{const e=o.current,t=(e==null?void 0:e.querySelector("button, a, input"))??(e==null?void 0:e.firstElementChild);function n(){e==null||e.removeEventListener("mouseleave",n),t==null||t.removeEventListener("blur",n),window.removeEventListener("keydown",a),i(!1)}function a(f){f.key==="Escape"&&n()}function l(){e==null||e.addEventListener("mouseleave",n),t==null||t.addEventListener("blur",n),window.addEventListener("keydown",a),i(!0)}return e==null||e.addEventListener("mouseenter",l),t==null||t.addEventListener("focus",l),()=>{e==null||e.removeEventListener("mouseenter",l),t==null||t.removeEventListener("focus",l)}},[o]),s}function E(o,s){const[i,e]=r.useState({visibility:"hidden",left:0,top:0});return r.useEffect(()=>{const t=o.current,n=(t==null?void 0:t.querySelector("button, a, input"))??(t==null?void 0:t.firstElementChild),a=s.current;if(!a||!n)return;const l=v(n,a,{align:"center",gap:8});e({left:l.left+"px",top:l.top+"px"})},[o,s]),i}function u({id:o,message:s,isHtml:i,className:e,children:t}){const n=r.useRef(null),a=h(n);return d.jsxs("div",{className:e,ref:n,children:[t,a?d.jsx(_,{id:o,message:s,isHtml:i,wrapperRef:n}):null]})}function _({id:o,message:s,isHtml:i,wrapperRef:e}){const t=r.useRef(null),n=E(e,t);return p.createPortal(d.jsx(x,{ref:t,id:o,role:"tooltip",style:n,children:i?d.jsx("span",{dangerouslySetInnerHTML:{__html:y(s)}}):d.jsx("span",{children:s})}),document.body)}const c=m(u)`
  display: inline-flex;
`,x=m.div`
  max-width: 95vw;
  font-weight: 600;
  position: absolute;
  background-color: var(--on-background);
  color: var(--background);
  border-radius: var(--border-radius);
  padding: var(--space-1) var(--space-2);
  font-size: var(--font-size-small);
  box-shadow: var(--shadow-elevation-medium);

  @media screen and (min-width: 768px) {
    max-width: 30rem;
  }

  @media print {
    display: none;
  }
`;try{u.displayName="Tooltip",u.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},isHtml:{defaultValue:null,description:"",name:"isHtml",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{c.displayName="InlineTooltip",c.__docgenInfo={description:"",displayName:"InlineTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{c as I,u as T};
