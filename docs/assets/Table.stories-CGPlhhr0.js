import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as c,l as v}from"./styled-components.browser.esm-DD6bt04G.js";import{r as d}from"./index-DatCARk7.js";import"./string-BWSckzgf.js";const R="floating-scroll-control";function N(e){if(!e)return B;const r=e.querySelector(`.${R}`)??V(e);return _(r,e),O(r,e),H(r,e)}function V(e){e.style.overflowX="auto";const r=document.createElement("div");r.className=R,r.style.overflow="auto hidden",r.style.position="fixed",r.style.bottom="0",w(r,e);const t=document.createElement("div");return t.style.lineHeight="1px",t.style.width=e.scrollWidth+"px",t.appendChild(document.createTextNode(" ")),r.appendChild(t),e.appendChild(r),r}function H(e,r){const t=()=>{e.scrollLeft=r.scrollLeft},a=()=>{r.scrollLeft=e.scrollLeft},n=()=>window.requestAnimationFrame(()=>{O(e,r),w(e,r),e.scrollLeft=r.scrollLeft});r.addEventListener("scroll",t),e.addEventListener("scroll",a),window.addEventListener("scroll",n);const i=A(e,r);return()=>{r.removeEventListener("scroll",t),e.removeEventListener("scroll",a),window.removeEventListener("scroll",n),i()}}function O(e,r){const{top:t,bottom:a}=r.getBoundingClientRect(),n=a>window.innerHeight&&t<window.innerHeight;e.style.display=n?"block":"none"}function _(e,r){e.firstChild.style.width=r.scrollWidth+"px"}function w(e,r){const t=r.getBoundingClientRect();e.style.left=t.left+"px",e.style.right=document.body.clientWidth-t.right+"px"}function A(e,r){if(!z()){const a=()=>window.requestAnimationFrame(()=>{_(e,r)});return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}const t=new ResizeObserver(a=>{window.requestAnimationFrame(()=>{a.forEach(n=>{const i=n.target;_(e,i),w(e,i)})})});return t.observe(r),()=>t.disconnect()}const z=()=>"ResizeObserver"in window,B=()=>{};function D(){const e=d.useRef(null);return d.useEffect(()=>N(e.current)),e}const y=c.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  & > table {
    table-layout: fixed;
    border-collapse: collapse;
  }
`,g=c(y)`
  overflow-x: hidden;
`;try{y.displayName="TableWrapper",y.__docgenInfo={description:"",displayName:"TableWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StickyTableWrapper",g.__docgenInfo={description:"",displayName:"StickyTableWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function I(e){const[r,t]=d.useState(!1);return d.useEffect(()=>{var i;if(!k())return;const a=(i=e.current)==null?void 0:i.querySelector("thead"),n=new IntersectionObserver(([s])=>{t(s.intersectionRatio<=0)});return a&&n.observe(a),()=>{k()&&n.disconnect()}}),r}const k=()=>"IntersectionObserver"in window;function T({wrapperRef:e}){return I(e)?o.jsx($,{wrapperRef:e}):null}function $({wrapperRef:e}){const r=d.useRef(null);return F(e,r),Y(e,r),o.jsx(K,{children:o.jsx(g,{ref:r,"data-sticky-header":!0})})}function F(e,r){d.useEffect(()=>{var i;const t=(i=e.current)==null?void 0:i.querySelector("thead"),a=r.current;if(!t||!a)return;const n=()=>{const s=M(t);P(a),a.append(s)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)})}function Y(e,r){d.useEffect(()=>{const t=r.current,a=e.current;if(!a||!t)return;t.scrollLeft=a.scrollLeft;function n(i){const s=i.target;t&&s&&(t.scrollLeft=s.scrollLeft)}return a.addEventListener("scroll",n),()=>a==null?void 0:a.removeEventListener("scroll",n)},[e,r])}const P=e=>e.childNodes.forEach(r=>r.remove()),M=e=>{const r=document.createElement("table"),t=e.cloneNode(!0),a=X(e);return r.append(t),r.append(a),r},X=e=>{const r=document.createElement("tbody"),t=document.createElement("tr");return e.querySelectorAll("tr:last-of-type > *").forEach(n=>{const i=G(),s=J(n);t.appendChild(i).appendChild(s)}),r.append(t),r},G=()=>{const e=document.createElement("td");return e.style.padding="0",e},J=e=>{const r=e.getBoundingClientRect().width+"px",t=document.createElement("div");return t.style.width=r,t},K=c.div`
  position: sticky;
  top: var(--header-height);
  z-index: 1;
  box-shadow: var(--shadow-elevation-medium);
  button {
    visibility: hidden;
  }

  @media print {
    display: none;
  }
`;try{T.displayName="StickyTableHeader",T.__docgenInfo={description:"",displayName:"StickyTableHeader",props:{wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!0,type:{name:"WrapperRef"}}}}}catch{}function p(e){const r=D();return o.jsxs("div",{children:[o.jsx(T,{wrapperRef:r}),o.jsx(y,{ref:r,children:o.jsx("table",{...e})})]})}const l=c.tr`
  ${({$selected:e})=>e?v`
          th,
          td {
            background-color: var(--primary-variant);
          }
          &:nth-child(even) {
            th,
            td {
              background-color: var(--primary-variant);
            }
          }
          tbody &:hover {
            th,
            td {
              opacity: 0.9;
              background-color: var(--primary-variant);
            }
          }
        `:v`
          th,
          td {
            background-color: var(--cell-background, var(--background));
          }
          &:nth-child(even) {
            th,
            td {
              background-color: var(
                --cell-background-even,
                var(--surface-variant)
              );
            }
          }
          tbody &:hover {
            th,
            td {
              background-color: var(--primary-container);
            }
          }
        `}
`,C=v`
  --border-color: #7f818c;
  border: 1px solid var(--border-color);
  padding: var(--space-2) var(--space-1);
  &:first-child {
    border-left: none;
    background-clip: padding-box;
    position: sticky;
    left: 0;
    &::after {
      content: '';
      width: 1px;
      background-color: var(--border-color);
      position: absolute;
      top: 0;
      right: -1px; // Così si sovrappone al bordo normale
      height: 100%;
    }
  }
  &:last-child {
    border-right: none;
  }

  @media print {
    padding: var(--space-1);
    font-size: var(--font-size-extra-small);
    &:first-child {
      border-left: 1px solid var(--border-color);
      position: static;
    }
    &:last-child {
      border-right: 1px solid var(--border-color);
    }
  }
`,u=c.th`
  vertical-align: bottom;
  ${C}
`,f=c.td`
  ${C}
`,x=c.caption`
  text-align: left;
  font-weight: 600;
  font-size: var(--font-size-medium);
`;try{p.displayName="Table",p.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}try{l.displayName="TR",l.__docgenInfo={description:"",displayName:"TR",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="TH",u.__docgenInfo={description:"",displayName:"TH",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="TD",f.__docgenInfo={description:"",displayName:"TD",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="Caption",x.__docgenInfo={description:"",displayName:"Caption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const re={title:"Table",component:p,subcomponents:{TR:l,TH:u,TD:f}},m=()=>o.jsxs(p,{children:[o.jsx("thead",{children:o.jsx(l,{children:Object.keys(b[0]).map(e=>o.jsx(u,{children:e},e))})}),o.jsx("tbody",{children:b.map((e,r)=>o.jsx(l,{children:Object.values(e).map((t,a)=>o.jsx(f,{children:t},a))},r))})]}),h=()=>o.jsxs(p,{children:[o.jsx("thead",{children:o.jsx(l,{children:Object.keys(b[0]).map(e=>o.jsx(u,{children:e},e))})}),o.jsx("tbody",{children:b.map((e,r)=>o.jsx(l,{$selected:r===2||r===3,children:Object.values(e).map((t,a)=>o.jsx(f,{children:t},a))},r))})]}),b=[{name:"Luke Skywalker",height:172,mass:"77",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"19BBY",gender:"male",homeworld:"https://swapi.dev/api/planets/1/",created:"2014-12-09T13:50:51+01:00",edited:"2014-12-20T21:17:56+01:00",url:"https://swapi.dev/api/people/1/",is_robot:!1,id:"1",jedi_graduation:1980},{name:"C-3PO",height:167,mass:"75",hair_color:"n/a",skin_color:"gold",eye_color:"yellow",birth_year:"112BBY",gender:"n/a",homeworld:"https://swapi.dev/api/planets/1/",created:"2014-12-10T15:10:51+01:00",edited:"2014-12-20T21:17:50+01:00",url:"https://swapi.dev/api/people/2/",is_robot:!0,id:"2",jedi_graduation:1980},{name:"R2-D2",height:96,mass:"32",hair_color:"n/a",skin_color:"white, blue",eye_color:"red",birth_year:"33BBY",gender:"n/a",homeworld:"https://swapi.dev/api/planets/8/",created:"2014-12-10T15:11:50+01:00",edited:"2014-12-20T21:17:50+01:00",url:"https://swapi.dev/api/people/3/",is_robot:!0,id:"3",jedi_graduation:1980},{name:"Darth Vader",height:202,mass:"136",hair_color:"none",skin_color:"white",eye_color:"yellow",birth_year:"41.9BBY",gender:"male",homeworld:"https://swapi.dev/api/planets/1/",created:"2014-12-10T15:18:20+01:00",edited:"2014-12-20T21:17:50+01:00",url:"https://swapi.dev/api/people/4/",is_robot:!1,id:"4",jedi_graduation:1980},{name:"Leia Organa",height:150,mass:"49",hair_color:"brown",skin_color:"light",eye_color:"brown",birth_year:"19BBY",gender:"female",homeworld:"https://swapi.dev/api/planets/2/",created:"2014-12-10T15:20:09+01:00",edited:"2014-12-20T21:17:50+01:00",url:"https://swapi.dev/api/people/5/",is_robot:!1,id:"5",jedi_graduation:1980}];var j,S,E;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Table>
    <thead>
      <TR>
        {Object.keys(data[0]).map(key => <TH key={key}>{key}</TH>)}
      </TR>
    </thead>
    <tbody>
      {data.map((person, i) => <TR key={i}>
          {Object.values(person).map((value, j) => <TD key={j}>{value}</TD>)}
        </TR>)}
    </tbody>
  </Table>`,...(E=(S=m.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var W,L,q;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => <Table>
    <thead>
      <TR>
        {Object.keys(data[0]).map(key => <TH key={key}>{key}</TH>)}
      </TR>
    </thead>
    <tbody>
      {data.map((person, i) => <TR key={i} $selected={i === 2 || i === 3}>
          {Object.values(person).map((value, j) => <TD key={j}>{value}</TD>)}
        </TR>)}
    </tbody>
  </Table>`,...(q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const te=["Base","Selected"];export{m as Base,h as Selected,te as __namedExportsOrder,re as default};
