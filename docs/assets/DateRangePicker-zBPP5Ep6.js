import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DatCARk7.js";import{d as t}from"./styled-components.browser.esm-DD6bt04G.js";import{D as p,a as u}from"./style-Cr4l-9xb.js";import{a as l}from"./Button-bb1s2N95.js";import{i as m,s as g,b as k}from"./date-DLO9q3mC.js";import"./string-BWSckzgf.js";function s({selected:a,onSelect:e,quickFilters:n}){const[o,i]=d.useState(a);return r.jsxs(x,{children:[r.jsx(f,{dateRanges:n,onClick:e}),r.jsxs("div",{children:[r.jsx(h,{locale:m,mode:"range",components:{MonthCaption:p},showOutsideDays:!0,defaultMonth:a==null?void 0:a.from,selected:o,onSelect:i,hideNavigation:!0}),e&&r.jsx(v,{children:r.jsx(l,{appearance:"filled",size:"small",onClick:()=>e(o),children:"Applica"})})]})]})}function f({dateRanges:a,onClick:e}){const n=g(new Date),o=i=>{e({from:k(n,i),to:n})};return r.jsxs(y,{children:[r.jsx(c,{onClick:()=>o(7),children:"Ultimi 7 giorni"}),r.jsx(c,{onClick:()=>o(30),children:"Ultimi 30 giorni"}),r.jsx(c,{onClick:()=>o(90),children:"Ultimi 90 giorni"}),a==null?void 0:a.map(i=>r.jsx(c,{onClick:()=>e(i),children:i.label},i.label))]})}function c({children:a,onClick:e}){return r.jsx(b,{appearance:"ghost",size:"small",onClick:e,children:a})}const x=t.div`
  display: flex;
`,y=t.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-2);
  border-right: 1px solid var(--outline);
`,v=t.div`
  text-align: right;
`,b=t(l)`
  color: var(--on-background);
  margin: var(--space-1);
  text-align: left;
`,h=t(u)`
  .rdp-range_start {
    border-radius: 50% 0 0 50%;
    background: var(--primary);
  }
  .rdp-month {
    padding: var(--space-2);
  }
  .rdp-range_end {
    border-radius: 0 50% 50% 0;
    background: var(--primary);
  }
  .rdp-range_end.rdp-range_start {
    border-radius: 50%;
  }
  .rdp-range_middle {
    background-color: var(--primary);
  }
  .rdp-selected > button {
    background-color: var(--primary);
    color: var(--on-primary);
    border-color: var(--primary);
  }
  .rdp-today:not(.rdp-selected) > button {
    color: var(--on-background);
  }
`;try{s.displayName="DateRangePicker",s.__docgenInfo={description:"",displayName:"DateRangePicker",props:{quickFilters:{defaultValue:null,description:"",name:"quickFilters",required:!1,type:{name:"LabeledDateRange[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(date?: DateRange | undefined) => void"}}}}}catch{}export{s as D};
