# eslint-config-peerigon

**[Peerigon](https://peerigon.com/) coding rules as [ESLint](http://eslint.org/) config.**

[![](https://img.shields.io/npm/v/eslint-config-peerigon.svg)](https://www.npmjs.com/package/eslint-config-peerigon)
[![](https://img.shields.io/npm/dm/eslint-config-peerigon.svg)](https://www.npmjs.com/package/eslint-config-peerigon)
[![Dependency Status](https://david-dm.org/peerigon/eslint-config-peerigon.svg)](https://david-dm.org/peerigon/eslint-config-peerigon?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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
-   [Features](#features)
-   [Practical guide](#practical-guide)
-   [Provided configs](#provided-configs)
-   [Styles](#styles)

## Quick start

Recommended configuration in your `package.json`:

```js
{
    "scripts": {
        "test:lint": "eslint --cache --max-warnings 0 .",
        "posttest": "npm run test:lint"
    }
}
```

There are presets for the most common setups:

### Prettier + TypeScript

```
npm i eslint eslint-config-peerigon --save-dev
```

```js
{
    "extends": [
        "peerigon/presets/prettier-typescript.js"
    ],
    "env": {
        "node": true
    },
    "root": true,
    "parserOptions": {
        // This path is relative to the CWD where eslint is executed
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
        "project": "./tsconfig.json",
        "sourceType": "module"
    }
}
```

### Prettier + TypeScript + React

```
npm i eslint eslint-config-peerigon eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks --save-dev
```

```js
{
    "extends": [
        "peerigon/presets/prettier-typescript-react.js"
    ],
    "env": {
        "node": true,
        "browser": true
    },
    "root": true,
    "parserOptions": {
        // This path is relative to the CWD where eslint is executed
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
        "project": "./tsconfig.json",
        "sourceType": "module"
    }
}
```

### Prettier + TypeScript + Node

```
npm i eslint eslint-config-peerigon eslint-plugin-node --save-dev
```

```js
{
    "extends": [
        "peerigon/presets/prettier-typescript-node.js"
    ],
    "root": true,
    "parserOptions": {
        // This path is relative to the CWD where eslint is executed
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
        "project": "./tsconfig.json",
        "sourceType": "module"
    }
}
```

Your `package.json`:

```json
{
    "type": "module",
    "engines": {
        "node": ">=14.0.0"
    }
}
```

## Features

### Atomic changes

Our formatting rules have been chosen carefully so that a change of a file is as atomic as possible. This makes it easier to review pull requests because there are no meaningless changes anymore.

**Example:** I want to change a variable from `let` to `const`.

```diff
// Bad coding style because useless whitespace changes were necessary
-let a   = 1,
+let   a   = 1,
-    bbb = 2,
+      cc  = 3;
-    cc  = 3;
+const bbb = 3;
```

```diff
// Good coding style because only the relevant parts need to be changed
let a = 1;
-let bb = 2;
+const bb = 2;
let ccc = 3;
```

This is also the reason why we prefer [dangling commas](https://eslint.org/docs/rules/comma-dangle) for multiline arrays, objects and arguments although they look very unfamiliar on first sight (see [discussion](https://github.com/peerigon/eslint-config-peerigon/issues/10)).

### Consistent formatting

For the purpose of atomic changes, our rules are intentionally strict about formatting which are usually autofixable. You should use an editor configuration where you can apply these autofixes on demand (for instance when saving the file).

We recommend combining these linting rules with [Prettier](https://prettier.io/) (see [below](#prettier)). There's also a [recommended configuration for VSCode](#vscode).

### Code smells as a warning

Developers take shortcuts. And that's ok because at the end of the day we have to deliver software within fixed time frames and budgets. Sometimes it's also because we don't know of a better alternative. We call these shortcuts "code smells" and our linting rules will complain about them with a warning.

This means that this code is potentially problematic, but you don't have to fix it right away. You should keep the warning and come back later to refactor it (e.g. during a refactoring sprint). The amount of warnings is also a good indicator for technical debt.

If you think that there is a good reason for deviating from the standard path, disable the warning and put an explanation above that comment why it's ok to disable the rule in that case, like:

```js
// The API returns snakecase properties
/* eslint-disable babel/camelcase */
function fetchUsers() {
    // ...
}
```

We use warnings instead of errors for most code issues since it's visually less distracting. We recommend to use `--max-warnings 0` as part of your test script or within your CI. These warnings can serve as a hint that the code needs to be fixed before it can be merged into the `main` branch.

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

### Prettier

In order to avoid conflicts between Prettier and our rules, you should always add **prettier rules at the end of `extends`**. For example, in a TypeScript + React project you would use the following configuration:

```js
{
    "extends": [
        "peerigon",
        "peerigon/typescript",
        "peerigon/styles/prefer-arrow",
        "peerigon/react",
        // prettier must be at the end
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react"
    ],
    "root": true,
};
```

This module already lists [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) as dependency which is why you don't have to install it manually.

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
        "peerigon",
        "prettier" // add this at the end of 'extends' if you're using Prettier
    ],
    // Do not search for further eslint configs in upper directories
    "root": true,
    // If you're using Babel, you should set requireConfigFile: true
    // ESLint will then use your babel.config.json.
    // "parserOptions": { "requireConfigFile": true },
}
```

The base rules use the `eslint-plugin-import` to resolve imports. Although it's possible to define [custom resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers), it's highly discouraged to deviate from the common Node/webpack resolving algorithm. Other tools like linters and intellisense don't work reliably when you change the resolver.

### [`peerigon/node`](node.js)

**Important: Requires [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node).**

```
npm i eslint-plugin-node --save-dev
```

```js
{
    "extends": [
        "peerigon",
        "peerigon/node",
        "prettier" // add this if you're using Prettier
    ],
    // Setting env.node = true is not necessary, this is already done by peerigon/node
    "root": true
}
```

[`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node) uses the ["engines" field](https://docs.npmjs.com/files/package.json#engines) and the ["type" field](https://nodejs.org/api/esm.html#esm_enabling) in your `package.json` to check for compatibility issues. We recommend the following configuration:

```json
{
    "type": "module",
    "engines": {
        "node": ">=14.0.0"
    }
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
        "peerigon/react",
        "prettier", // add this and...
        "prettier/react" // ...this if you're using Prettier
    ],
    "root": true
}
```

_We recommend using [`peerigon/styles/react-jsx-no-literals`](#peerigonstylesreact-jsx-no-literals) if you're using i18n in your project._
_You can use [`peerigon/styles/react-jsx-no-bind`](#peerigonstylesreact-jsx-no-bind) if you're using `memo` and `shouldComponentUpdate` a lot._

### [`peerigon/typescript`](typescript.js)

Rules for [TypeScript](https://www.typescriptlang.org/).

**⚠️ Attention:** These rules require your `tsconfig.json`. Specify the path in `parserOptions.project` (see also [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject) for more information). _The path should be relative to the folder where `eslint` is executed._

```js
{
    "extends": [
        "peerigon",
        "peerigon/typescript",
        // Arrow functions are preferred with TypeScript
        // See https://github.com/peerigon/eslint-config-peerigon/issues/23#issuecomment-472614432
        "peerigon/styles/prefer-arrow",
        "prettier", // add this and...
        "prettier/@typescript-eslint" // ...this if you're using Prettier
    ],
    "parserOptions": {
        // Relative to the folder where eslint is executed
        // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
        "project": "./tsconfig.json"
    },
    "root": true,
}
```

You need to add `--ext js,ts,tsx` to the `test:lint` script:

```js
{
    "scripts": {
        "test:lint": "eslint --cache --ext js,jsx,ts,tsx ./src ./test"
    }
}
```

_We recommend using [`peerigon/styles/prefer-arrow`](#peerigonstylesprefer-arrow) because arrow functions (or function expressions in general) can leverage [TypeScript's contextual typing](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing)._

Do you see an error that looks like this?

```
Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: ...
The file must be included in at least one of the projects provided
```

This is a sign that ESLint is trying to lint a file that is not included by your `tsconfig.json`. You need to adjust either `parserOptions.project` or `include` of the referenced `tsconfig.json`.

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

### [`peerigon/flowtype`](flowtype.js)

**Important: Requires [`babel-eslint`](https://github.com/babel/babel-eslint) and [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype) as project dependency.**

```
npm i babel-eslint eslint-plugin-flowtype --save-dev
```

Rules for [Flowtype](https://flowtype.org/).

```js
{
    "extends": [
        "peerigon",
        "peerigon/flowtype",
        "prettier", // add this and...
        "prettier/flowtype" // ...this if you're using Prettier
    ],
    "root": true
}
```

### [`peerigon/es5`](es5.js)

Special rules for older projects:

```js
{
    "extends": [
        // Base rules with full ES2015 support
        "peerigon",
        // Legacy rules for older projects
        "peerigon/es5"
    ],
    "root": true
}
```

## Styles

The following rules enable specific writing styles. Use them as you prefer.

### [`peerigon/styles/prefer-arrow`](styles/prefer-arrow.js)

**Important: Requires [`eslint-plugin-prefer-arrow`](https://github.com/TristonJ/eslint-plugin-prefer-arrow) as project dependency.**

```
npm i eslint-plugin-prefer-arrow --save-dev
```

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
