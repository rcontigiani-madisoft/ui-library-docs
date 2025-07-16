import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as d,a as c,c as l}from"./MenuList-DwIza7ud.js";import{d as t}from"./styled-components.browser.esm-DD6bt04G.js";import{r as o}from"./index-DatCARk7.js";import{A as p}from"./Avatar-Dnf3hVtz.js";const m=({title:r,titleId:a,...i},s)=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":a,...i},r?o.createElement("title",{id:a},r):null,o.createElement("path",{d:"M12.744 18.1716C12.3467 18.614 11.6533 18.614 11.256 18.1716L4.83794 11.0253C4.25978 10.3816 4.71666 9.35714 5.58194 9.35714L18.4181 9.35714C19.2833 9.35714 19.7402 10.3816 19.1621 11.0253L12.744 18.1716Z"})),u=o.forwardRef(m);function n({name:r,children:a}){return e.jsxs(d,{children:[e.jsxs(f,{className:"profile-menu-button",children:[e.jsx(p,{name:r}),e.jsxs(g,{children:[r," ",e.jsx(u,{width:14,height:14,"aria-hidden":!0})]})]}),e.jsx(c,{children:a})]})}const f=t(l)`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: inherit;
  border-radius: var(--border-radius);
  padding-top: var(--space-1);
  padding-bottom: var(--space-1);
  &:focus,
  &:hover {
    background-color: var(--secondary);
  }
  &:active {
    background-color: var(--primary-variant);
    color: var(--on-primary-container);
  }
`,g=t.span`
  display: none;
  margin-left: var(--space-1);
  @media screen and (min-width: 600px) {
    display: inline;
  }
`;try{n.displayName="ProfileMenu",n.__docgenInfo={description:"",displayName:"ProfileMenu",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}export{u as F,n as P};
