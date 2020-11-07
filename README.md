# @garv_nanwani/small

[![npm (scoped)](https://img.shields.io/npm/v/@garv_nanwani/small.svg)](https://www.npmjs.com/package/@garv_nanwani/small)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@garv_nanwani/small.svg)](https://www.npmjs.com/package/@garv_nanwani/small)

Removes all spaces from a string.

## Install

```
$ npm install @garv_nanwani/small
```

## Usage

```js
const small = require("@garv_nanwani/small");

small("So much space!");
//=> "Somuchspace!"

small(1337);
//=> Uncaught TypeError: Small wants a string!
//    at small (<anonymous>:2:41)
//    at <anonymous>:1:1
```
