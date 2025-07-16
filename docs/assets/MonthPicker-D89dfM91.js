import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{j as u,f as p,k as m}from"./date-DLO9q3mC.js";import"./string-BWSckzgf.js";import{r as b}from"./index-DatCARk7.js";import{d as n,l as v}from"./styled-components.browser.esm-DD6bt04G.js";import{D as c}from"./DateHandle-BqCLvfPI.js";import{R as g,C as f}from"./Flex-DwwaOy33.js";function s({selected:r=new Date,onSelect:d,ButtonComponent:l}){const[o,t]=b.useState(r.getFullYear());return a.jsxs(x,{children:[a.jsxs(g,{$alignItems:"stretch",children:[a.jsx(c,{ariaLabel:`Seleziona anno precedente, ${o-1}`,onClick:()=>t(e=>i(e-1)),direction:"left"}),a.jsx(y,{type:"number",value:o,onChange:e=>t(i(Number(e.target.value)))}),a.jsx(c,{ariaLabel:`Seleziona anno successivo, ${o+1}`,onClick:()=>t(e=>i(e+1)),direction:"right"})]}),a.jsx(M,{children:u({start:new Date(o,0,1),end:new Date(o,11,31)}).map(e=>a.jsx(w,{as:l,onClick:()=>d(e),$selected:m(e,r),children:p(e,"MMM")},e.getTime()))})]})}const h=0,k=9999;function i(r){return Math.max(h,Math.min(k,r))}const x=n(f)`
  max-width: 10rem;
  padding: var(--space-2);
  background-color: var(--background);
`,y=n.input`
  text-align: center;
  border: none;
  flex: 1;
  min-width: 0;
  margin: 0 var(--space-2);
  border-radius: var(--border-radius);
  outline: none;
  transition: background-color 0.2s, box-shadow 0.2s;
  &:hover:not(:focus) {
    background-color: var(--surface-variant);
    color: var(--on-background);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    box-shadow: var(--shadow-focus);
  }

  /* Firefox */
  &[type="number"] {
    appearance: textfield;
  }
`,M=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: var(--space-2);
  gap: var(--space-1);
`,w=n.button`
  border: none;
  background: none;
  border-radius: var(--border-radius);
  padding: var(--space-1);
  text-align: center;
  width: 100%;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: var(--surface-variant);
    color: var(--on-background);
  }
  &[data-selected="1"] {
    background-color: var(--surface-variant);
    color: var(--on-background);
  }
  &:active {
    background-color: var(--primary-container);
    color: var(--secondary);
  }
  ${({$selected:r})=>r&&v`
      background-color: var(--primary);
      color: var(--on-primary);
    `}
`;try{s.displayName="MonthPicker",s.__docgenInfo={description:"",displayName:"MonthPicker",props:{selected:{defaultValue:{value:"new Date()"},description:"",name:"selected",required:!1,type:{name:"Date"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(date: Date) => void"}},ButtonComponent:{defaultValue:null,description:"",name:"ButtonComponent",required:!1,type:{name:"FC<PropsWithChildren<{ onClick: () => void; className?: string; }>>"}}}}}catch{}export{s as M};
