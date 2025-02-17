> [!WARNING]
> This package is deprecated. Please switch to [@peerigon/configs](https://github.com/peerigon/configs).

# eslint-config-peerigon

**[Peerigon](https://peerigon.com/) coding rules as [ESLint](http://eslint.org/) config.**

[![Version on NPM](https://img.shields.io/npm/v/eslint-config-peerigon?style=for-the-badge)](https://www.npmjs.com/package/eslint-config-peerigon)
[![Semantically released](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)](https://github.com/semantic-release/semantic-release)
[![Monthly downloads on NPM](https://img.shields.io/npm/dm/eslint-config-peerigon?style=for-the-badge)](https://www.npmjs.com/package/eslint-config-peerigon)<br>
[![License](https://img.shields.io/npm/l/eslint-config-peerigon?style=for-the-badge)](./LICENSE)

Linting and formatting rules are always a balance between

-   ease of reading
-   ease of refactoring
-   ease of writing.

We think that

-   code is read more often than refactored
-   and refactored more often than written from scratch.

Our linting rules have been designed with these assumptions in mind.

## Table of contents

-   [Quick start](#quick-start)
-   [Practical guide](#practical-guide)
-   [Provided configs](#provided-configs)
-   [Styles](#styles)

## Quick start

Recommended configuration in your `package.json`:

```js
{
    "scripts": {
        "test:lint": "eslint --max-warnings 0 --cache --ext js,jsx,cjs,mjs,ts,tsx --ignore-path .gitignore .",
        "posttest": "npm run test:lint"
    }
}
```

We also offer a [Prettier](https://prettier.io/) config that matches our ESLint config. Create a `.prettierrc.json` in your project with the following content:

```json
"eslint-config-peerigon/prettier.config.js"
```

There are presets for the most common setups:

### TypeScript

```
npm i eslint eslint-config-peerigon --save-dev
```

```js
{
    "extends": [
        "peerigon/presets/typescript.js"
    ],
    "env": {
        "node": true
    },
    "root": true
}
```

### TypeScript + React

```
npm i eslint eslint-config-peerigon eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks --save-dev
```

```js
{
    "extends": [
        "peerigon/presets/typescript-react.js"
    ],
    "env": {
        "node": true,
        "browser": true
    },
    "root": true
}
```

### TypeScript + Node

```
npm i eslint eslint-config-peerigon eslint-plugin-n --save-dev
```

```js
{
    "extends": [
        "peerigon/presets/typescript-node.js"
    ],
    "root": true
}
```

## Practical guide

### Disabling rules

Try to disable as less rules as possible. In most cases it's best to just write

```js
// eslint-disable-next-line [rule-code]
```

where `[rule-code]` is the code that is displayed along the error message. Disabling the next line is usually better because it resists [Prettier](https://prettier.io/) reformatting.

Sometimes it makes sense to disable a rule within a specifc file. In that case you can put the following snippet at the beginning of the file:

```js
/* eslint-disable [rule-code] */
```

If you don't agree with a rule, please do not just disable the rule. Often there are good reasons and the current setting is the result of years of experience. It's better to create an issue here to start a discussion about the pros and cons of a rule.

### Different styles

We acknowledge that there are certain rules where there are no actual pros and cons or where there is no clear winner. You just have to decide for one style and stick with it. We also know that some rules make sense in one project, but don't make sense in another project. That's why we also provide a list of [accepted custom styles](#styles) (see also [this discussion](https://github.com/peerigon/eslint-config-peerigon/issues/11)) which you can pick.

### VSCode

This is our recommended VSCode configuration using the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Adjust it to the needs of your particular project:

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

### Experimental syntax using Babel

If you're using Babel you should set [`requireConfigFile: true`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#additional-parser-configuration) in your ESLint config. ESLint will then use your `babel.config.json`.

```js
{
    "parserOptions": { "requireConfigFile": true },
}
```

### Naming conventions for properties

Sometimes we're not in full control over the naming conventions in our codebase, for instance if data is coming from a foreign API. While it often is preferable to transform property names into camelCase, it might not be practical. In these situations you can disable the check for properties like this:

```js
const options = require("eslint-config-peerigon/options.js");

module.exports = {
    /* ... */
    rules: {
        // The API uses snake_case as properties
        camelcase: [
            "warn",
            {
                ...options["camelcase"],
                properties: "never",
            },
        ],
    },
};
```

**In TypeScript projects:**

```js
const options = require("eslint-config-peerigon/options.js");

module.exports = {
    /* ... */
    rules: {
        // The API uses snake_case as properties
        "@typescript-eslint/naming-convention": [
            "warn",
            options["@typescript-eslint/naming-convention"].ignoreProperties,
            ...options["@typescript-eslint/naming-convention"].defaultRules,
        ],
    },
};
```

## Provided configs

### [`peerigon`](base.js)

**Base rules for every project. You should always add these rules.**

```
npm i eslint eslint-config-peerigon --save-dev
```

These rules assume a modern project with full ES2015 support, including ES modules. For specific environments like Node.js or old JS engines, see below. The base rules do not define an `env`, so you might want to do that for yourself to enable specific globals.

Add an `.eslintrc.json` to the project's root folder:

```js
{
    "extends": [
        // Base rules for every project
        "peerigon"
    ],
    // Do not search for further eslint configs in upper directories
    "root": true,
    // If you're using Babel, you should set requireConfigFile: true
    // ESLint will then use your babel.config.json.
    // "parserOptions": { "requireConfigFile": true },
}
```

The base rules use the `eslint-plugin-import` to resolve imports. Although it's possible to define [custom resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers), it's highly discouraged to deviate from the common Node.js resolving algorithm. Other tools like linters and intellisense don't work reliably when you change the resolver.

### [`peerigon/typescript`](typescript.js)

Rules for [TypeScript](https://www.typescriptlang.org/).

```js
{
    "extends": [
        "peerigon",
        "peerigon/typescript",
        // Arrow functions are preferred with TypeScript
        // See https://github.com/peerigon/eslint-config-peerigon/issues/23#issuecomment-472614432
        "peerigon/styles/prefer-arrow"
    ],
    "root": true,
}
```

You need to add `--ext js,jsx,cjs,mjs,ts,tsx` to the `test:lint` script:

```js
{
    "scripts": {
        "test:lint": "eslint --max-warnings 0 --cache --ext js,jsx,cjs,mjs,ts,tsx --ignore-path .gitignore ."
    }
}
```

_We recommend using [`peerigon/styles/prefer-arrow`](#peerigonstylesprefer-arrow) because arrow functions (or function expressions in general) can leverage [TypeScript's contextual typing](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing)._

### [`peerigon/node`](node.js)

**Important: Requires [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).**

```
npm i eslint-plugin-n --save-dev
```

```js
{
    "extends": [
        "peerigon",
        "peerigon/node"
    ],
    // Setting env.node = true is not necessary, this is already done by peerigon/node
    "root": true
}
```

### [`peerigon/react`](react.js)

**Important: Requires [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react), [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) as project dependency.**

```
npm i eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks --save-dev
```

Rules for [React](https://facebook.github.io/react/) development, including accessibility rules.
These rules are also applicable in other JSX environments, like [Preact](https://github.com/developit/preact):

```js
{
    "extends": [
        "peerigon",
        "peerigon/react"
    ],
    "root": true
}
```

_We recommend using [`peerigon/styles/react-jsx-no-literals`](#peerigonstylesreact-jsx-no-literals) if you're using i18n in your project._
_You can use [`peerigon/styles/react-jsx-no-bind`](#peerigonstylesreact-jsx-no-bind) if you're using `memo` and `shouldComponentUpdate` a lot._

### [`peerigon/jsdoc`](jsdoc.js)

**Important: Requires [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc) as project dependency.**

```
npm i eslint-plugin-jsdoc --save-dev
```

Makes sure that JSDoc annotations are written in a standard-compliant and uniform way.

```js
{
    "extends": [
        "peerigon",
        "peerigon/jsdoc"
    ],
    "root": true
}
```

## Styles

The following rules enable specific writing styles. Use them as you prefer.

### [`peerigon/styles/prefer-arrow`](styles/prefer-arrow.js)

Enforces arrow function expressions instead of function declarations (see [#23](https://github.com/peerigon/eslint-config-peerigon/issues/23)).
Regular functions are still allowed as methods in objects or classes.

```js
    "extends": [
        "peerigon",
        "peerigon/styles/prefer-arrow"
    ],
```

### [`peerigon/styles/no-default-export`](styles/no-default-export.js)

Forbids usage of `export default`. When using default exports, it becomes harder to name classes or functions consistently throughout the codebase since every module can pick its own name for the imported thing. Nicholas C. Zakas, the creator of ESLint, wrote [an article with more compelling arguments why he stopped using `export default`](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/).

```js
    "extends": [
        "peerigon",
        "peerigon/styles/no-default-export"
    ],
```

**Please note:** This rule is disabled in `.jsx` and `.tsx` files because React components are usually exported via `export default`. [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy) even expects the lazy loaded component to be exported as `default`.

### [`peerigon/styles/no-null`](styles/no-null.js)

**Important: Requires [`eslint-plugin-no-null`](https://github.com/nene/eslint-plugin-no-null) as project dependency.**

```
npm i eslint-plugin-no-null --save-dev
```

Forbids the usage of `null`. In a codebase it's often better to use a single non-value to represent _the absence of a value_. With the rise of default parameters and destructuring defaults, JavaScript developed a clear tendency towards `undefined`. [This issue](https://github.com/peerigon/eslint-config-peerigon/issues/71) summarizes the arguments (and trade-offs) of **null vs. undefined**.

```js
    "extends": [
        "peerigon",
        "peerigon/styles/no-null"
    ],
```

**Please note:** If you use this rule, you will probably still need a single `null` value which you can refer to whenever you need to use `null` because of third-party code:

```js
// eslint-disable-next-line no-null/no-null
export const NULL = null;
```

### [`peerigon/styles/prefer-interface`](styles/prefer-interface.js)

**Important: Use it in combination with [`peerigon/typescript`](typescript.js).**

[Prefer `interface` over `type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md).

```js
    "extends": [
        "peerigon",
        "peerigon/typescript",
        "peerigon/styles/prefer-interface"
    ],
```

### [`peerigon/styles/react-jsx-no-bind`](styles/react-jsx-no-bind.js)

**Important: Use it in combination with [`peerigon/react`](react.js).**

Depending on the way you write your components, it might be not ok to create functions during `render()`. Use it if you're using things like `React.memo()` or `shouldComponentUpdate` a lot.

```js
    "extends": [
        "peerigon",
        "peerigon/react",
        "peerigon/styles/react-jsx-no-bind"
    ],
```

### [`peerigon/styles/react-jsx-no-literals`](styles/react-jsx-no-literals.js)

**Important: Use it in combination with [`peerigon/react`](react.js).**

Use this style if you're using i18n. It prevents people from putting raw strings in components.

```js
    "extends": [
        "peerigon",
        "peerigon/react",
        "peerigon/styles/react-jsx-no-literals"
    ],
```

It disallows this:

```jsx
const Hello = <div>test</div>;
```

As an escape hatch, this is still allowed:

```jsx
const Hello = <div>{"test"}</div>;
```

### [`peerigon/styles/prefer-array-shorthand`](styles/prefer-array-shorthand.js)

**Important: Use it in combination with [`peerigon/typescript`](typescript.js).**

Enforces typescript arrays to use the shorthand array-style instead of the generic style.

```js
    "extends": [
        "peerigon",
        "peerigon/typescript",
        "peerigon/styles/prefer-array-shorthand"
    ],
```

It enforces this:

```ts
const foo: string[] = [];
```

instead of

```ts
const foo: Array<string> = [];
```

## License

Unlicense

## Sponsors

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://peerigon.com)
