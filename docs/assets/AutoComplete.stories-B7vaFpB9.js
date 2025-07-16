import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DatCARk7.js";import{r as Oe}from"./index-RHVwCB2K.js";import{C as qe}from"./Control-DQuhXu0x.js";import{u as Se}from"./usePopoverPosition-DScRzE65.js";import{d as g,l as je}from"./styled-components.browser.esm-DD6bt04G.js";import{i as fe,f as Q,a as be,b as X}from"./select.utils-B1Hkx6vy.js";import{m as W}from"./strings-Bn8L0l--.js";import"./string-BWSckzgf.js";import{I as ve,a as ge}from"./TextInput-IdzidpeS.js";import{V as he}from"./VisuallyHidden-BUtF7OPd.js";import{F as ye}from"./close-BA1MdWQD.js";import{F as Re}from"./chevron-right-solid-CdNcY9dD.js";import{i as _e}from"./isNewDesignEnabled-CECVVFcR.js";import"./index-C9zM6nuj.js";import"./theme.utils-BeVOnAPh.js";import"./circle-exclamation-BXEBVndQ.js";import"./info-DX6kh3Lj.js";import"./triangle-exclamation-DQjt3Dp9.js";import"./lock-C1jbjoO5.js";import"./Flex-DwwaOy33.js";import"./HintIcon-DRByZ8Uu.js";import"./hint-CWBE4nNZ.js";import"./Tooltip-FXVI7MEq.js";import"./popover.module-_MiSh5dU.js";import"./functions-DAFblV6k.js";import"./object-CZBnQYwJ.js";const xe=(e,o)=>`${e}-opzione-${o}`,Fe=(e,o)=>o!==null?xe(e,o):void 0,Ie=(e,o)=>{var a;return((a=Ve(e,o))==null?void 0:a.value)??null},Ve=(e,o)=>e===""?null:Ee(e,o)??Ae(e,o)??null,Ee=(e,o)=>o.find(({label:n})=>n.toLowerCase().trim()===e.toLowerCase().trim())??null,Ae=(e,o)=>o.find(({label:n})=>W(n,e))??null,De=(e,o)=>o.reduce((a,n)=>{if(fe(n)){const l=n.options.filter(({label:d})=>W(d,e));l.length>0&&a.push({label:n.label,options:l})}else W(n.label,e)&&a.push(n);return a},[]);function P({id:e,open:o,options:a,searchTerm:n,comboboxRef:l,containerRef:d,...p}){var f;const m=u.useRef(null),c=Se(m,l,d),v={width:(f=l.current)==null?void 0:f.getBoundingClientRect().width};return ke(e,p.optionWithVisualFocus,m),t.jsx(Ne,{ref:m,id:`${e}-listbox`,role:"listbox","aria-labelledby":`${e}-combobox`,style:{...c,...v},children:a.length>0?t.jsx(we,{children:a.map((b,x)=>fe(b)?t.jsx($e,{id:e,optionGroup:b,...p},x):t.jsx(Ce,{id:e,option:b,...p},x))}):t.jsx(Me,{"aria-live":"polite",children:n?t.jsxs(t.Fragment,{children:["Nessun valore trovato con la parola ",t.jsx("strong",{children:n})]}):"Nessun valore da selezionare"})})}function $e({optionGroup:e,...o}){return t.jsxs("li",{role:"group",children:[t.jsx(Te,{children:e.label}),t.jsx(we,{children:e.options.map(a=>t.jsx(Ce,{option:a,...o},a.value))})]})}function Ce({id:e,option:{value:o,disabled:a,label:n},selected:l,optionWithVisualFocus:d,onSelectOption:p,onHoverOption:m}){return t.jsx(Le,{id:`${e}-opzione-${o}`,role:"option","aria-selected":l===o,"aria-disabled":a,tabIndex:-1,"data-visible-focus":d===o?!0:void 0,onClick:()=>p({label:n,value:o,disabled:a}),onMouseEnter:()=>m(o),children:n})}function ke(e,o,a){u.useEffect(()=>{if(o===null)return;const n=a.current,l=document.getElementById(xe(e,o));n&&l&&!Be(l,n)&&l.scrollIntoView({block:"nearest"})},[a,o,e])}const Be=function(e,o){const a=e.getBoundingClientRect(),n=o.getBoundingClientRect();return a.top<=n.top?a.top>=n.top:a.bottom<=n.bottom},Ne=g.div`
  position: absolute;
  background-color: var(--background);
  box-shadow:
    0 0 0 1px hsla(0, 0%, 0%, 0.1),
    0 4px 11px hsla(0, 0%, 0%, 0.1);
  border-radius: var(--border-radius);
  max-height: 300px;
  overflow-y: auto;

  body[newdesign] & {
    font-size: var(--font-size-base);
  }
`,we=g.ul`
  list-style: none;
  padding: var(--space-2) 0;
  margin: 0;
`,Le=g.li`
  padding: var(--space-2);
  user-select: none;

  &[data-visible-focus] {
    background-color: var(--primary-container);
  }

  &[aria-disabled='true'] {
    color: var(--disabled);
    background-color: var(--surface-variant);
    &[data-visible-focus] {
      opacity: 0.7;
    }
  }

  &[aria-selected='true'] {
    background-color: var(--secondary);
    color: var(--on-secondary);
  }
`,Te=g.span`
  padding: var(--space-2);
  display: block;
  color: var(--primary);
  background-color: var(--surface);
  font-weight: bold;
  font-size: var(--font-size-small);
`,Me=g.p`
  padding-left: var(--space-2);
`;try{P.displayName="AutoCompletePopover",P.__docgenInfo={description:"",displayName:"AutoCompletePopover",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"(SelectOption<Value> | SelectOptionGroup<Value>)[]"}},searchTerm:{defaultValue:null,description:"",name:"searchTerm",required:!0,type:{name:"string"}},comboboxRef:{defaultValue:null,description:"",name:"comboboxRef",required:!0,type:{name:"RefObject<HTMLInputElement | null>"}},containerRef:{defaultValue:null,description:"",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement | null>"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"string | number | null"}},optionWithVisualFocus:{defaultValue:null,description:"",name:"optionWithVisualFocus",required:!0,type:{name:"string | number | null"}},onSelectOption:{defaultValue:null,description:"",name:"onSelectOption",required:!0,type:{name:"(option: SelectOption<Value>) => void"}},onHoverOption:{defaultValue:null,description:"",name:"onHoverOption",required:!0,type:{name:"(value: Value) => void"}}}}}catch{}const ze=({title:e,titleId:o,...a},n)=>u.createElement("svg",{width:12,height:12,viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",ref:n,"aria-labelledby":o,...a},e?u.createElement("title",{id:o},e):null,u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.84282 3.02418C1.02264 2.85934 1.30205 2.87149 1.46689 3.05132L5.99999 7.99652L10.5331 3.05132C10.6979 2.87149 10.9773 2.85934 11.1572 3.02418C11.337 3.18902 11.3491 3.46843 11.1843 3.64825L6.32559 8.94865C6.24193 9.03992 6.1238 9.09188 5.99999 9.09188C5.87618 9.09188 5.75805 9.03992 5.67439 8.94865L0.815687 3.64825C0.650847 3.46843 0.662996 3.18902 0.84282 3.02418Z"})),Ge=u.forwardRef(ze);function U({comboboxRef:e,id:o,appearance:a,ariaExpanded:n,activeDescendant:l,value:d,clearable:p,onClear:m,...c}){const v=p&&d&&!c.disabled;return t.jsxs(He,{children:[t.jsx(We,{ref:e,$appearance:a,id:`${o}-combobox`,type:"text",role:"combobox","aria-expanded":n,"aria-autocomplete":"list","aria-activedescendant":l,"aria-controls":`${o}-listbox`,autoComplete:"off",value:d,...c}),v?t.jsxs(Pe,{type:"button",onClick:m,children:[t.jsx(ye,{width:16,height:16}),t.jsx(he,{children:"Cancella il valore del campo"})]}):t.jsx(Ue,{width:12,height:12})]})}const He=g.div`
  --icon-width: 40px;

  position: relative;
  width: 100%;

  ${ve} {
    width: 100%;
  }
`,We=g(ve)`
  padding-right: calc(var(--icon-width) + var(--space-s));
`,Pe=g.button`
  position: absolute;
  right: 0;
  top: 6px;
  width: var(--icon-width);
  cursor: pointer;
  padding: 0;
  border: none;
  color: var(--solid);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`,Ue=g(Ge)`
  color: var(--solid);
  position: absolute;
  right: var(--space-s);
  top: 8px;
  pointer-events: none;
`;try{U.displayName="AutoCompleteComboboxNewDesign",U.__docgenInfo={description:"",displayName:"AutoCompleteComboboxNewDesign",props:{comboboxRef:{defaultValue:null,description:"",name:"comboboxRef",required:!0,type:{name:"RefObject<HTMLInputElement | null>"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},ariaExpanded:{defaultValue:null,description:"",name:"ariaExpanded",required:!0,type:{name:"boolean"}},activeDescendant:{defaultValue:null,description:"",name:"activeDescendant",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}}}catch{}function K({comboboxRef:e,id:o,appearance:a,ariaExpanded:n,activeDescendant:l,value:d,clearable:p,onClear:m,...c}){if(_e())return t.jsx(U,{comboboxRef:e,id:o,appearance:a,ariaExpanded:n,activeDescendant:l,value:d,clearable:p,onClear:m,...c});const f=p&&d&&!c.disabled;return t.jsxs(Ke,{children:[t.jsx(Ze,{ref:e,$appearance:a,$clearable:p,id:`${o}-combobox`,type:"text",role:"combobox","aria-expanded":n,"aria-autocomplete":"list","aria-activedescendant":l,"aria-controls":`${o}-listbox`,autoComplete:"off",value:d,...c}),f&&t.jsxs(Je,{type:"button",onClick:m,children:[t.jsx(ye,{width:16,height:16}),t.jsx(he,{children:"Cancella il valore del campo"})]}),t.jsx(Qe,{width:16,height:16})]})}const Ke=g.div`
  --arrow-icon-width: 40px;
  --clear-button-width: 40px;

  position: relative;
  width: 100%;

  ${ge} {
    width: 100%;
  }
`,Ze=g(ge)`
  padding-right: var(--arrow-icon-width);
  ${({$clearable:e})=>e&&je`
      padding-right: calc(
        var(--arrow-icon-width) + var(--clear-button-width) + var(--space-1)
      );
    `}
`,Je=g.button`
  position: absolute;
  right: var(--arrow-icon-width);
  top: 6px;
  bottom: 2px;
  width: var(--clear-button-width);
  cursor: pointer;
  border: none;
  color: var(--inactive);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`,Qe=g(Re)`
  color: var(--inactive);
  transform: rotate(90deg);
  position: absolute;
  right: 12px;
  top: 18px;
  pointer-events: none;
`;try{K.displayName="AutoCompleteCombobox",K.__docgenInfo={description:"",displayName:"AutoCompleteCombobox",props:{comboboxRef:{defaultValue:null,description:"",name:"comboboxRef",required:!0,type:{name:"RefObject<HTMLInputElement | null>"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},ariaExpanded:{defaultValue:null,description:"",name:"ariaExpanded",required:!0,type:{name:"boolean"}},activeDescendant:{defaultValue:null,description:"",name:"activeDescendant",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}}}catch{}function Xe({id:e,initialValue:o,options:a,onChange:n}){const l=u.useMemo(()=>Q(a),[a]),d=be(l,o),[p,m]=u.useState(o??null),[c,v]=u.useState({value:d,searchValue:""}),[f,b]=u.useState({open:!1,visualFocusOption:null}),x=Fe(e,f.visualFocusOption),C=u.useMemo(()=>De(c.searchValue,a),[c.searchValue,a]),h=u.useMemo(()=>Q(C),[C]);function w(r){m(r),n==null||n(r)}function E(r){v({value:r,searchValue:r}),q()}function T(){v({value:"",searchValue:""}),w(null)}function q(r=null){b({open:!0,visualFocusOption:r})}function S(){b({open:!1,visualFocusOption:null}),v(r=>({...r,searchValue:""}))}function A(r){r.disabled||(v(i=>({...i,value:r.label})),S(),w(r.value))}function M(r){const i=Ve(c.value,l)??r;i!=null&&i.disabled||(v(O=>({...O,value:(i==null?void 0:i.label)??""})),w((i==null?void 0:i.value)??null))}function V(){const r=p,i=X(l,r);c.value&&c.value!==(i==null?void 0:i.label)&&M(i),!c.value&&r!==null&&w(null)}function D(){if(f.visualFocusOption===null)return;const r=X(h,f.visualFocusOption);r&&A(r)}const $=u.useCallback(r=>b(i=>({...i,visualFocusOption:r})),[]);function z(r){const{visualFocusOption:i}=f,O=0,B=l.length-1,j=r==="forward"?O:B;if(i===null)return j;const y=h.findIndex(s=>s.value===i);return r==="forward"?y!==-1&&y<B?y+1:j:y!==-1&&y>O?y-1:j}function k(r){if(C.length===0)return;const i=z(r);q(l[i].value)}function G(){k("forward")}function H(){k("backward")}return Ye(f.open,c.searchValue,h,$),eo(o,l,m,v),{selectedValue:p,activeDescendant:x,filteredOptions:C,comboboxState:c,onComboboxChange:E,clearCombobox:T,popoverState:f,openPopover:q,closePopover:S,selectOption:A,selectOptionByComboboxValue:V,selectVisuallyFocusedOption:D,setVisualFocus:$,moveVisualFocusDown:G,moveVisualFocusUp:H}}function Ye(e,o,a,n){u.useEffect(()=>{if(e){const l=Ie(o,a);n(l)}},[o,e,a,n])}function eo(e,o,a,n){const l=u.useRef(e);u.useEffect(()=>{e!==l.current&&(l.current=e,e!==void 0&&(a(e),n(d=>({...d,value:be(o,e)??""}))))},[e,o,n,a])}function N({ref:e,id:o,name:a,options:n,value:l,onChange:d,defaultValue:p,clearable:m,placeholder:c="Seleziona un valore",disabled:v,...f}){const b=u.useRef(null);u.useImperativeHandle(e,()=>b.current);const x=oo(b),C=u.useId(),h=o??C,w=l??p,{selectedValue:E,activeDescendant:T,filteredOptions:q,comboboxState:S,clearCombobox:A,onComboboxChange:M,popoverState:V,closePopover:D,openPopover:$,selectOption:z,setVisualFocus:k,moveVisualFocusDown:G,moveVisualFocusUp:H,selectOptionByComboboxValue:r,selectVisuallyFocusedOption:i}=Xe({id:h,initialValue:w,options:n,onChange:d});function O(s){Y(s)&&G(),ee(s)&&H(),V.open&&((Y(s)||ee(s)||oe(s))&&s.preventDefault(),(oe(s)||ao(s))&&i(),no(s)&&(s.stopPropagation(),D()))}function B(s){to(s,h)||(r(),D())}function j(){var s;A(),(s=b.current)==null||s.focus()}function y(s){var J;z(s),(J=b.current)==null||J.focus()}return t.jsxs(qe,{inputId:`${h}-combobox`,...f,children:[t.jsx(K,{comboboxRef:b,id:h,appearance:f.appearance,ariaExpanded:V.open,activeDescendant:T,clearable:m,placeholder:c,required:f.required,value:S.value,onClick:()=>$(),onChange:s=>M(s.target.value),onKeyDown:O,onBlur:B,onClear:j,disabled:v}),t.jsx("input",{type:"hidden",name:a,value:E??""}),V.open&&Oe.createPortal(t.jsx(P,{id:h,open:V.open,options:q,selected:E,optionWithVisualFocus:V.visualFocusOption,searchTerm:S.searchValue,onSelectOption:y,onHoverOption:k,comboboxRef:b,containerRef:x}),x.current??document.body)]})}const oo=e=>{const o=u.useRef(null);return u.useLayoutEffect(()=>{var n;const a=(n=e.current)==null?void 0:n.closest('[role="dialog"], [role="alertdialog"]');a&&(o.current=a)},[e]),o},Y=e=>e.key==="ArrowDown"||e.key==="Down",ee=e=>e.key==="ArrowUp"||e.key==="Up",ao=e=>e.key==="Tab",oe=e=>e.key==="Enter",no=e=>e.key==="Escape"||e.key==="Esc",to=(e,o)=>{var a,n;return(n=(a=e.relatedTarget)==null?void 0:a.id)==null?void 0:n.includes(`${o}-opzione`)};try{N.displayName="AutoComplete",N.__docgenInfo={description:"",displayName:"AutoComplete",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLInputElement | null>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"(SelectOption<Value> | SelectOptionGroup<Value>)[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Value | null) => void)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | null"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Seleziona un valore"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},labelAriaLabelledBy:{defaultValue:null,description:"",name:"labelAriaLabelledBy",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},extraContent:{defaultValue:null,description:"",name:"extraContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ao={title:"Forms/AutoComplete",component:N},L=e=>{const[o,a]=u.useState(null);return t.jsx(N,{...e,value:o,onChange:a})},Z=[{label:"Rosso",value:"rosso"},{label:"Giallo",value:"giallo"},{label:"Verde",value:"verde"},{label:"Blu",value:"blu"},{label:"Arancione",value:"arancione",disabled:!0},{label:"Viola",value:"viola"}],R=L.bind({});R.args={id:"colore",label:"Colore",options:Z};const _=L.bind({});_.args={id:"colore",label:"Colore",options:Z,appearance:"danger"};const F=L.bind({});F.args={id:"colore",label:"Colore",options:Z,clearable:!0};const I=L.bind({});I.args={id:"colore",label:"Colore",options:[{label:"Verde",value:"verde"},{label:"Arancione",value:"arancione",disabled:!0},{label:"Viola",value:"viola"},{label:"Colori primari",options:[{label:"Rosso",value:"rosso"},{label:"Giallo",value:"giallo"},{label:"Blu",value:"blu"}]}]};var ae,ne,te;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string | number | null>(null);
  return <AutoComplete {...args} value={value} onChange={setValue} />;
}`,...(te=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,re,ie;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string | number | null>(null);
  return <AutoComplete {...args} value={value} onChange={setValue} />;
}`,...(ie=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ue,se,ce;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string | number | null>(null);
  return <AutoComplete {...args} value={value} onChange={setValue} />;
}`,...(ce=(se=F.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,pe,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string | number | null>(null);
  return <AutoComplete {...args} value={value} onChange={setValue} />;
}`,...(me=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Do=["Default","Danger","Clearable","OptionGroup"];export{F as Clearable,_ as Danger,R as Default,I as OptionGroup,Do as __namedExportsOrder,Ao as default};
