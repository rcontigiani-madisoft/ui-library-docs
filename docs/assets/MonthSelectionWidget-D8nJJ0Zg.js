import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as u,h as p,f as a}from"./date-DLO9q3mC.js";import"./string-BWSckzgf.js";import{M as h,a as M,b as f,c as g}from"./MenuList-DwIza7ud.js";import{M as x}from"./MonthPicker-D89dfM91.js";import{d as l,l as v}from"./styled-components.browser.esm-DD6bt04G.js";import{D as i}from"./DateHandle-BqCLvfPI.js";import{R as b}from"./Flex-DwwaOy33.js";import{a as y}from"./Button-bb1s2N95.js";import{F as j}from"./calendar-empty-V1By7M1a.js";function c({selected:o=new Date,onSelect:t,className:r}){const n=u(o,1),s=p(o,1),d="Seleziona mese precedente, "+a(n,"MMMM"),m="Seleziona mese successivo, "+a(s,"MMMM");return e.jsx("div",{className:r,children:e.jsxs(b,{$alignItems:"stretch",children:[e.jsx(i,{ariaLabel:d,onClick:()=>t(n),direction:"left",size:"small"}),e.jsxs(h,{children:[e.jsxs(D,{children:[e.jsx(j,{width:16,height:16,"aria-hidden":!0})," ",a(o,"MMM yyyy")]}),e.jsx(M,{children:e.jsx(x,{selected:o,ButtonComponent:k,onSelect:t})})]}),e.jsx(i,{ariaLabel:m,onClick:()=>t(s),direction:"right",size:"small"}),e.jsx(_,{onClick:()=>t(new Date),size:"small",children:"Oggi"})]})})}const k=({children:o,onClick:t,className:r})=>e.jsx(f,{className:r,onSelect:t,children:o}),w=v`
  display: flex;
  align-items: center;
  background: none;
  outline: none;
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
  color: var(--on-background);
  & svg {
    margin-right: var(--space-1);
  }
  &:hover {
    background-color: var(--primary-container);
    color: var(--on-background);
  }
  &:active,
  &[aria-expanded="true"] {
    background-color: var(--primary-container);
    color: var(--secondary);
  }
  &:focus {
    box-shadow: var(--shadow-focus);
    z-index: 1;
  }
`,D=l(g)`
  border: none;
  border-top: 1px solid var(--outline);
  border-bottom: 1px solid var(--outline);
  ${w}
`,_=l(y)`
  margin-left: var(--space-1);
`;try{c.displayName="MonthSelectionWidget",c.__docgenInfo={description:"",displayName:"MonthSelectionWidget",props:{selected:{defaultValue:{value:"new Date()"},description:"",name:"selected",required:!1,type:{name:"Date"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(date: Date) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{c as M,w as p};
