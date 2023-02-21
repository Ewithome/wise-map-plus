import * as t from "./src/components/index.mjs";
import { Button as s } from "./src/components/button/index.mjs";
const n = {
  install: (o) => {
    for (let e in t)
      o.use(t[e]);
  }
};
export {
  s as Button,
  n as default
};
