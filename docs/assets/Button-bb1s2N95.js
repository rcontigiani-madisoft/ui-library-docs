import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as v,l as a}from"./styled-components.browser.esm-DD6bt04G.js";import{R as y}from"./Flex-DwwaOy33.js";import{i as h}from"./isNewDesignEnabled-CECVVFcR.js";import{I as m}from"./Icon-BDJ5phNo.js";const t=v(y)`
  margin: var(--space-2) 0;
`;function c({variant:e,appearance:o,size:l,children:i,LeftIcon:s,RightIcon:u,iconSize:r,className:d,as:f,...g}){return n.jsx(V,{$appearance:o,$size:l,$variant:e,className:d,as:f,...g,children:i})}const V=v.button`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  outline: none;
  border-radius: 0.25rem;
  line-height: 1rem;
  font-weight: bold;
  border: 1px solid transparent;
  transition: background-color 0.2s ease-in, color 0.2s ease-in,
    box-shadow 0.2s ease-out;

  &:focus {
    box-shadow: var(--shadow-focus);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
  &:focus-visible {
    box-shadow: var(--shadow-focus);
  }
  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${t} > & {
    &:not(:first-of-type) {
      margin-left: var(--space-2);
    }
  }

  // Nel caso venga wrappato dal container del tooltip
  ${t} > div:not(:first-of-type) & {
    margin-left: var(--space-2);
  }

  ${e=>e.$appearance==="filled"?a`
          background-color: var(--primary);
          color: var(--on-primary);
          &:hover:not(:disabled):not([aria-disabled="true"]) {
            background-color: var(--secondary);
            color: var(--on-secondary);
            box-shadow: var(--shadow-elevation-medium);
          }
        `:e.$appearance==="ghost"?a`
          background: none;
          color: var(--primary);
          &:hover:not(:disabled):not([aria-disabled="true"]) {
            color: var(--primary);
            background-color: var(--primary-container);
            box-shadow: var(--shadow-elevation-medium);
          }
        `:e.$appearance==="subtle"?a`
          background-color: var(--primary-container);
          color: var(--primary);
          border-color: var(--primary);
        `:a`
          background-color: var(--background);
          border: 1px solid var(--outline);
          color: var(--on-background);
          &:hover:not(:disabled):not([aria-disabled="true"]) {
            background-color: var(--primary-container);
            color: var(--primary);
            box-shadow: var(--shadow-elevation-medium);
          }
        `}

  &:active:not(:disabled):not([aria-disabled='true']) {
    box-shadow: none;
  }

  ${e=>e.$size==="large"?a`
          padding: var(--space-3);
        `:e.$size==="small"?a`
          padding: var(--space-1);
        `:a`
          padding: var(--space-2);
        `}
`;function p({variant:e,appearance:o,size:l,children:i,LeftIcon:s,RightIcon:u,iconSize:r=12,...d}){return n.jsxs(w,{$appearance:o,$size:l,$variant:e,...d,children:[!!s&&n.jsx(m,{SVGIcon:s,width:r,height:r}),i,!!u&&n.jsx(m,{SVGIcon:u,width:r,height:r})]})}const w=v.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-2xs);
  height: 1.5rem;
  border-radius: var(--border-radius-s);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  outline: none;
  transition: background-color 0.2s ease-in, color 0.2s ease-in,
    border-color 0.2s ease-in, box-shadow 0.2s ease-out;

  &:focus-visible {
    box-shadow: var(--focus);
  }

  ${({$size:e})=>e==="small"?a`
          font-size: var(--font-size-s);
          padding: var(--space-3xs) var(--space-2xs);
        `:a`
          font-size: var(--font-size-base);
          padding: var(--space-2xs) var(--space-m);
        `}

  ${({$variant:e})=>e==="positive"?a`
          --btn-main: var(--positive);
          --btn-main-text: var(--positive);
          --btn-inverse: var(--inverse);
          --btn-subtle: var(--positive-subtle);
          --btn-light: var(--positive-light);
          --btn-darker: var(--positive-darker);
        `:e==="negative"?a`
          --btn-main: var(--negative);
          --btn-main-text: var(--negative);
          --btn-inverse: var(--inverse);
          --btn-subtle: var(--negative-subtle);
          --btn-light: var(--negative-light);
          --btn-darker: var(--negative-darker);
        `:a`
          --btn-main: var(--brand);
          --btn-main-text: var(--brand);
          --btn-inverse: var(--inverse);
          --btn-subtle: var(--brand-subtle);
          --btn-light: var(--brand-light);
          --btn-darker: var(--brand-darker);
        `}

  ${({$appearance:e})=>e==="outline"?a`
          border: 1px solid var(--btn-main);
          background-color: transparent;
          color: var(--btn-main-text);
          &:hover {
            border-color: var(--btn-light);
            color: var(--btn-light);
          }
        `:e==="ghost"?a`
          border: 1px solid transparent;
          background-color: transparent;
          color: var(--btn-main-text);
          &:hover {
            border-color: var(--btn-main);
          }
        `:e==="subtle"?a`
          border: 1px solid var(--btn-subtle);
          background-color: var(--btn-subtle);
          color: var(--btn-main-text);
          &:hover {
            background-color: var(--btn-light);
            border: 1px solid var(--btn-main);
            color: var(--btn-inverse);
          }
        `:a`
          border: 1px solid var(--btn-main);
          background-color: var(--btn-main);
          color: var(--btn-inverse);
          &:hover {
            background-color: var(--btn-light);
          }
        `}

  &:active {
    color: var(--btn-inverse);
    background-color: var(--btn-darker);
    border-color: var(--btn-darker);
  }

  &:disabled {
    color: var(--inverse-dark);
    background-color: var(--weak-light);
    border-color: var(--weak-light);
    cursor: not-allowed;
  }

  & > svg {
    flex-shrink: 0;
  }
`,b=h()?p:c;try{c.displayName="LegacyButton",c.__docgenInfo={description:"",displayName:"LegacyButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"positive"'},{value:'"negative"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outline"'},{value:'"ghost"'},{value:'"subtle"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>> | null"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>> | null"}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{p.displayName="NewDesignButton",p.__docgenInfo={description:"",displayName:"NewDesignButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"positive"'},{value:'"negative"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outline"'},{value:'"ghost"'},{value:'"subtle"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>> | null"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>> | null"}},iconSize:{defaultValue:{value:"12"},description:"",name:"iconSize",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{t.displayName="ButtonGroup",t.__docgenInfo={description:"",displayName:"ButtonGroup",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"positive"'},{value:'"negative"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outline"'},{value:'"ghost"'},{value:'"subtle"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>> | null"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>> | null"}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}export{t as B,c as L,p as N,b as a};
