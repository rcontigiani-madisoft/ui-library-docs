import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{l as y,d}from"./styled-components.browser.esm-DD6bt04G.js";import{r as c}from"./index-DatCARk7.js";import{d as D}from"./functions-DAFblV6k.js";import"./string-BWSckzgf.js";import{R as $,C as f}from"./Flex-DwwaOy33.js";function j(){const[e,a]=c.useState(0),r=c.useRef(null);return c.useEffect(()=>{const o=()=>{r.current&&a(r.current.getBoundingClientRect().y)};o();const s=D(o,500);return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),{refObject:r,yPosition:e}}function n({children:e,masterRatio:a=1,detailFlex:r=1}){const[o,s]=e,{refObject:x,yPosition:h}=j(),l=!!s;return t.jsxs(w,{ref:x,$y:h,$hasDetail:l,children:[t.jsx(_,{$hasDetail:l,$flex:a,children:o}),l&&t.jsx(L,{$flex:r,children:s})]})}const w=d($)`
  ${({$hasDetail:e,$y:a})=>e&&y`
      @media screen and (min-width: 768px) {
        max-height: calc(100vh - ${a}px);
      }
    `};
`,_=d(f)`
  flex: ${e=>e.$hasDetail?0:1};
  display: ${e=>e.$hasDetail?"none":"block"};
  min-width: 0;

  @media screen and (min-width: 768px) {
    flex: ${e=>e.$flex};
    display: block;
    overflow-y: auto;
  }
`,L=d(f)`
  flex: ${e=>e.$flex};
  @media screen and (min-width: 768px) {
    overflow-y: auto;
  }
`;try{n.displayName="MasterDetailLayout",n.__docgenInfo={description:"",displayName:"MasterDetailLayout",props:{masterRatio:{defaultValue:{value:"1"},description:"",name:"masterRatio",required:!1,type:{name:"number"}},detailFlex:{defaultValue:{value:"1"},description:"",name:"detailFlex",required:!1,type:{name:"number"}}}}}catch{}const P={title:"Master detail",component:n},M=e=>t.jsx(n,{children:e.children}),i=M.bind({});i.args={children:[t.jsxs("ul",{children:[t.jsx("li",{children:"Item 1"}),t.jsx("li",{children:"Item 2"}),t.jsx("li",{children:"Item 3"}),t.jsx("li",{children:"Item 4"})]},"list"),t.jsx("div",{children:"Detail Item 1"},"detail")]};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"args => <MasterDetailLayout>{args.children}</MasterDetailLayout>",...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const z=["DefaultMasterDetailLayout"];export{i as DefaultMasterDetailLayout,z as __namedExportsOrder,P as default};
