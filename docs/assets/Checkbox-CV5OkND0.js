import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./styled-components.browser.esm-DD6bt04G.js";import{T as h}from"./Tooltip-FXVI7MEq.js";import{F as f}from"./info-DX6kh3Lj.js";import{i as x}from"./isNewDesignEnabled-CECVVFcR.js";import{F as v}from"./hint-CWBE4nNZ.js";function c({label:e,hint:a,id:r,isSwitch:o,ariaDescribedBy:n,className:d,...s}){return t.jsx(m,{id:`checkbox-${r}`,hint:a,children:t.jsxs(g,{className:d,"aria-describedby":n,children:[t.jsx(l,{id:r,type:"checkbox",className:o?"switch":void 0,"aria-describedby":`tooltip-checkbox-${r}`,...s}),e,a&&t.jsx(y,{width:"18",height:"18"})]})})}function m({id:e,hint:a,children:r}){return e&&a?t.jsx(h,{id:`tooltip-checkbox-${e}`,message:a,children:r}):r}const g=i.label`
  display: flex;
  align-items: center;
  gap: var(--space-2xs);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  color: var(--solid);

  &:has(:disabled) {
    color: var(--solid-subtle);
  }
`,y=i(v)`
  color: var(--brand);
`,l=i.input`
  &[type="checkbox"],
  &[type="radio"] {
    height: var(--space-l);
    outline: none;
    appearance: none;
    position: relative;
    cursor: pointer;
    margin: 0;
    flex-shrink: 0;
    border: 1px solid var(--bright-darker);
    transition: border-color var(--d-o, 0.2s) var(--d-t-e, ease);

    &:after {
      content: "";
      flex-shrink: 0;
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
        opacity var(--d-o, 0.2s);
    }

    &:checked {
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }

    &:disabled {
      cursor: not-allowed;
      border-color: var(--medium-subtle);
      background-color: var(--weak-light);
    }

    &:hover:not(:disabled) {
      border-color: var(--weak);

      &:not(.switch):after {
        background: var(--brand-light);
      }
    }

    &:focus-visible {
      box-shadow: var(--focus);
    }

    &:not(.switch) {
      width: var(--space-l);
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
  }

  &[type="checkbox"] {
    border-radius: var(--space-2xs);

    &:not(.switch):after {
      width: var(--space-s);
      height: var(--space-s);
      background: var(--brand);
      border-radius: var(--space-3xs);
      left: 3px;
      top: 3px;
    }

    &:disabled:not(.switch):after {
      background: var(--weak-light);
    }

    &.switch {
      width: 34px;
      border-radius: 11px;

      &:after {
        left: 2px;
        top: 1px;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        background: var(--ab, var(--bright-darker));
        transform: translateX(var(--x, 0));
      }

      &:checked {
        --ab: var(--bright-full);
        --x: 16px;
        background: var(--brand);
      }
    }
  }

  &[type="radio"] {
    border-radius: 50%;

    &:after {
      left: 3px;
      top: 3px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--brand);
    }
  }
`;try{c.displayName="CheckboxNewDesign",c.__docgenInfo={description:"",displayName:"CheckboxNewDesign",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},isSwitch:{defaultValue:null,description:"",name:"isSwitch",required:!1,type:{name:"boolean"}},ariaDescribedBy:{defaultValue:null,description:"",name:"ariaDescribedBy",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="CheckboxInput",l.__docgenInfo={description:"",displayName:"CheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function p({label:e,hint:a,id:r,isSwitch:o,ariaDescribedBy:n,className:d,...s}){return x()?t.jsx(c,{label:e,hint:a,id:r,isSwitch:o,ariaDescribedBy:n,className:d,...s}):t.jsx(k,{id:`checkbox-${r}`,hint:a,children:t.jsxs(w,{className:d,"aria-describedby":n,children:[t.jsx(b,{id:r,type:"checkbox",className:o?"switch":void 0,"aria-describedby":`tooltip-checkbox-${r}`,...s}),e,a&&t.jsx(_,{width:"18",height:"18"})]})})}function u(e){return t.jsx(p,{...e,isSwitch:!0})}function k({id:e,hint:a,children:r}){return e&&a?t.jsx(h,{id:`tooltip-checkbox-${e}`,message:a,children:r}):r}const w=i.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-bottom: var(--space-2);
`,_=i(f)`
  color: var(--warning);
  margin-left: var(--space-2);
`,b=i.input`
  &[type="checkbox"],
  &[type="radio"] {
    --active: var(--primary);
    --active-inner: var(--on-primary);
    --focus: var(--shadow-focus);
    --border: var(--inactive);
    --border-hover: var(--secondary);
    --background: var(--background);
    --disabled-background: var(--outline);
    --disabled-inner: var(--disabled);
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    appearance: none;
    position: relative;
    margin-left: 0;
    margin-right: 6px;
    cursor: pointer;
    flex-shrink: 0;
    border: 2px solid var(--bc, var(--inactive));
    background: var(--b, var(--background));
    transition: background-color 0.3s, border-color 0.3s, box-shadow 0.2s;
    &:after {
      content: "";
      flex-shrink: 0;
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
        opacity var(--d-o, 0.2s);
    }
    &:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }
    &:disabled {
      --b: var(--disabled-background);
      cursor: not-allowed;
      opacity: 0.9;
    }
    &:disabled:checked {
      --b: var(--disabled-inner);
      --bc: var(--border);
    }
    &:disabled + label {
      cursor: not-allowed;
    }
    &:hover:not(:checked):not(:disabled) {
      --bc: var(--border-hover);
    }
    &:focus {
      box-shadow: var(--focus);
    }
    &:not(.switch) {
      width: 21px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }
  &[type="checkbox"] {
    &:not(.switch) {
      border-radius: 4px;
    }
    &:not(.switch):after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 6px;
      top: 3px;
      transform: rotate(var(--r, 20deg));
    }
    &:not(.switch):checked {
      --r: 43deg;
    }
    &.switch {
      width: 38px;
      border-radius: 11px;
      &:after {
        left: 2px;
        top: 1px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --ab: var(--active-inner);
        --x: 16px;
      }
      &:disabled:not(:checked):after {
        opacity: 0.6;
      }
    }
  }
  &[type="radio"] {
    border-radius: 50%;
    &:after {
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      transform: scale(var(--s, 0.7));
    }
    &:checked {
      --s: 0.5;
    }
  }
`;try{p.displayName="Checkbox",p.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},isSwitch:{defaultValue:null,description:"",name:"isSwitch",required:!1,type:{name:"boolean"}},ariaDescribedBy:{defaultValue:null,description:"",name:"ariaDescribedBy",required:!1,type:{name:"string"}}}}}catch{}try{u.displayName="Switch",u.__docgenInfo={description:"",displayName:"Switch",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},ariaDescribedBy:{defaultValue:null,description:"",name:"ariaDescribedBy",required:!1,type:{name:"string"}}}}}catch{}try{b.displayName="CheckboxInput",b.__docgenInfo={description:"",displayName:"CheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{p as C,b as a,l as b};
