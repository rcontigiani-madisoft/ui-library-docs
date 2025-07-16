import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{l as m,d as n}from"./styled-components.browser.esm-DD6bt04G.js";import{R as g,C as v}from"./Flex-DwwaOy33.js";import{s as h}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import{t as o}from"./theme.utils-BeVOnAPh.js";function d({title:e,appearance:a="info",ariaRole:l="alert",className:c,children:u,onClose:t}){const{Icon:p,...i}=o[a],s=h(e),f=l===null?void 0:l;return r.jsx(b,{className:c,...i,role:f,"aria-labelledby":s,children:r.jsxs(g,{children:[r.jsx(p,{width:12,height:12,className:"alert__icon","aria-hidden":"true"}),r.jsxs(x,{children:[r.jsx(_,{id:s,...i,children:e}),u]}),!!t&&r.jsx(y,{onClick:t,children:"×"})]})})}const b=n.div`
  border-radius: var(--border-radius);
  border-left: 3px solid transparent;
  padding: var(--space-1) var(--space-1) var(--space-1) var(--space-3);
  ${({$backgroundColor:e=o.info.$backgroundColor,$color:a=o.info.$color})=>m`
    background-color: ${e};
    border-left-color: ${a};
    color: ${a};
    & .alert__icon {
      margin-top: var(--space-1);
      color: ${a};
      flex-shrink: 0;
    }
  `}
`,x=n(v)`
  margin-left: var(--space-2);
  flex-grow: 1;
`,_=n.strong`
  color: ${({$color:e=o.info.$color})=>e};
`,y=n.button`
  cursor: pointer;
  border: none;
  background: none;
  font-size: 1rem;
  padding: 0;
  line-height: 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: var(--border-radius);
  transition: background-color 0.2s;
  &:hover {
    background-color: #ffffff55;
  }
`;try{d.displayName="Alert",d.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},appearance:{defaultValue:{value:"info"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},ariaRole:{defaultValue:{value:"alert"},description:"",name:"ariaRole",required:!1,type:{name:"AriaRole | null"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}export{d as A};
