import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DatCARk7.js";import"./string-BWSckzgf.js";import{d as g,l as M}from"./styled-components.browser.esm-DD6bt04G.js";import{U as O}from"./Ul-ChFEAKwj.js";import{c as N}from"./strings-Bn8L0l--.js";import{R as z}from"./Flex-DwwaOy33.js";import{F as Y}from"./file-download-BVPoERnK.js";import{F as Z}from"./delete-BcFbdolr.js";import{T as w}from"./Tooltip-FXVI7MEq.js";import{a as G}from"./Button-bb1s2N95.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";import"./popover.module-_MiSh5dU.js";import"./isNewDesignEnabled-CECVVFcR.js";import"./Icon-BDJ5phNo.js";function K(e){return new Promise((r,n)=>{const t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{var o;r(((o=t.result)==null?void 0:o.toString())||"")},t.onerror=o=>{n(o)}})}function y(e){const r=e.lastIndexOf(".");return r===-1?{name:e,ext:""}:{name:e.substring(0,r),ext:e.substring(r)}}function X(e){const r=Math.floor(Math.log(e)/Math.log(1024)),n=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];return(e/Math.pow(1024,r)).toFixed(2)+" "+n[r]}function J(e){const{ext:r}=y(e);return D.includes(r)}function Q(e,r){const{name:n}=y(e.name),t=r.startsWith(".")?r:`.${r}`;return`${n}${t}`}function H(e=""){const{ext:r}=y(e);return W.indexOf(r)!==-1}const D=[".apng",".bmp",".gif",".ico",".cur",".jpg",".jpeg",".jfif",".pjpeg",".pjp",".png",".svg",".webp"],W=[...D,".pdf",".xml"];function ee(e,r){const{maxWidth:n=1024,maxHeight:t=1024,type:o="image/jpeg",quality:a=.7}={},d=Q(e,o==="image/png"?".png":".jpg");return new Promise((l,h)=>{const f=new Image;f.onerror=function(){URL.revokeObjectURL(this.src),h(new Error("Cannot draw file in canvas"))},f.onload=function(){URL.revokeObjectURL(this.src),te(e,function(c){let p=f.width,m=f.height;const b=c>4?Math.min(t/p,n/m,1):Math.min(n/p,t/m,1);m=Math.round(m*b),p=Math.round(p*b);const T=ne(f,p,m,c).toDataURL(o,a),I=re(T);l(new File([I],d,{type:I.type}))})},f.src=URL.createObjectURL(e)})}function re(e){const r=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(r.length),o=new Uint8Array(t);for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return new Blob([t],{type:n})}function ne(e,r,n,t){const o=document.createElement("canvas");t>4?(o.width=n,o.height=r):(o.width=r,o.height=n);const a=o.getContext("2d");if(a){switch(t){case 2:a.transform(-1,0,0,1,r,0);break;case 3:a.transform(-1,0,0,-1,r,n);break;case 4:a.transform(1,0,0,-1,0,n);break;case 5:a.transform(0,1,1,0,0,0);break;case 6:a.transform(0,1,-1,0,n,0);break;case 7:a.transform(0,-1,-1,0,n,r);break;case 8:a.transform(0,-1,1,0,0,r);break}a.drawImage(e,0,0,r,n)}return o}function te(e,r){const n=e.slice(0,131072),t=new FileReader;t.onload=function(o){var h;const a=(h=o.target)==null?void 0:h.result;if(!(a instanceof ArrayBuffer)){r(-2);return}const s=new DataView(a);if(s.getUint16(0,!1)!==65496){r(-2);return}const d=s.byteLength;let l=2;for(;l<d;){const f=s.getUint16(l,!1);if(l+=2,f===65505){if(s.getUint32(l+=2,!1)!==1165519206){r(-1);return}const c=s.getUint16(l+=6,!1)===18761;l+=s.getUint32(l+4,c);const p=s.getUint16(l,c);l+=2;for(let m=0;m<p;m++)if(s.getUint16(l+m*12,c)===274){r(s.getUint16(l+m*12+8,c));return}}else{if((f&65280)!==65280)break;l+=s.getUint16(l,!1)}}r(-1)},t.readAsArrayBuffer(n)}const ie=({title:e,titleId:r,...n},t)=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":r,...n},e?u.createElement("title",{id:r},e):null,u.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"})),ae=u.forwardRef(ie),oe=25*1024*1024;function F({title:e="Carica file",multiple:r=!0,maxSizeInBytes:n=oe,mimeTypesMaxSizeInBytes:t,onChange:o}){const[a,s]=u.useState([]),[d,l]=u.useState(!1);function h(c){c.preventDefault(),l(!1),f(c.dataTransfer.files)}function f(c){if(!c)return;let p=Array.from(c);r||(p=p.slice(0,1)),se(p).then(m=>{const b=le(m,n,t);b.length===0?(o(m),s([])):s(b)}).catch(m=>{s(["Si è verificato un errore durante la compressione dei file",m.message])})}return i.jsxs("section",{children:[i.jsx(de,{children:e}),i.jsxs(ue,{$dragging:d,onDragEnter:()=>l(!0),onDragLeave:()=>l(!1),onDragOver:c=>c.preventDefault(),onDrop:h,children:[i.jsx(pe,{width:"18",height:"18"})," Trascina qui i tuoi file o clicca per selezionare",i.jsx(fe,{type:"file",multiple:r,onChange:c=>f(c.target.files)})]}),i.jsx(_,{errors:a})]})}function _({errors:e=[]}){return e.length?i.jsx(me,{role:"alert",children:e.map(r=>i.jsx("li",{children:r},r))}):null}function se(e){return Promise.all(e.map(r=>r.type.match(/image\/(?!svg).*/)?ee(r):Promise.resolve(r)))}function le(e,r,n){return e.map(t=>ce(t,r,n)).filter(t=>t)}function ce(e,r,n){const t=(n==null?void 0:n[e.type])||r,o=X(t);return e.size<t?"":`Il file "${e.name}" eccede la dimensione massima di ${o}`}const de=g.h3`
  margin: 0;
  font-size: var(--font-size-small);
  font-weight: 600;
`,ue=g.label`
  display: block;
  background-color: var(--surface);
  border: 2px dashed var(--outline);
  padding: var(--space-2);
  border-radius: var(--border-radius);
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  &:hover {
    color: var(--secondary);
    background-color: var(--primary-container);
  }
  &:focus-within {
    border-color: var(--secondary);
  }
  ${({$dragging:e})=>e&&M`
      color: var(--secondary);
      border-color: var(--secondary);
      background-color: var(--primary-container);
    `}
`,pe=g(ae)`
  vertical-align: text-bottom;
  margin-right: var(--space-1);
`,fe=g.input`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
`,me=g(O)`
  color: var(--error);
  margin: var(--space-1);
  font-size: var(--font-size-small);
  font-weight: 500;
`;try{F.displayName="FilePicker",F.__docgenInfo={description:"",displayName:"FilePicker",props:{title:{defaultValue:{value:"Carica file"},description:"",name:"title",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},maxSizeInBytes:{defaultValue:{value:"25 * 1024 * 1024"},description:"",name:"maxSizeInBytes",required:!1,type:{name:"number"}},mimeTypesMaxSizeInBytes:{defaultValue:null,description:"",name:"mimeTypesMaxSizeInBytes",required:!1,type:{name:"Record<string, number>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(files: File[]) => void"}}}}}catch{}try{_.displayName="FilePickerErrors",_.__docgenInfo={description:"",displayName:"FilePickerErrors",props:{errors:{defaultValue:{value:"[]"},description:"",name:"errors",required:!1,type:{name:"string[]"}}}}}catch{}const ge=({title:e,titleId:r,...n},t)=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":r,...n},e?u.createElement("title",{id:r},e):null,u.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),he=u.forwardRef(ge);function k({asset:e,previewUrlBuilder:r,downloadUrlBuilder:n,onDelete:t}){const[o,a]=u.useState(""),{ext:s}=y(e.name),d=e.id&&r?r(e.id):null,l=e.id&&n?n(e.id):null;u.useEffect(()=>{let p;return"file"in e&&(p=URL.createObjectURL(e.file),a(p)),()=>{p&&URL.revokeObjectURL(p)}},[e]);const h=`mostra anteprima ${e.name}`,f=`scarica ${e.name}`,c=`elimina ${e.name}`;return i.jsxs(z,{$alignItems:"center",children:[i.jsx(w,{id:`tooltip-anteprima-asset-${e.id}`,message:h,children:i.jsx(j,{as:"a",href:d??o,appearance:"ghost",target:"_blank",rel:"noreferrer",hidden:!H(s),"aria-label":h,"aria-labelledby":`tooltip-anteprima-asset-${e.id}`,children:i.jsx(he,{width:"24",height:"24"})})}),i.jsx(w,{id:`tooltip-scarica-asset-${e.id}`,message:f,children:i.jsx(j,{as:"a",href:l??o,appearance:"ghost","aria-label":f,"aria-labelledby":`tooltip-scarica-asset-${e.id}`,download:e.name,children:i.jsx(Y,{width:"24",height:"24"})})}),t&&i.jsx(w,{id:`tooltip-elimina-asset-${e.id}`,message:c,children:i.jsx(j,{type:"button",onClick:t,appearance:"ghost","aria-label":c,"aria-labelledby":`tooltip-elimina-asset-${e.id}`,children:i.jsx(Z,{width:"24",height:"24"})})})]})}const j=g(G)`
  margin: 0 var(--space-1);
  padding: var(--space-1);
  &[hidden] {
    visibility: hidden;
  }
`;try{k.displayName="AssetActions",k.__docgenInfo={description:"",displayName:"AssetActions",props:{asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"FileAsset"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}},previewUrlBuilder:{defaultValue:null,description:"",name:"previewUrlBuilder",required:!1,type:{name:"((id: string) => string)"}},downloadUrlBuilder:{defaultValue:null,description:"",name:"downloadUrlBuilder",required:!1,type:{name:"((id: string) => string)"}}}}}catch{}function U({asset:e}){return"file"in e&&J(e.file.name)?i.jsx(ve,{file:e.file}):i.jsx(P,{filename:e.name})}function ve({file:e}){const[r,n]=u.useState("");return u.useEffect(()=>{K(e).then(n).catch(()=>{})},[e]),r?i.jsx(be,{src:r,width:"44px",height:"44px",alt:e.name}):i.jsx(P,{filename:e.name})}function P({filename:e}){const{ext:r}=y(e);return i.jsx(xe,{children:r})}const be=g.img`
  flex-shrink: 0;
  object-fit: cover;
  border-radius: var(--border-radius);
  overflow: hidden;
`,xe=g.span`
  text-transform: uppercase;
  width: 44px;
  height: 44px;
  line-height: 44px;
  background-color: var(--surface);
  border-radius: var(--border-radius);
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;try{U.displayName="AssetPreview",U.__docgenInfo={description:"",displayName:"AssetPreview",props:{asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"FileAsset"}}}}}catch{}function E({files:e,namePrefix:r,onDelete:n,previewUrlBuilder:t,downloadUrlBuilder:o,onChange:a}){return i.jsx(i.Fragment,{children:e.map((s,d)=>i.jsx(ye,{namePrefix:r,asset:s,onDelete:()=>n(d),previewUrlBuilder:t,downloadUrlBuilder:o,onNameChange:l=>a==null?void 0:a({...s,name:l},d)},q(s)))})}function ye({asset:e,namePrefix:r,onDelete:n,previewUrlBuilder:t,downloadUrlBuilder:o,onNameChange:a}){const s=r?`${r}Filename`:"filename",d=q(e);return i.jsxs(Fe,{children:[e.id&&i.jsx("input",{type:"hidden",name:A("fileId",r),value:e.id,"data-index":d}),e.fileToken&&i.jsx("input",{type:"hidden",name:A("fileToken",r),value:e.fileToken,"data-index":d}),i.jsx(U,{asset:e}),i.jsx(we,{type:"text",name:s,defaultValue:e.name,"data-index":d,onChange:l=>a==null?void 0:a(l.target.value)}),i.jsx(k,{asset:e,previewUrlBuilder:t,downloadUrlBuilder:o,onDelete:n})]})}function q(e){return e.id??e.fileToken}function A(e,r){return r?r+N(e):e}const Fe=g(z)`
  margin-top: var(--space-2);
`,we=g.input`
  display: block;
  flex-grow: 1;
  background-color: var(--surface);
  border: none;
  color: var(--on-background);
  margin: 0 var(--space-1);
  padding: 0.75rem 0.5rem;
  border-radius: var(--border-radius);
  transition:
    background-color 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
  &:hover:not(:disabled),
  :focus,
  :active:not(:disabled) {
    background-color: var(--background);
  }
`;try{E.displayName="FileInputList",E.__docgenInfo={description:"",displayName:"FileInputList",props:{files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"FileAsset[]"}},namePrefix:{defaultValue:null,description:"",name:"namePrefix",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(index: number) => void"}},previewUrlBuilder:{defaultValue:null,description:"",name:"previewUrlBuilder",required:!1,type:{name:"((id: string) => string)"}},downloadUrlBuilder:{defaultValue:null,description:"",name:"downloadUrlBuilder",required:!1,type:{name:"((id: string) => string)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((asset: FileAsset, index: number) => void)"}}}}}catch{}const Ce={title:"Forms/File Picker",component:F,argTypes:{}},C=({onChange:e,...r})=>{const[n,t]=u.useState([]),o=s=>t(d=>d.concat(s.map(l=>({file:l,name:l.name,fileToken:""})))),a=s=>{t(d=>[...d.slice(0,s),...d.slice(s+1)])};return i.jsxs("div",{children:[i.jsx(F,{onChange:o,...r}),i.jsx(E,{files:n,onDelete:a})]})},v=C.bind({});v.args={title:"Allegati"};const x=C.bind({});x.args={...v.args,multiple:!1};var R,B,S;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [files, setFiles] = React.useState<FileAsset[]>([]);
  const addFiles = (files: File[]) => setFiles(currentFiles => currentFiles.concat(files.map(file => ({
    file,
    name: file.name,
    fileToken: ''
  }))));
  const deleteFile = (index: number) => {
    setFiles(values => [...values.slice(0, index), ...values.slice(index + 1)]);
  };
  return <div>
      <FilePicker onChange={addFiles} {...args} />
      <FileInputList files={files} onDelete={deleteFile} />
    </div>;
}`,...(S=(B=v.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var L,V,$;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [files, setFiles] = React.useState<FileAsset[]>([]);
  const addFiles = (files: File[]) => setFiles(currentFiles => currentFiles.concat(files.map(file => ({
    file,
    name: file.name,
    fileToken: ''
  }))));
  const deleteFile = (index: number) => {
    setFiles(values => [...values.slice(0, index), ...values.slice(index + 1)]);
  };
  return <div>
      <FilePicker onChange={addFiles} {...args} />
      <FileInputList files={files} onDelete={deleteFile} />
    </div>;
}`,...($=(V=x.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const Te=["Default","Single"];export{v as Default,x as Single,Te as __namedExportsOrder,Ce as default};
