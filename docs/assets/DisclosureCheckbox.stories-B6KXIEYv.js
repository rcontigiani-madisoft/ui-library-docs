import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DatCARk7.js";import{d,l as p}from"./styled-components.browser.esm-DD6bt04G.js";import{F as D}from"./done-JR9L2hyb.js";import{F as _}from"./circle-exclamation-BXEBVndQ.js";import{s as j}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import{R as q}from"./Flex-DwwaOy33.js";import{H as A}from"./HintIcon-DRByZ8Uu.js";import"./info-DX6kh3Lj.js";import"./hint-CWBE4nNZ.js";import"./Tooltip-FXVI7MEq.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";import"./popover.module-_MiSh5dU.js";import"./isNewDesignEnabled-CECVVFcR.js";function n({defaultChecked:e=!1,...a}){const[l,s]=v.useState(e);return r.jsx(u,{isOpen:l,onClick:()=>s(t=>!t),...a})}function u({label:e,id:a=j(e),hint:l,children:s,isOpen:t,className:C,error:m,onClick:V}){const c=`disclosure-panel-${a}`;return I(c,t),r.jsxs("div",{className:C,children:[r.jsxs(q,{$gap:"var(--space-2)",children:[r.jsxs(R,{type:"button",onClick:V,"aria-expanded":t,"aria-controls":c,children:[r.jsx(E,{$visible:t,"aria-hidden":!0}),e]}),l?r.jsx(A,{size:14,hint:l}):null]}),m&&r.jsxs(T,{children:[r.jsx(_,{width:"14",height:"14"}),m]}),r.jsx(F,{id:c,hidden:!t,children:s})]})}function I(e,a){v.useEffect(()=>{const l=document.getElementById(e);l==null||l.querySelectorAll("input,textarea").forEach(s=>{const t=s;N(t,a),w(t,a)})})}function N(e,a){a?(e.hasAttribute("data-value")&&(e.value=e.getAttribute("data-value")||"",e.removeAttribute("data-value")),e.hasAttribute("data-default-value")&&(e.defaultValue=e.getAttribute("data-default-value")||"",e.removeAttribute("data-default-value"))):(e.value&&(e.setAttribute("data-value",e.value),e.value=""),e.defaultValue&&(e.setAttribute("data-default-value",e.defaultValue),e.defaultValue=""))}function w(e,a){!a&&e.checked&&(e.setAttribute("data-checked",e.checked?"checked":""),e.value=""),a&&e.hasAttribute("data-checked")&&(e.setAttribute("data-checked",e.checked?"checked":""),e.value="")}const E=d(D)`
  stroke: currentColor;
  stroke-width: 4px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  border: 2px solid var(--inactive);
  border-radius: 4px;
  color: var(--primary);
  transition: color 0.2s, background-color 0.2s, border 0.2s;
  padding: 2px;
  ${({$visible:e})=>e?p`
          background-color: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
        `:p`
          color: transparent;
        `}
`,T=d.small`
  font-weight: 600;
  color: var(--error);
  margin-bottom: var(--space-2);
  display: flex;
  align-items: center;
  gap: var(--space-1);
`,F=d.div`
  [hidden] {
    display: none;
  }
`,R=d.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: var(--space-2) 0;
  text-align: start;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--on-background);
  &:hover > svg {
    border-color: var(--secondary);
  }
`;try{n.displayName="DisclosureCheckbox",n.__docgenInfo={description:"",displayName:"DisclosureCheckbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}}}}}catch{}try{u.displayName="ControlledDisclosureCheckbox",u.__docgenInfo={description:"",displayName:"ControlledDisclosureCheckbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:{value:"slugify(label)"},description:"",name:"id",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const Y={title:"Forms/Disclosure Checkbox",component:n,argTypes:{}},k=e=>r.jsxs("form",{children:[r.jsx(n,{...e}),r.jsxs("label",{children:["Tel ",r.jsx("input",{type:"tel"})]})]}),o=k.bind({});o.args={label:"Descrizione completa",children:r.jsxs("label",{children:["Descrizione completa",r.jsx("textarea",{})]})};const i=k.bind({});i.args={...o.args,hint:"La descrizione è privata per i docenti"};var f,h,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => <form>
    <DisclosureCheckbox {...args} />
    <label>
      Tel <input type="tel" />
    </label>
  </form>`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,x,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => <form>
    <DisclosureCheckbox {...args} />
    <label>
      Tel <input type="tel" />
    </label>
  </form>`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const Z=["Disclosure","DisclosureWithHint"];export{o as Disclosure,i as DisclosureWithHint,Z as __namedExportsOrder,Y as default};
