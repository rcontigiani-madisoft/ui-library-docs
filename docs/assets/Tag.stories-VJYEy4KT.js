import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{l,d as y}from"./styled-components.browser.esm-DD6bt04G.js";import{a as j}from"./Button-bb1s2N95.js";import{F as $}from"./close-BA1MdWQD.js";import{t as c}from"./theme.utils-BeVOnAPh.js";import"./index-DatCARk7.js";import"./Flex-DwwaOy33.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";import"./circle-exclamation-BXEBVndQ.js";import"./info-DX6kh3Lj.js";import"./triangle-exclamation-DQjt3Dp9.js";function n({id:e,appearance:a="info",noIcon:t=!1,size:z="medium",className:I,children:T,onClose:d}){const{Icon:w,...N}=c[a];return r.jsxs(q,{id:e,$size:z,className:I,...N,children:[!t&&r.jsx(w,{className:"tag__icon","aria-hidden":"true"}),T,!!d&&r.jsx(V,{type:"button","aria-label":"chiudi",size:"small",appearance:"ghost",onClick:d,children:r.jsx($,{className:"tag__close"})})]})}const q=y.span`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--outline);
  ${({$backgroundColor:e=c.info.$backgroundColor,$color:a=c.info.$color,$size:t})=>l`
    background-color: ${e};
    color: ${a};
    & .tag__icon {
      color: ${a};
      margin-right: var(--space-2);
      flex-shrink: 0;
    }
    & .tag__close {
      color: ${a};
    }
    ${t==="small"?l`
          padding: 0 2px;
          font-size: var(--font-size-small);
          font-weight: 600;
          & .tag__icon {
            width: 14px;
            height: 14px;
          }
          & .tag__close {
            width: 12px;
            height: 12px;
          }
        `:l`
          padding: 2px 4px;
          font-size: var(--font-size-regular);
          font-weight: 500;
          & .tag__icon {
            width: 16px;
            height: 16px;
          }
          & .tag__close {
            width: 14px;
            height: 14px;
          }
        `}
  `}
`,V=y(j)`
  margin-left: var(--space-2);
  line-height: 0;
`;try{n.displayName="Tag",n.__docgenInfo={description:"",displayName:"Tag",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},appearance:{defaultValue:{value:"info"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},noIcon:{defaultValue:{value:"false"},description:"",name:"noIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const A={title:"Tag",component:n},p=e=>r.jsx(n,{...e}),o=p.bind({});o.args={appearance:"info",noIcon:!1,size:"medium",children:"Label"};const s=p.bind({});s.args={appearance:"info",noIcon:!0,size:"medium",children:"Label"};const i=p.bind({});i.args={appearance:"info",noIcon:!0,size:"small",children:"Label"};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Tag {...args} />",...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Tag {...args} />",...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var x,v,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Tag {...args} />",...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const G=["Default","NoIcon","Small"];export{o as Default,s as NoIcon,i as Small,G as __namedExportsOrder,A as default};
