import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DatCARk7.js";import{d,l as f}from"./styled-components.browser.esm-DD6bt04G.js";import{s as J,m as Q}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import{F as X}from"./chevron-right-solid-CdNcY9dD.js";import{a as Z}from"./Button-bb1s2N95.js";import{V as W}from"./VisuallyHidden-BUtF7OPd.js";import"./Flex-DwwaOy33.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";function ee(e,t){return t?b(e,t).map(D):[]}function b(e,t){if(e.length===0||!t)return[];const[a,...r]=e,{path:i,children:s=[]}=a;if(ae(i,t))return[a].concat(b(s,t.replace(a.path,"")));const o=te(a);if(o.length){const c=b(o,t);if(c.length)return[a].concat(c)}return b(r,t)}function te(e){var t;return((t=e.children)==null?void 0:t.filter(({replace:a})=>a))??[]}function ne(e,t){return t?k(e,[],t):e}function k(e,t,a){if(e.length===0)return t;const[r,...i]=e,{children:s=[],...l}=r;if(O(l,a))t.push(r);else if(s.length>0){const o=k(s,[],a);o.length>0&&(l.children=o,t.push(l))}return k(i,t,a)}function ae(e,t){return t===e||t.startsWith(e+"/")}function O(e,t){return Q(e.label,t)}function y(e,t=""){return`${t}${J(e.replace(/\//g,"-"))}`}function H(e){return re(e).map(t=>t.path).join("/").replace(/\/+/g,"/")}const re=e=>{const t=[];for(const a of e)a.replace?t[t.length-1]=a:t.push(a);return t};function $(e,t){return e.every((a,r)=>{var i;return a.path===((i=t[r])==null?void 0:i.path)})}function ie(e,t){return e.length===t.length&&$(e,t)}function D({path:e,replace:t}){return t?{path:e,replace:t}:{path:e}}const P=u.createContext(void 0),V=({children:e,activeRoute:t=[]})=>{const[a,r]=u.useState(t),i=u.useMemo(()=>({isItemExpanded:s=>$(s,a),expandItem:r,toggleItem:(s,l=[])=>{const o=!!a.find(c=>c.path===s.path);r(o?l:l.concat(s))}}),[a]);return n.jsx(P,{value:i,children:e})};function oe(){const e=u.useContext(P);if(e===void 0)throw new Error("useExpandedItem must be used within a ExpandedItemContextProvider");return e}try{V.displayName="ExpandedItemContextProvider",V.__docgenInfo={description:"",displayName:"ExpandedItemContextProvider",props:{activeRoute:{defaultValue:{value:"[]"},description:"",name:"activeRoute",required:!1,type:{name:"Route[]"}}}}}catch{}function _({searchTerm:e,children:t}){if(!e||typeof t!="string")return t;const a=t.toLowerCase().indexOf(e.toLowerCase());if(a===-1)return t;const r=t.slice(0,a).replace(/\s$/g," "),i=t.slice(a,a+e.length).replace(/^\s/," ").replace(/\s$/," "),s=t.slice(a+e.length).replace(/^\s/," ");return n.jsxs("span",{style:{display:"inline-block"},children:[n.jsx("span",{children:r}),n.jsx("strong",{children:i}),n.jsx("span",{children:s})]})}try{_.displayName="Highlight",_.__docgenInfo={description:"",displayName:"Highlight",props:{searchTerm:{defaultValue:null,description:"",name:"searchTerm",required:!1,type:{name:"string"}}}}}catch{}const se="a";function I({sidebarRoute:e,activeRoute:t,searchTerm:a,parentRoute:r=[],as:i}){var A,L;const s=i||se,l=D(e),o=r.concat(l),c=H(o),p=ie(o,t),v=!!((A=e.children)!=null&&A.length),g=$(o,t),{isItemExpanded:C,expandItem:x,toggleItem:K}=oe(),Y=C(o),z=!!a&&!O(e,a),h=Y||z,w=y(c,"sidebar-subitems"),N=y(c,"sidebar-link"),G=(h?"nascondi":"mostra")+` il sotto menu della categoria "${e.label}"`;return v?n.jsxs(n.Fragment,{children:[n.jsxs(le,{$isActive:p,$hasActiveChild:g,children:[n.jsxs(j,{id:N,as:s,href:c,$isActive:p,$hasActiveChild:g,"aria-expanded":h,onClick:()=>x(o),"aria-controls":w,children:[e.icon,n.jsx(_,{searchTerm:a,children:e.label})]}),n.jsx(ce,{appearance:"ghost","aria-label":G,"aria-controls":w,"aria-expanded":h,onClick:()=>K(l,r),disabled:z,children:n.jsx(de,{$isExpanded:h})})]}),n.jsx(pe,{id:w,$isExpanded:h,children:(L=e.children)==null?void 0:L.map(R=>n.jsx(ue,{"aria-labelledby":y(H(o.concat(R)),"sidebar-link"),children:n.jsx(I,{as:s,sidebarRoute:R,parentRoute:o,activeRoute:t,searchTerm:a})},R.path))})]}):n.jsxs(j,{id:N,as:s,$isActive:p,href:c,onClick:()=>x(o),children:[e.icon,n.jsx(_,{searchTerm:a,children:e.label})]})}const U=f`
  flex-grow: 1;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  color: inherit;
  font-weight: 500;
  padding: var(--space-2) var(--space-2);
  border-radius: var(--border-radius);
  transition-property: background-color, box-shadow, color;
  transition-duration: 0.2s;
  &:hover {
    color: var(--secondary);
    background-color: var(--surface);
  }
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
    color: var(--primary);
    background-color: var(--primary-container);
    box-shadow: none;
  }
  ${e=>e.$isActive&&f`
      color: var(--primary);
      background-color: var(--primary-container);
    `}
  ${e=>e.$hasActiveChild&&f`
      color: var(--primary);
    `}

  & > svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
  & > svg:first-child {
    margin-right: var(--space-2);
  }
`,le=d.div`
  ${U}
  padding: 0;
`,ce=d(Z)`
  background: none;
  line-height: 0;
  color: inherit;
  & > svg {
    flex-shrink: 0;
  }
`,j=d.a`
  ${U}
`,de=d(X)`
  width: 18px;
  height: 18px;
  margin-left: auto;
  transform: ${e=>e.$isExpanded?"rotate(90deg)":"none"};
  transition: transform 0.25s;
`,ue=d.li`
  display: flex;
  flex-direction: column;
`,pe=d.ul`
  list-style: none;
  margin: 0;
  padding: var(--space-1) 0 0 var(--space-3);
  flex-direction: column;
  will-change: max-height;
  ${e=>e.$isExpanded?f`
          max-height: 60vh;
          visibility: visible;
          transition: max-height 0.25s ease-in-out 0.25s, visibility 0s 0.25s;
        `:f`
          overflow: hidden;
          max-height: 0;
          visibility: hidden;
          transition: max-height 0.25s ease-in-out 0s, visibility 0s 0.25s;
        `}
`;try{I.displayName="SidebarItem",I.__docgenInfo={description:"",displayName:"SidebarItem",props:{sidebarRoute:{defaultValue:null,description:"",name:"sidebarRoute",required:!0,type:{name:"SidebarRoute"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},parentRoute:{defaultValue:{value:"[]"},description:"",name:"parentRoute",required:!1,type:{name:"Route[]"}},searchTerm:{defaultValue:null,description:"",name:"searchTerm",required:!1,type:{name:"string"}},activeRoute:{defaultValue:null,description:"",name:"activeRoute",required:!0,type:{name:"Route[]"}},isButtonLink:{defaultValue:null,description:"",name:"isButtonLink",required:!1,type:{name:"boolean"}}}}}catch{}try{j.displayName="SidebarLink",j.__docgenInfo={description:"",displayName:"SidebarLink",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function E({items:e,activeRoute:t,searchTerm:a,LinkComponent:r}){return a&&!e.length?n.jsx("small",{children:"Nessun elemento"}):n.jsx(V,{activeRoute:t,children:n.jsx(he,{children:e.map(i=>n.jsx(me,{"aria-labelledby":y(i.path,"sidebar-link"),children:n.jsx(I,{as:r,sidebarRoute:i,activeRoute:t,searchTerm:a})},i.path))})})}const he=d.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: var(--space-2) 0;
`,me=d.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 var(--space-1);
`;try{E.displayName="SidebarItems",E.__docgenInfo={description:"",displayName:"SidebarItems",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SidebarRoute[]"}},searchTerm:{defaultValue:null,description:"",name:"searchTerm",required:!1,type:{name:"string"}},activeRoute:{defaultValue:null,description:"",name:"activeRoute",required:!0,type:{name:"Route[]"}},LinkComponent:{defaultValue:null,description:"",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const fe=({title:e,titleId:t,...a},r)=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:r,"aria-labelledby":t,...a},e?u.createElement("title",{id:t},e):null,u.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})),ve=u.forwardRef(fe);function q({onChange:e}){return n.jsxs(ge,{role:"search",onSubmit:t=>t.preventDefault(),children:[n.jsx(W,{children:n.jsx("label",{htmlFor:"search-input",children:"Cerca nel menu"})}),n.jsx(xe,{id:"search-input",name:"search",type:"search",placeholder:"Cerca...",spellCheck:!1,autoComplete:"off",onChange:t=>e(t.target.value)}),n.jsx(be,{width:"24",height:"24"})]})}const ge=d.form`
  position: relative;
  color: var(--on-background);
  border-bottom: 1px solid var(--outline);
`,xe=d.input`
  background-color: inherit;
  border: none;
  line-height: 2rem;
  font-size: inherit;
  color: var(--on-background);
  padding: var(--space-2) var(--space-4) var(--space-2) var(--space-3);
  width: 100%;
  border-bottom: 1px solid var(--neutral-10);
  border-radius: var(--border-radius);
  outline: none;
  &::placeholder {
    color: var(--on-background);
  }
  &:focus {
    box-shadow: var(--shadow-focus);
  }
`,be=d(ve)`
  margin: 0 var(--space-2);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;try{q.displayName="SidebarSearch",q.__docgenInfo={description:"",displayName:"SidebarSearch",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}}}catch{}function S({routes:e,children:t,className:a,activePath:r,LinkComponent:i,footer:s,ariaLabel:l="sidebar",asideId:o="aside",navId:c="main-navigation"}){const p=`${c}-label`,[v,g]=u.useState(""),C=u.useMemo(()=>ee(e,r),[r,e]),x=ne(e,v);return n.jsxs(ye,{className:a,id:o,children:[t,n.jsx(q,{onChange:g}),n.jsxs("nav",{id:c,"aria-labelledby":p,children:[n.jsx(W,{id:p,children:l}),n.jsx(E,{items:x,activeRoute:C,searchTerm:v,LinkComponent:i})]}),s]})}const ye=d.aside`
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-elevation-medium);
`;try{S.displayName="Sidebar",S.__docgenInfo={description:"",displayName:"Sidebar",props:{routes:{defaultValue:null,description:"",name:"routes",required:!0,type:{name:"SidebarRoute[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},activePath:{defaultValue:null,description:"",name:"activePath",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:null,description:"",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},asideId:{defaultValue:{value:"aside"},description:"",name:"asideId",required:!1,type:{name:"string"}},navId:{defaultValue:{value:"main-navigation"},description:"",name:"navId",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"sidebar"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}}}catch{}const M=()=>n.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 448 512",children:n.jsx("path",{fill:"currentColor",d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"})}),_e=()=>n.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 640 512",children:n.jsx("path",{fill:"currentColor",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"})}),Ie=()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[n.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n.jsx("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm11 0h-6.5l2-2H17c.55 0 1 .45 1 1s-.45 1-1 1z"})]}),je=()=>n.jsx("svg",{viewBox:"0 0 576 512","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"})}),Le={title:"Sidebar",component:S,argTypes:{}},Se=e=>n.jsx("div",{style:{display:"flex",maxWidth:"20vw",minHeight:"90vh"},children:n.jsx(S,{...e})}),m=Se.bind({});m.args={children:null,routes:[{path:"/",label:"Registro di classe",icon:n.jsx(M,{})},{path:"/voti",label:"Valutazioni",icon:n.jsx(je,{}),children:[{path:"/report-alunno",label:"Report alunno"},{path:"/report-obiettivi",label:"Report obiettivi"},{path:"/impostazioni",label:"Impostazioni",children:[{path:"/alunni",label:"Alunni"},{path:"/obiettivi",label:"Obiettivi"},{path:"/classi",label:"Classi",children:[{path:"/nuova",label:"Nuova classe"},{path:"/modifica",label:"Modifica classe"}]}]}]},{path:"/assenze",label:"Assenze",icon:n.jsx(_e,{})},{path:"/note",label:"Note",icon:n.jsx(Ie,{})},{path:"/report",label:"Report",icon:n.jsx(M,{})}]};var B,T,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  maxWidth: '20vw',
  minHeight: '90vh'
}}>
    <Sidebar {...args} />
  </div>`,...(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const He=["Aside"];export{m as Aside,He as __namedExportsOrder,Le as default};
