import { jsx as m } from "react/jsx-runtime";
import f from "react";
import c from "styled-components";
import { Box as l } from "../Box/Box.js";
import { extractStyleFromTheme as p } from "../helpers/theme.js";
const a = c(l)`
  path {
    fill: ${({
  color: o,
  theme: r
}) => p(r.colors, o, void 0)};
  }
  ${({
  theme: o,
  colors: r
}) => r(o)}
`, n = f.forwardRef(({
  color: o = "neutral600",
  colors: r = () => "",
  ...t
}, e) => m(a, {
  ref: e,
  color: o,
  colors: r,
  ...t
}));
n.displayName = "Icon";
export {
  n as Icon
};
