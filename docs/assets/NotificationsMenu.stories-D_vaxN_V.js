import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{d as n,l as f}from"./styled-components.browser.esm-DD6bt04G.js";import{F as $}from"./calendar-empty-V1By7M1a.js";import{F as E}from"./lock-C1jbjoO5.js";import{F as V}from"./file-download-BVPoERnK.js";import{C as I,R as k}from"./Flex-DwwaOy33.js";import{E as R}from"./Empty-ue3TZylU.js";import{b as B,s as q}from"./strings-Bn8L0l--.js";import{f as D,m as F}from"./date-DLO9q3mC.js";import"./string-BWSckzgf.js";import{a as w}from"./Button-bb1s2N95.js";import{r as o}from"./index-DatCARk7.js";import{F as T}from"./close-BA1MdWQD.js";import{U as A}from"./Ul-ChFEAKwj.js";import{L as H}from"./Li-BKSEzY3f.js";import{P}from"./Popover-OOY3LJLk.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";import"./dialog.utils-CnFIdgQW.js";import"./usePopoverPosition-DScRzE65.js";import"./functions-DAFblV6k.js";import"./popover.module-_MiSh5dU.js";function c({as:e,title:t,children:a,timestamp:r,...l}){const m=B(q(t+r)),d=`notification-menu-link-title-${m}`,u=`notification-menu-link-description-${m}`;return i.jsx(X,{forwardedAs:e??"a","aria-labelledby":d,"aria-describedby":u,...l,children:i.jsxs(I,{children:[i.jsx(O,{id:d,children:t}),i.jsxs(W,{id:u,children:[a,r&&i.jsx(U,{timestamp:r})]})]})})}function U({timestamp:e}){const t=new Date(e),a=D(t,"dd/MM/yyyy HH:mm");return i.jsx(G,{title:a,children:F(t)})}const X=n(w)`
  border: none;
`,O=n.strong`
  font-weight: 600;
  margin: var(--space-1) 0;
`,W=n.span`
  font-weight: 400;
  font-size: var(--font-size-small);
`,G=n.small`
  display: block;
  color: var(--inactive);
  margin-top: var(--space-1);
`;try{c.displayName="NotificationsMenuLink",c.__docgenInfo={description:"",displayName:"NotificationsMenuLink",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const J=({title:e,titleId:t,...a},r)=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",ref:r,"aria-labelledby":t,...a},e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"})),K=o.forwardRef(J),v=({selectedMenuItem:e,onBack:t})=>i.jsxs(ee,{$visible:!!e,children:[i.jsxs(Y,{$alignItems:"center",$gap:"var(--space-2)",children:[i.jsx(Z,{"aria-label":"torna a tutte le notifiche",onClick:t,disabled:!e,children:i.jsx(K,{width:"14",height:"14"})}),i.jsxs(ie,{children:["Notifiche ",e==null?void 0:e.title.toLowerCase()]})]}),i.jsx(Q,{children:e==null?void 0:e.children})]}),Q=n.div`
  overflow: auto;
  max-height: 70vh;
  padding: var(--space-1) var(--space-2);
`,Y=n(k)`
  padding: var(--space-1) var(--space-2);
`,Z=n(w)`
  display: inline-flex;
`,ee=n.div`
  position: static;
  transition: transform 0.25s ease-out;
  ${({$visible:e})=>e?f`
          transform: translateX(0);
          height: auto;
        `:f`
          transform: translateX(200%);
          height: 0;
        `}
`,ie=n.h3`
  margin: var(--space-2) 0;
  font-size: var(--font-size-large);
  line-height: var(--font-size-large);
`;try{v.displayName="NotificationsMenuDetail",v.__docgenInfo={description:"",displayName:"NotificationsMenuDetail",props:{selectedMenuItem:{defaultValue:null,description:"",name:"selectedMenuItem",required:!1,type:{name:"NotificationsMenuItemConfig"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!0,type:{name:"() => void"}}}}}catch{}function C(e,t=99){return Number.isNaN(e)?"":e<=t?`${e}`:`${t}+`}function y({icon:e,children:t,count:a=0,onSelect:r,disabled:l}){return i.jsxs(te,{"aria-label":`${t}, ${a} da leggere`,onClick:r,appearance:"ghost",disabled:l,children:[e&&i.jsx(ae,{children:e}),t,a>0&&i.jsx(ne,{children:C(a)})]})}const te=n(w)`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background: none;
  border: none;
  min-height: 30px;
  padding: var(--space-1);
  color: var(--on-background);
`,ne=n.span`
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  font-size: var(--font-size-small);
  font-weight: bold;
  border-radius: 50%;
  color: var(--on-primary);
  background-color: var(--highlight);
`,ae=n.span`
  height: 18px;
  & > svg {
    width: 18px;
    height: 18px;
  }
`;try{y.displayName="NotificationsMenuListItem",y.__docgenInfo={description:"",displayName:"NotificationsMenuListItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},count:{defaultValue:{value:"0"},description:"",name:"count",required:!1,type:{name:"number"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const x=({items:e,onItemSelect:t,visible:a})=>i.jsx(re,{"aria-labelledby":"notifications-menu-title",$visible:a,children:e.map(r=>i.jsx(oe,{children:i.jsx(y,{count:r.count,icon:r.icon,onSelect:()=>t(r),disabled:!a,children:r.title})},r.key))}),re=n(A)`
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease-out;
  ${({$visible:e})=>e?f`
          transform: translateX(0);
          height: auto;
          padding: var(--space-2);
        `:f`
          transform: translateX(-200%);
          height: 0;
          padding: 0;
        `}
`,oe=n(H)`
  display: flex;
  flex-direction: column;
`;try{x.displayName="NotificationsMenuList",x.__docgenInfo={description:"",displayName:"NotificationsMenuList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"NotificationsMenuItemConfig[]"}},onItemSelect:{defaultValue:null,description:"",name:"onItemSelect",required:!0,type:{name:"(item: NotificationsMenuItemConfig) => void"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}}}catch{}const se=({title:e,titleId:t,...a},r)=>o.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bell",fill:"currentColor",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:r,"aria-labelledby":t,...a},e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"})),ce=o.forwardRef(se);function b({count:e,...t}){return i.jsx(le,{children:i.jsxs(de,{"aria-label":`notifiche, ${e} da leggere`,...t,children:[i.jsx(ce,{width:14,height:14}),e>0&&i.jsx(ue,{"data-testid":"notification-badge",children:C(e)})]})})}const le=n.div`
  position: relative;
  display: flex;
  padding: 0.1rem 0.5rem;
`,de=n.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  background-color: var(--on-primary);
  color: var(--primary);
  &:hover {
    background-color: var(--primary-variant);
  }
`,ue=n.small`
  position: absolute;
  top: -2px;
  right: 0;
  min-width: 1.3rem;
  height: 1.3rem;
  padding: var(--space-1);
  line-height: 1;
  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  color: var(--on-primary);
  background-color: var(--highlight);
`;try{b.displayName="NotificationsMenuButton",b.__docgenInfo={description:"",displayName:"NotificationsMenuButton",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}}}catch{}function h({className:e,items:t}){const a=o.useRef(null),[r,l]=o.useState(!1),[m,d]=o.useState(""),u=t.find(s=>s.key===m),L=t.reduce((s,S)=>s+S.count,0),_=()=>d(""),g=s=>{l(s),_()};return i.jsxs(i.Fragment,{children:[i.jsx(b,{ref:a,className:e,count:L,onClick:()=>l(s=>!s)}),i.jsxs(he,{open:r,triggerRef:a,onDismiss:()=>g(!1),onClick:pe(()=>g(!1)),"aria-labelledby":"notifications-menu-title",children:[i.jsx(fe,{id:"notifications-menu-title",children:"Notifiche"}),i.jsxs(ve,{children:[i.jsx(x,{items:t,onItemSelect:s=>d(s.key),visible:!u}),i.jsx(v,{selectedMenuItem:u,onBack:_})]}),i.jsx(ge,{"aria-label":"chiudi",onClick:()=>g(!1),children:i.jsx(T,{width:"14",height:"14"})})]})]})}function pe(e){return t=>{me(t.target)&&e()}}function me(e){return e instanceof Element&&e.closest("a")!==null}const fe=n.h2`
  margin: var(--space-3) var(--space-2) 0;
  font-size: var(--font-size-extra-large);
`,he=n(P)`
  width: 90vw;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-elevation-high);
  margin-top: var(--space-1);
  margin-left: var(--space-4);

  @media screen and (min-width: 768px) {
    width: 20rem;
  }
  @media screen and (min-width: 1024px) {
    width: 25rem;
  }
`,ge=n.button`
  display: inline-flex;
  color: var(--on-background);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  position: absolute;
  top: 0;
  right: 0;
  padding: var(--space-2);
  &:hover {
    color: var(--primary);
  }
`,ve=n.div`
  position: relative;
  overflow: hidden;
`;try{h.displayName="NotificationsMenu",h.__docgenInfo={description:"",displayName:"NotificationsMenu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"NotificationsMenuItemConfig[]"}}}}}catch{}const Oe={title:"Notifications Menu",component:h},ye=e=>i.jsx(k,{children:i.jsx(h,{...e,items:[{key:"events",title:"Eventi",count:2,icon:i.jsx($,{}),children:xe},{key:"secrets",title:"Chiavi di sicurezza",count:10,icon:i.jsx(E,{}),children:be},{key:"download",title:"Scaricati",count:0,icon:i.jsx(V,{}),children:we}]})}),M=n.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,xe=i.jsxs(M,{children:[i.jsx(c,{href:"/eventi/1",title:"Compito in classe",children:"Domani si svolgerà il compito in classe di matematica sulla risoluzione degli integrali"}),i.jsx(c,{href:"/eventi/2",title:"Gita scolastica",children:"La gita scolastica è programmata dal 15 al 23 aprile a Parigi"}),i.jsx(c,{href:"/eventi/3",title:"Assemblea di istituto",children:"L'assemblea di istituto si terrà al palazzetto di Via Veneto il 31 gennaio"})]}),be=i.jsxs(M,{children:[i.jsx(c,{href:"/sicurezza/1",title:"Chiave di sicurezza rimossa",timestamp:"2023-01-20T09:31:21+01:00",children:"Una chiave di sicurezza è stata rimossa dal tuo account"}),i.jsx(c,{as:"a",href:"/sicurezza/2",title:"Nuovo utilizzo di una chiave di sicurezza",timestamp:"2023-01-19T10:12:32+01:00",children:"Abbiamo rilevato un nuovo accesso al tuo account da dispositivo mobile utilizzando una delle chiavi di sicurezza"}),i.jsx(c,{href:"/sicurezza/3",title:"Chiave di sicurezza modificata",timestamp:"2023-01-19T10:09:12+01:00",children:"Una chiave di sicurezza è stata modificata"})]}),we=i.jsx(R,{title:"Contenuto custom",children:"Nessun file scaricato"}),p=ye.bind({});p.args={};var N,j,z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Row>
      <NotificationsMenu {...args} items={[{
      key: "events",
      title: "Eventi",
      count: 2,
      icon: <Calendar />,
      children: notificheEventi
    }, {
      key: "secrets",
      title: "Chiavi di sicurezza",
      count: 10,
      icon: <Lock />,
      children: notificheSicurezza
    }, {
      key: "download",
      title: "Scaricati",
      count: 0,
      icon: <Download />,
      children: notificheScaricati
    }]} />
    </Row>;
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const We=["Default"];export{p as Default,We as __namedExportsOrder,Oe as default};
