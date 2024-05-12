# Node.jsでES Module(ESM)を使う

ESMを利用するためには2つの方法があります。
1. ファイル拡張子を`.mjs`にする
2. package.jsonに`"type": "module"`を追加する

## ファイル拡張子を .mjs にする
Node.jsでは動作させたいJavaScriptのファイルをすべて`.mjs`の拡張子に変更する事で、ESMとして認識されます。

```javascript
// myName.mjs
export const myName = 'Ykm4'
```

読み込み側のファイルも`.mjs`にする必要があります。
また、import時はファイルの拡張子が省略できないため注意が必要です。

```javascript
// index.mjs
import { myName } from './myName.mjs'
console.log(myName) // Ykm4
```

### 参考
- https://blog.koh.dev/2024-04-23-nodejs-typescript-module/#%E6%8B%A1%E5%BC%B5%E5%AD%90%E3%82%92mjs%E3%81%AB%E3%81%99%E3%82%8B
- https://typescriptbook.jp/reference/import-export-require#mjs

## "type": "module"
package.jsonの中に`"type": "module"`を追加すると、そのpackage.jsonがあるディレクトリ以下の`.*js`拡張子のファイルがESMであると認識されます。

```json
{
  "name": "nodejs-esm",
  "main": "index.js",
  "type": "module"
}
```

ファイル拡張子を`.mjs`に変更しなくてもそのまま`ESM`を使えるようになります。
```javascript
// myName.js
export const myName = 'Ykm4';
```

読み込み時の拡張子は明示的に指定する必要がある
```javascript
// index.js
import { myName } from './myName.js';
console.log(myName); // Ykm4
```

CommonJSで書かれたJavaScriptを読み込みたくなったときはCommonJSで書かれているファイルをすべて.cjsに変更する必要があります。
```javascript
// myName.cjs
module.exports = 'Ykm4';

// 読み込み側
// index.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { myName } = require('./myName.cjs');
console.log(myName); // Ykm4
```

### 参考
- https://blog.koh.dev/2024-04-23-nodejs-typescript-module/#packagejson%E3%81%ABtype%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B
- https://typescriptbook.jp/reference/import-export-require#type-module
