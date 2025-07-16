import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./styled-components.browser.esm-DD6bt04G.js";import"./index-DatCARk7.js";const t=r.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin: var(--space-2) 0;
  flex: 1;
  & > * {
    margin-bottom: var(--space-2);
  }
`;try{t.displayName="Fieldset",t.__docgenInfo={description:"",displayName:"Fieldset",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const l=r.legend`
  font-size: var(--font-size-large);
  margin-bottom: var(--space-2);
  font-weight: 500;
  color: var(--primary);
`;try{l.displayName="Legend",l.__docgenInfo={description:"",displayName:"Legend",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m={title:"Forms/Fieldset",component:t},a=()=>e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx(l,{children:"Dati alunno"}),e.jsxs("label",{children:["Nome ",e.jsx("input",{type:"text"})]}),e.jsxs("label",{children:["Cognome ",e.jsx("input",{type:"text"})]}),e.jsxs("label",{children:["Data di nascita ",e.jsx("input",{type:"date"})]})]}),e.jsxs(t,{children:[e.jsx(l,{children:"Crriculum"}),e.jsxs("label",{children:["Percorso"," ",e.jsxs("select",{children:[e.jsx("option",{value:"1",children:"Tecnico informatico"}),e.jsx("option",{value:"2",children:"Tecnico elettronico"}),e.jsx("option",{value:"3",children:"Tecnico meccanico"})]})]}),e.jsxs("label",{children:["Frequentante? ",e.jsx("input",{type:"checkbox",defaultChecked:!0})]})]})]}),d=r.div`
  input[type='text'],
  input[type='date'],
  select {
    width: 100%;
  }
`;var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Wrapper>
    <Fieldset>
      <Legend>Dati alunno</Legend>
      <label>
        Nome <input type="text" />
      </label>
      <label>
        Cognome <input type="text" />
      </label>
      <label>
        Data di nascita <input type="date" />
      </label>
    </Fieldset>
    <Fieldset>
      <Legend>Crriculum</Legend>
      <label>
        Percorso{' '}
        <select>
          <option value="1">Tecnico informatico</option>
          <option value="2">Tecnico elettronico</option>
          <option value="3">Tecnico meccanico</option>
        </select>
      </label>
      <label>
        Frequentante? <input type="checkbox" defaultChecked />
      </label>
    </Fieldset>
  </Wrapper>`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,m as default};
