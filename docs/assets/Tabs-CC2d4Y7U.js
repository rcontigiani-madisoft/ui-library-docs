import{r as f,R as N}from"./index-DatCARk7.js";import{d as H}from"./styled-components.browser.esm-DD6bt04G.js";var W={exports:{}},U,Z;function ve(){if(Z)return U;Z=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return U=e,U}var V,ee;function we(){if(ee)return V;ee=1;var e=ve();function n(){}function t(){}return t.resetWarningCache=n,V=function(){function r(c,u,y,i,p,T){if(T!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:n};return l.PropTypes=l,l},V}var te;function Pe(){return te||(te=1,W.exports=we()()),W.exports}var ie=Pe();function z(e){return n=>!!n.type&&n.type.tabsRole===e}const E=z("Tab"),k=z("TabList"),A=z("TabPanel");function xe(e){return E(e)||k(e)||A(e)}function M(e,n){return f.Children.map(e,t=>t===null?null:xe(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"?f.cloneElement(t,Object.assign({},t.props,{children:M(t.props.children,n)})):t)}function S(e,n){return f.Children.forEach(e,t=>{t!==null&&(E(t)||A(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(k(t)&&n(t),S(t.props.children,n)))})}function ce(e,n,t){let r,o=0,l=0,c=!1;const u=[],y=e[n];return S(y,i=>{k(i)&&(i.props&&i.props.children&&typeof i.props.children=="object"&&S(i.props.children,p=>u.push(p)),c&&(r=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),c=!0),E(i)?((!c||u.indexOf(i)===-1)&&(r=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),o++):A(i)&&l++}),!r&&o!==l&&(r=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${t}\`. Received ${o} 'Tab' and ${l} 'TabPanel'.`)),r}function $e(e,n,t,r,o){const l=e[n],c=o||n;let u=null;return l&&typeof l!="function"?u=new Error(`Invalid ${r} \`${c}\` of type \`${typeof l}\` supplied to \`${t}\`, expected \`function\`.`):e.selectedIndex!=null&&l==null&&(u=new Error(`The ${r} \`${c}\` is marked as required in \`${t}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),u}function Ce(e,n,t,r,o){const l=e[n],c=o||n;let u=null;if(l!=null&&typeof l!="number")u=new Error(`Invalid ${r} \`${c}\` of type \`${typeof l}\` supplied to \`${t}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&l!=null)return new Error(`The ${r} \`${c}\` cannot be used together with \`defaultIndex\` in \`${t}\`.
Either remove \`${c}\` to let \`${t}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return u}function ue(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=ue(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function j(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=ue(e))&&(r&&(r+=" "),r+=n);return r}function de(e){let n=0;return S(e,t=>{E(t)&&n++}),n}const Ne=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function Re(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}function fe(e){return e&&"getAttribute"in e}function re(e){return fe(e)&&e.getAttribute("data-rttab")}function x(e){return fe(e)&&e.getAttribute("aria-disabled")==="true"}let L;function Ee(e){const n=e||(typeof window<"u"?window:void 0);try{L=!!(typeof n<"u"&&n.document&&n.document.activeElement)}catch{L=!1}}const Ie={className:"react-tabs",focus:!1},Oe={children:ce},Se=e=>{ie.checkPropTypes(Oe,e,"prop","UncontrolledTabs");let n=f.useRef([]),t=f.useRef([]);const r=f.useRef();function o(a,s){if(a<0||a>=i())return;const{onSelect:d,selectedIndex:C}=e;d(a,C,s)}function l(a){const s=i();for(let d=a+1;d<s;d++)if(!x(p(d)))return d;for(let d=0;d<a;d++)if(!x(p(d)))return d;return a}function c(a){let s=a;for(;s--;)if(!x(p(s)))return s;for(s=i();s-- >a;)if(!x(p(s)))return s;return a}function u(){const a=i();for(let s=0;s<a;s++)if(!x(p(s)))return s;return null}function y(){let a=i();for(;a--;)if(!x(p(a)))return a;return null}function i(){const{children:a}=e;return de(a)}function p(a){return n.current[`tabs-${a}`]}function T(){let a=0;const{children:s,disabledTabClassName:d,focus:C,forceRenderTabPanel:b,selectedIndex:g,selectedTabClassName:_,selectedTabPanelClassName:B,environment:Y}=e;t.current=t.current||[];let he=t.current.length-i();const ge=f.useId();for(;he++<0;)t.current.push(`${ge}${t.current.length}`);return M(s,P=>{let F=P;if(k(P)){let w=0,G=!1;L==null&&Ee(Y);const J=Y||(typeof window<"u"?window:void 0);L&&J&&(G=N.Children.toArray(P.props.children).filter(E).some((Q,D)=>J.document.activeElement===p(D))),F=f.cloneElement(P,{children:M(P.props.children,Q=>{const D=`tabs-${w}`,X=g===w,q={tabRef:_e=>{n.current[D]=_e},id:t.current[w],selected:X,focus:X&&(C||G)};return _&&(q.selectedClassName=_),d&&(q.disabledClassName=d),w++,f.cloneElement(Q,q)})})}else if(A(P)){const w={id:t.current[a],selected:g===a};b&&(w.forceRender=b),B&&(w.selectedClassName=B),a++,F=f.cloneElement(P,w)}return F})}function h(a){const{direction:s,disableUpDownKeys:d,disableLeftRightKeys:C}=e;if(m(a.target)){let{selectedIndex:b}=e,g=!1,_=!1;(a.code==="Space"||a.keyCode===32||a.code==="Enter"||a.keyCode===13)&&(g=!0,_=!1,$(a)),!C&&(a.keyCode===37||a.code==="ArrowLeft")||!d&&(a.keyCode===38||a.code==="ArrowUp")?(s==="rtl"?b=l(b):b=c(b),g=!0,_=!0):!C&&(a.keyCode===39||a.code==="ArrowRight")||!d&&(a.keyCode===40||a.code==="ArrowDown")?(s==="rtl"?b=c(b):b=l(b),g=!0,_=!0):a.keyCode===35||a.code==="End"?(b=y(),g=!0,_=!0):(a.keyCode===36||a.code==="Home")&&(b=u(),g=!0,_=!0),g&&a.preventDefault(),_&&o(b,a)}}function $(a){let s=a.target;do if(m(s)){if(x(s))return;const d=[].slice.call(s.parentNode.children).filter(re).indexOf(s);o(d,a);return}while((s=s.parentNode)!=null)}function m(a){if(!re(a))return!1;let s=a.parentElement;do{if(s===r.current)return!0;if(s.getAttribute("data-rttabs"))break;s=s.parentElement}while(s);return!1}const v=Object.assign({},Ie,e),{className:R,domRef:I}=v,Te=Re(v,Ne);return N.createElement("div",Object.assign({},Te,{className:j(R),onClick:$,onKeyDown:h,ref:a=>{r.current=a,I&&I(a)},"data-rttabs":!0}),T())},Le=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function ke(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const Ae=0,O=1,je={children:ce,onSelect:$e,selectedIndex:Ce},Fe={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},De=e=>e.selectedIndex===null?O:Ae,pe=e=>{ie.checkPropTypes(je,e,"prop","Tabs");const n=Object.assign({},Fe,e),{children:t,defaultFocus:r,defaultIndex:o,focusTabOnClick:l,onSelect:c}=n,u=ke(n,Le),[y,i]=f.useState(r),[p]=f.useState(De(u)),[T,h]=f.useState(p===O?o||0:null);if(f.useEffect(()=>{i(!1)},[]),p===O){const v=de(t);f.useEffect(()=>{if(T!=null){const R=Math.max(0,v-1);h(Math.min(T,R))}},[v])}const $=(v,R,I)=>{typeof c=="function"&&c(v,R,I)===!1||(l&&i(!0),p===O&&h(v))};let m=Object.assign({},e,u);return m.focus=y,m.onSelect=$,T!=null&&(m.selectedIndex=T),delete m.defaultFocus,delete m.defaultIndex,delete m.focusTabOnClick,N.createElement(Se,m,t)};pe.tabsRole="Tabs";const qe=["children","className"];function We(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const Ue={className:"react-tabs__tab-list"},be=e=>{const n=Object.assign({},Ue,e),{children:t,className:r}=n,o=We(n,qe);return N.createElement("ul",Object.assign({},o,{className:j(r),role:"tablist"}),t)};be.tabsRole="TabList";const Ve=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function Ke(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const K="react-tabs__tab",Me={className:K,disabledClassName:`${K}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${K}--selected`},me=e=>{let n=f.useRef();const t=Object.assign({},Me,e),{children:r,className:o,disabled:l,disabledClassName:c,focus:u,id:y,selected:i,selectedClassName:p,tabIndex:T,tabRef:h}=t,$=Ke(t,Ve);return f.useEffect(()=>{i&&u&&n.current.focus()},[i,u]),N.createElement("li",Object.assign({},$,{className:j(o,{[p]:i,[c]:l}),ref:m=>{n.current=m,h&&h(m)},role:"tab",id:`tab${y}`,"aria-selected":i?"true":"false","aria-disabled":l?"true":"false","aria-controls":`panel${y}`,tabIndex:T||(i?"0":null),"data-rttab":!0}),r)};me.tabsRole="Tab";const He=["children","className","forceRender","id","selected","selectedClassName"];function ze(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const ne="react-tabs__tab-panel",Be={className:ne,forceRender:!1,selectedClassName:`${ne}--selected`},ye=e=>{const n=Object.assign({},Be,e),{children:t,className:r,forceRender:o,id:l,selected:c,selectedClassName:u}=n,y=ze(n,He);return N.createElement("div",Object.assign({},y,{className:j(r,{[u]:c}),role:"tabpanel",id:`panel${l}`,"aria-labelledby":`tab${l}`}),o||c?t:null)};ye.tabsRole="TabPanel";const ae=H(pe)`
  -webkit-tap-highlight-color: transparent;
  & .react-tabs__tab-panel {
    display: none;
  }
  & .react-tabs__tab-panel--selected {
    display: block;
  }
`,se=H(be)`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`,oe=H(me)`
  position: relative;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: var(--inactive);
  padding: 0 var(--space-1);
  margin: 0 var(--space-1);
  border-radius: var(--border-radius);
  cursor: pointer;
  outline: none;
  transition:
    color 0.5s ease,
    background-color 0.5s ease;
  display: flex;
  align-items: center;

  &:focus {
    box-shadow: var(--shadow-focus);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
  &:focus-visible {
    box-shadow: var(--shadow-focus);
  }
  &:active {
    opacity: 0.5;
  }

  &[aria-selected='true'],
  &[aria-selected='true'] h2 {
    font-weight: 700;
    color: var(--secondary);
  }
  &[aria-disabled='true'] {
    color: var(--disabled);
    cursor: default;
  }
  &[aria-selected='true']::after {
    content: '';
    height: 4px;
    background-color: var(--secondary);
    position: absolute;
    bottom: -0.8rem;
    right: 0;
    left: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`,le=ye;try{ae.displayName="Tabs",ae.__docgenInfo={description:"",displayName:"Tabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{se.displayName="TabList",se.__docgenInfo={description:"",displayName:"TabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{oe.displayName="Tab",oe.__docgenInfo={description:"",displayName:"Tab",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{le.displayName="TabPanel",le.__docgenInfo={description:"",displayName:"TabPanel",props:{}}}catch{}export{ae as T,se as a,oe as b,le as c};
