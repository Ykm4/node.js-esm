// 読み込み時の拡張子は明示的に指定する必要がある
// "./myName"のような省略は不可能である
import { myName } from "./myName.js";
console.log(myName) // Ykm4

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cjsModule = require("./myName.cjs");
console.log(cjsModule); // { myNameCJS: 'Ykm4' }
console.log(cjsModule.myNameCJS); // Ykm4