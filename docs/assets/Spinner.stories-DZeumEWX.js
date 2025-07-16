import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{l as _,d as x,m as T}from"./styled-components.browser.esm-DD6bt04G.js";import"./index-DatCARk7.js";const v=T`
    to {transform: rotate(360deg);}
`,s=x.div`
  display: inline-block;
  position: relative;
  ${({$size:e="1rem",$borderWidth:b=2,$color:h="var(--primary)",$backgroundColor:S="var(--outline)",$fullpage:$})=>_`
    width: ${r(e)};
    height: ${r(e)};
    margin: ${$?"30% 50%":0};
    &:before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: ${r(e)};
      height: ${r(e)};
      border-radius: 50%;
      border: ${r(b)} solid ${S};
      border-top-color: ${h};
      animation: ${v} 0.6s linear infinite;
    }
  `}
`,r=e=>typeof e=="number"?`${e}px`:e;try{s.displayName="Spinner",s.__docgenInfo={description:"",displayName:"Spinner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const C={title:"Spinner",component:s,argTypes:{}},i=e=>y.jsx(s,{...e}),a=i.bind({});a.args={};const o=i.bind({});o.args={$size:"5rem",$borderWidth:"0.5rem"};const t=i.bind({});t.args={color:"mediumslateblue",$backgroundColor:"lightsteelblue",$size:"5rem"};var n,d,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Spinner {...args} />",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Spinner {...args} />",...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Spinner {...args} />",...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const D=["Default","Large","Colorful"];export{t as Colorful,a as Default,o as Large,D as __namedExportsOrder,C as default};
