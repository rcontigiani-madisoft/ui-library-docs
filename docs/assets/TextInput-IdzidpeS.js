import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{d as s,l as _}from"./styled-components.browser.esm-DD6bt04G.js";import{i as h,c as w,C as x,a as k}from"./Control-DQuhXu0x.js";import{i as I}from"./isNewDesignEnabled-CECVVFcR.js";const m=function({label:n,labelId:r,labelAriaLabelledBy:l,hint:d,appearance:t="default",message:u,className:p,extraContent:o,...e}){const c=w`text-input${e}`;return i.jsx(q,{label:n,labelId:r,labelAriaLabelledBy:l,inputId:c,hint:d,appearance:t,message:u,required:e.required,disabled:e.disabled,className:p,extraContent:o,children:i.jsx(f,{type:"text",$appearance:t,id:c,...e})})},v=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent),f=s.input`
  ${h}
`,q=s(x)`
  // NUV-19576
  ${!v()&&_`
    /* Apre il date picker al click tranne che su Safari in cui il comportamento è presente nativamente */
    input[type='date'],
    input[type='datetime-local'] {
      position: relative;
    }
    input[type='date']::-webkit-calendar-picker-indicator,
    input[type='datetime-local']::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
    }
    input[type='date']::-webkit-calendar-picker-indicator,
    input[type='datetime-local']::-webkit-calendar-picker-indicator {
      padding-left: calc(100% - 24px);
      padding-top: 7px;
      padding-right: 8px;
    }
    input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-clear-button,
    input[type='datetime-local']::-webkit-inner-spin-button,
    input[type='datetime-local']::-webkit-clear-button {
      z-index: 1;
    }
  `}
`;try{m.displayName="TextInputNewDesign",m.__docgenInfo={description:"",displayName:"TextInputNewDesign",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},labelAriaLabelledBy:{defaultValue:null,description:"",name:"labelAriaLabelledBy",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},extraContent:{defaultValue:null,description:"",name:"extraContent",required:!1,type:{name:"ReactNode"}}}}}catch{}try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const b=function({label:n,labelId:r,labelAriaLabelledBy:l,hint:d,appearance:t="default",message:u,className:p,extraContent:o,...e}){if(I())return i.jsx(m,{label:n,labelId:r,labelAriaLabelledBy:l,hint:d,appearance:t,message:u,className:p,extraContent:o,...e});const g=w`text-input${e}`;return i.jsx(N,{label:n,labelId:r,labelAriaLabelledBy:l,inputId:g,hint:d,appearance:t,message:u,required:e.required,disabled:e.disabled,className:p,extraContent:o,children:i.jsx(y,{type:"text",$appearance:t,id:g,...e})})},V=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent),y=s.input`
  ${k}
`,N=s(x)`
  // NUV-19576
  ${!V()&&_`
    /* Apre il date picker al click tranne che su Safari in cui il comportamento è presente nativamente */
    input[type='date'],
    input[type='datetime-local'] {
      position: relative;
    }
    input[type='date']::-webkit-calendar-picker-indicator,
    input[type='datetime-local']::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
    }
    input[type='date']::-webkit-calendar-picker-indicator,
    input[type='datetime-local']::-webkit-calendar-picker-indicator {
      padding-left: calc(100% - 24px);
      padding-top: 14px;
      padding-right: 8px;
    }
    input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-clear-button,
    input[type='datetime-local']::-webkit-inner-spin-button,
    input[type='datetime-local']::-webkit-clear-button {
      z-index: 1;
    }
  `}
`,j=`Inserisci un formato valido (es: 20/03/${new Date().getFullYear()})`;try{b.displayName="TextInput",b.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},labelAriaLabelledBy:{defaultValue:null,description:"",name:"labelAriaLabelledBy",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},extraContent:{defaultValue:null,description:"",name:"extraContent",required:!1,type:{name:"ReactNode"}}}}}catch{}try{y.displayName="Input",y.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{f as I,b as T,y as a,j as d};
