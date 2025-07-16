import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d}from"./styled-components.browser.esm-DD6bt04G.js";import{R as f,C as m}from"./Flex-DwwaOy33.js";import{r as i}from"./index-DatCARk7.js";function n(e){const t=i.useRef(null);return i.useEffect(()=>{var r;e&&((r=t.current)==null||r.focus())},[e]),t}try{n.displayName="useAutoFocusHeadingRef",n.__docgenInfo={description:"",displayName:"useAutoFocusHeadingRef",props:{}}}catch{}function s({title:e,titleId:t,subtitle:r,subtitleId:l,className:o,beforeChildren:u,children:c}){const p=n(e);return a.jsxs(g,{className:o,children:[a.jsxs(f,{$gap:"var(--space-2)",children:[u,a.jsxs(m,{"data-title-container":!0,children:[a.jsx(h,{id:t,tabIndex:-1,ref:p,children:e}),a.jsx("small",{id:l,children:r})]})]}),c]})}const g=d.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-2);
  box-shadow: var(--shadow-elevation-medium);
  margin-bottom: var(--space-3);
  @media screen and (min-width: 768px) {
    padding: var(--space-2) var(--space-3);
  }
  @media print {
    display: none;
  }
`,h=d.h1`
  font-size: var(--font-size-large);
  font-weight: 600;
  margin: auto 0;
  outline: none;
`;try{s.displayName="PageHeader",s.__docgenInfo={description:"",displayName:"PageHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleId:{defaultValue:null,description:"",name:"titleId",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},subtitleId:{defaultValue:null,description:"",name:"subtitleId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},beforeChildren:{defaultValue:null,description:"",name:"beforeChildren",required:!1,type:{name:"ReactNode"}}}}}catch{}export{s as P};
