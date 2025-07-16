import{d as n,l as t}from"./styled-components.browser.esm-DD6bt04G.js";const i=n.div`
  display: flex;

  ${e=>e.$center&&t`
      justify-content: center;
      align-items: center;
    `}
  ${e=>e.$flexDirection&&t`
      flex-direction: ${e.$flexDirection};
    `}

  ${e=>e.$flexWrap&&t`
      flex-wrap: ${e.$flexWrap};
    `}

  ${e=>e.$justifyContent&&t`
      justify-content: ${e.$justifyContent};
    `}

  ${e=>e.$alignItems&&t`
      align-items: ${e.$alignItems};
    `}

  ${e=>e.$gap&&t`
      gap: ${e.$gap};
    `}
`,$=n(i)`
  flex-direction: column;
`,a=n(i)`
  flex-direction: row;
`,c=n.div`
  flex: 1;
`;export{$ as C,i as F,a as R,c as a};
