import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-DatCARk7.js";import{d as u,l as t}from"./styled-components.browser.esm-DD6bt04G.js";function l({children:e,secondary:n,isSecondaryOpen:o,secondaryWidth:a="30%",mobileBreakpoint:w=920,left:$=!1,className:k}){const m={$isSecondaryOpen:o,$left:$,$secondaryWidth:a,$mobileBreakpoint:w};return r.jsxs(O,{className:k,children:[r.jsx(T,{...m,children:e}),r.jsx(L,{...m,children:n})]})}const O=u.div`
  display: flex;
  position: relative;
  overflow: hidden;
`,T=u.div`
  flex: 1;
  overflow-x: auto;
  transition:
    margin-left 0.3s ease,
    margin-right 0.3s ease;
  ${({$left:e,$isSecondaryOpen:n,$secondaryWidth:o,$mobileBreakpoint:a})=>n?t`
          visibility: hidden;
          @media ${c(a)} {
            visibility: visible;
            ${e?"margin-left":"margin-right"}: ${o};
          }
        `:""}
`,L=u.div`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${e=>e.$left?"-100%":"100%"});
  position: absolute;
  overflow-y: auto;
  ${({$left:e})=>e?t`
          left: 0;
        `:t`
          right: 0;
        `}
  ${({$isSecondaryOpen:e,$left:n,$secondaryWidth:o,$mobileBreakpoint:a})=>e?t`
          transform: translateX(0);
          @media ${c(a)} {
            width: ${o};
          }
        `:t`
          transform: translateX(${n?"-100%":"100%"});
          visibility: hidden;

          @media ${c(a)} {
            width: 0;
          }
        `}
`,c=e=>`screen and (min-width: ${e}px)`;try{l.displayName="TwoColumnsLayout",l.__docgenInfo={description:"",displayName:"TwoColumnsLayout",props:{secondary:{defaultValue:null,description:"",name:"secondary",required:!0,type:{name:"ReactNode"}},isSecondaryOpen:{defaultValue:null,description:"",name:"isSecondaryOpen",required:!0,type:{name:"boolean"}},secondaryWidth:{defaultValue:{value:"30%"},description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},mobileBreakpoint:{defaultValue:{value:"920"},description:"",name:"mobileBreakpoint",required:!1,type:{name:"number"}},left:{defaultValue:{value:"false"},description:"",name:"left",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Two Columns Layout",component:l},S=e=>r.jsx(l,{...e}),_=e=>{const[n,o]=j.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>o(a=>!a),children:"Toggle"}),r.jsx(l,{isSecondaryOpen:n,secondary:r.jsx("div",{style:{backgroundColor:"var(--surface-variant)",padding:"var(--space-3)",border:"1px solid var(--inactive)"},children:"Secondary Column"}),left:e.left,secondaryWidth:e.secondaryWidth,mobileBreakpoint:e.mobileBreakpoint,children:r.jsx("div",{style:{backgroundColor:"var(--primary-container)",padding:"var(--space-3)",border:"1px solid var(--primary)"},children:"Primary Column"})})]})},s=_.bind({});s.args={children:r.jsx("h1",{style:{backgroundColor:"var(--primary-container)",minHeight:"80vh"},children:"Primary Column"}),secondary:r.jsx("h2",{style:{backgroundColor:"var(--surface-variant)",minHeight:"80vh"},children:"Secondary Column"}),isSecondaryOpen:!0};const i=S.bind({});i.args={...s.args,isSecondaryOpen:!1};const d=S.bind({});d.args={...s.args,left:!0};var p,y,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [isSecondaryOpen, setIsSecondaryOpen] = React.useState(false);
  return <>
      <button onClick={() => setIsSecondaryOpen(open => !open)}>
        Toggle
      </button>
      <TwoColumnsLayout isSecondaryOpen={isSecondaryOpen} secondary={<div style={{
      backgroundColor: 'var(--surface-variant)',
      padding: 'var(--space-3)',
      border: '1px solid var(--inactive)'
    }}>
            Secondary Column
          </div>} left={args.left} secondaryWidth={args.secondaryWidth} mobileBreakpoint={args.mobileBreakpoint}>
        <div style={{
        backgroundColor: 'var(--primary-container)',
        padding: 'var(--space-3)',
        border: '1px solid var(--primary)'
      }}>
          Primary Column
        </div>
      </TwoColumnsLayout>
    </>;
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,v,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"args => <TwoColumnsLayout {...args} />",...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,C,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"args => <TwoColumnsLayout {...args} />",...(x=(C=d.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const I=["Default","SecondaryClosed","Left"];export{s as Default,d as Left,i as SecondaryClosed,I as __namedExportsOrder,V as default};
