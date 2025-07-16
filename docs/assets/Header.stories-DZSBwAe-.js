import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as t,l as N}from"./styled-components.browser.esm-DD6bt04G.js";import{r as i}from"./index-DatCARk7.js";import{F as b,P as T}from"./ProfileMenu-BNV3400E.js";import{b as f}from"./MenuList-DwIza7ud.js";import"./Avatar-Dnf3hVtz.js";import"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";import"./usePopoverPosition-DScRzE65.js";import"./functions-DAFblV6k.js";import"./popover.module-_MiSh5dU.js";const j=({title:e,titleId:a,...u},H)=>i.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"cloud",className:"svg-inline--fa fa-cloud fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:H,"aria-labelledby":a,...u},e?i.createElement("title",{id:a},e):null,i.createElement("path",{fill:"currentColor",d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"})),q=i.forwardRef(j),s=t.span`
  max-width: 10vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: var(--space-1);
  @media screen and (min-width: 360px) {
    max-width: 12vw;
  }
  @media screen and (min-width: 400px) {
    max-width: 16vw;
  }
  @media screen and (min-width: 600px) {
    max-width: 30vw;
  }
`;try{s.displayName="Ellipsis",s.__docgenInfo={description:"",displayName:"Ellipsis",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const V=N`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  border-radius: var(--border-radius);
  transition: color 0.2s, background-color 0.2s;
  &:focus,
  &:hover {
    background-color: var(--secondary);
  }
  &:active {
    background-color: var(--primary-variant);
    color: var(--on-primary-container);
  }
`,n=t.button`
  margin-right: var(--space-1);
  ${V}
`,l=({children:e,...a})=>r.jsxs(n,{...a,children:[r.jsx(s,{children:e}),r.jsx("span",{"aria-hidden":!0,children:r.jsx(b,{width:14,height:14})})]});try{n.displayName="HeaderButton",n.__docgenInfo={description:"",displayName:"HeaderButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="HeaderButtonDropdown",l.__docgenInfo={description:"",displayName:"HeaderButtonDropdown",props:{}}}catch{}const c=t.a`
  text-decoration: none;
  color: inherit;
  &:focus,
  &:hover {
    text-decoration: underline;
    color: var(--neutral-4);
  }
  &:active {
    color: var(--neutral-6);
  }
`;try{c.displayName="HeaderLink",c.__docgenInfo={description:"",displayName:"HeaderLink",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const E=()=>r.jsx(k,{children:"|"}),k=t.div`
  margin: 0 var(--space-2);
`,p=({children:e,...a})=>r.jsx(A,{...a,children:e}),A=t(s)`
  margin-right: var(--space-2);
`;try{p.displayName="HeaderText",p.__docgenInfo={description:"",displayName:"HeaderText",props:{}}}catch{}const _=({className:e,childrenBefore:a,children:u})=>r.jsxs(D,{className:e,children:[a,r.jsx(q,{width:"24",height:"24",className:"logo"}),r.jsx(I,{children:"Nuvola"}),r.jsx(W,{children:u})]}),D=t.header`
  max-width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--primary);
  color: var(--on-primary);
  padding-left: var(--space-1);
  padding-right: var(--space-1);
  @media screen and (min-width: 768px) {
    padding-left: var(--space-3);
    padding-right: var(--space-3);
  }
`,I=t.span`
  display: none;
  font-size: var(--font-size-large);
  margin: 0 var(--space-3) 0 var(--space-2);
  @media screen and (min-width: 768px) {
    display: inline;
  }
`,W=t.nav`
  display: flex;
  align-items: center;
  flex: 1;
`,m={Banner:_,Button:n,Separator:E};try{_.displayName="HeaderBanner",_.__docgenInfo={description:"",displayName:"HeaderBanner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},childrenBefore:{defaultValue:null,description:"",name:"childrenBefore",required:!1,type:{name:"ReactNode"}}}}}catch{}try{c.displayName="HeaderLink",c.__docgenInfo={description:"",displayName:"HeaderLink",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="HeaderButton",n.__docgenInfo={description:"",displayName:"HeaderButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="HeaderButtonDropdown",l.__docgenInfo={description:"",displayName:"HeaderButtonDropdown",props:{}}}catch{}try{p.displayName="HeaderText",p.__docgenInfo={description:"",displayName:"HeaderText",props:{}}}catch{}const Q={title:"Top Navigation Bar",component:m.Banner,argTypes:{}},B=e=>r.jsx(m.Banner,{...e}),o=B.bind({});o.args={children:null};const d=B.bind({});d.args={children:r.jsxs(r.Fragment,{children:[r.jsx(m.Button,{children:"👁"}),r.jsx(m.Separator,{}),r.jsxs(T,{name:"Mirco Bellagamba",children:[r.jsx(f,{children:"Profilo"}),r.jsx(f,{as:"a",href:"#guide",children:"Guide"}),r.jsx(f,{children:"Logout"})]})]})};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Header.Banner {...args} />",...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,x,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Header.Banner {...args} />",...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const U=["Empty","Base"];export{d as Base,o as Empty,U as __namedExportsOrder,Q as default};
