# @funboxteam/scss-vars-loader

[![npm](https://img.shields.io/npm/v/@funboxteam/scss-vars-loader.svg)](https://www.npmjs.com/package/@funboxteam/scss-vars-loader)

Webpack loader that injects `$b` variable declaration to the processed files with the name of the current BEM block
as a value.

[По-русски](./README.ru.md)

## Rationale

When we develop web apps we use BEM on filesystem. Sometimes blocks become too huge to handle them easily,
and when you suddenly need to rename one, you have to rewrite the name in every file. To make it a bit easier
we decided to unify block name in SCSS files by `$b` variable.

At the same time it allows us to generate SCSS files using templates and not to care about the proper name 
of the selector there. 

## Getting Started

Install the loader in your project:

```bash
npm install --save-dev @funboxteam/scss-vars-loader
```

Add it into the project's Webpack config so that it is called before sass-loader:

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // ...
          'sass-loader',
          '@funboxteam/scss-vars-loader',
          // ...
        ],
      },
    ],
  },
};
```

## Usage

Use `$b` to construct SCSS selectors:

```scss
.#{$b}__elem_mod_value {
  color: red;
}
```

## Implementation details

At the build stage this line is added into the each processed file:

```scss
$b: 'blockname';
```

To find out the name of the current BEM block properly, the loader goes though the path of the processed file
from right to left and searches the first directory name which does not start with `_` and uses such directory
as a value for `$b`.

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
