// ファイルの拡張子は省略不可能
import { myName } from "./myName.mjs";
console.log(myName) // → Ykm4

// ESMからCommonJSのファイル読み込み（import）は可能
// ※ 逆にCommonJSからESMの読み込みは不可能なため注意(但し、DynamicImportを使用すれば可)
import { myNameCJS } from "./myName.cjs";
console.log(myNameCJS) // → Ykm4 from cjs