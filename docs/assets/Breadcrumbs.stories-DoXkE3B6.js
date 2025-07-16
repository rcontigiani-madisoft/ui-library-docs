import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as b}from"./styled-components.browser.esm-DD6bt04G.js";import{V as g}from"./VisuallyHidden-BUtF7OPd.js";import{a as y}from"./Button-bb1s2N95.js";import"./index-DatCARk7.js";import"./Flex-DwwaOy33.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";const i=({items:r,className:o,LinkBehavior:l="a"})=>e.jsxs(e.Fragment,{children:[e.jsx(g,{id:"breadcrumbs-title",children:"Breadcrumbs"}),e.jsx("nav",{"aria-labelledby":"breadcrumbs-title",className:o,children:e.jsx(k,{"aria-labelledby":"breadcrumbs-title",children:r.map((a,t,h)=>e.jsx(B,{children:e.jsx(y,{as:l,href:a.href,appearance:"ghost","aria-current":t===h.length-1?"page":void 0,children:a.label})},t))})})]}),k=b.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`,B=b.li`
  display: inline;

  &:not(:last-of-type)::after {
    content: '/';
    margin: 0 var(--space-1);
  }
`;try{i.displayName="Breadcrumbs",i.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ label: string; href: string; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},LinkBehavior:{defaultValue:{value:"a"},description:"",name:"LinkBehavior",required:!1,type:{name:'"a" | LinkInterface'}}}}}catch{}const H={component:i,title:"Breadcrumbs"},s={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Product Details",href:"/products/123"}]}},_=({href:r,children:o,className:l,"aria-current":a})=>e.jsx("a",{href:r,className:`custom-link ${l||""}`,"aria-current":a,onClick:t=>{t.preventDefault(),console.log(`Navigating to ${r}`)},children:o}),n={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Product Details",href:"/products/123"}],LinkBehavior:_}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Product Details',
      href: '/products/123'
    }]
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Product Details',
      href: '/products/123'
    }],
    LinkBehavior: CustomLink
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const V=["Default","WithCustomLink"];export{s as Default,n as WithCustomLink,V as __namedExportsOrder,H as default};
