"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react/jsx-runtime"),l=require("react"),u=require("styled-components"),a=require("../Box/Box.cjs"),d=require("../helpers/theme.cjs"),o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},i=o(l),f=o(u),m=f.default(a.Box)`
  path {
    fill: ${({color:e,theme:t})=>d.extractStyleFromTheme(t.colors,e,void 0)};
  }
  ${({theme:e,colors:t})=>t(e)}
`,r=i.default.forwardRef(({color:e="neutral600",colors:t=()=>"",...c},s)=>n.jsx(m,{ref:s,color:e,colors:t,...c}));r.displayName="Icon";exports.Icon=r;
