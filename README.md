# eslint-config-peerigon

**[Peerigon](https://peerigon.com/) coding rules as [ESLint](http://eslint.org/) config.**

[![](https://img.shields.io/npm/v/eslint-config-peerigon.svg)](https://www.npmjs.com/package/eslint-config-peerigon)
[![](https://img.shields.io/npm/dm/eslint-config-peerigon.svg)](https://www.npmjs.com/package/eslint-config-peerigon)
[![Dependency Status](https://david-dm.org/peerigon/eslint-config-peerigon.svg)](https://david-dm.org/peerigon/eslint-config-peerigon?branch=master)

## Motivation

Linting and formatting rules are always a balance between

- ease of reading
- ease of refactoring
- ease of writing.

We think that

- code is read more often than refactored
- and refactored more often than written from scratch.

Our linting rules have been designed with these assumptions in mind.

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

You can also combine these linting rules with [Prettier](https://prettier.io/) (see [below](#prettier)). There's also a [recommended configuration for VSCode](#vscode).

### Code smells as a warning

Developers take shortcuts. And that's ok because at the end of the day we have to deliver software within fixed time frames and budgets. Sometimes it's also because we don't know of a better alternative. We call these shortcuts "code smells" and our linting rules will complain about them with a warning.

This means that this code is potentially problematic, but you don't have to fix it right away. You should keep the warning and come back later to refactor it (e.g. during a refactoring sprint). The amount of warnings is also a good indicator for technical debt.

For example, our linting rules will complain about:

- **too many dependencies in a file** because it's usually a sign that you should break the module into more granular pieces
- **high [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity)** because it's hard for humans to anticipate all possibilities.
- **`process.exit(1)`** because throwing an error is often the better alternative
- ...

We know that for every warning there is a legitimate use case:

- Application entry files usually have a lot of imports and almost no actual code.
- Unknown/unreliable data sources often cause unavoidable cyclomatic complexity.
- Within `process.on("uncaughtException", ...` maybe we don't want to print the regular stack trace.

If you think that there is a good reason for deviating from the standard path, disable the warning and put an explanation above that comment why it's ok to disable the rule in that case, like:

```js
// Validation logic typically contains a lot of if() checks.
// It's better to keep this complexity hidden behind a single function.
// eslint-disable-next-line complexity
function validate() {
    // ...
}
```

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

In rare cases, it makes sense to disable a rule for the whole project. For instance, if you work with JSON data coming from a foreign API that uses underscore property names.

If you don't agree with a rule, please do not just disable the rule. Often there are good reasons and the current setting is the result of years of experience. It's better to create an issue here to start a discussion about the pros and cons of a rule.

### Different styles

We acknowledge that there are certain rules where there are no actual pros and cons or where there is no clear winner. You just have to decide for one style and stick with it. That's why we also provide a list of [accepted custom styles](#styles) (see also [this discussion](https://github.com/peerigon/eslint-config-peerigon/issues/11)).


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
    "env": {
        // Enable node globals
        "node": true
    },
    // Do not search for further eslint configs in upper directories
    "root": true
}
```

In your `package.json`, add a `lint` script and run it as `posttest`:

```js
{
    "scripts": {
        "lint": "eslint ./src ./test",
        "posttest": "npm run lint"
    }
}
```

The base rules use the `eslint-plugin-import` to resolve imports. Although it's possible to define [custom resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers), it's highly discouraged to deviate from the common Node/webpack resolving algorithm. Other tools like linters and intellisense don't work reliably when you change the resolver.

### [`peerigon/node`](node.js)

Special rules for Node.js >= 8.0.0 environments:

```js
{
    "extends": [
        // Base rules with full ES2015 support
        "peerigon",
        // Rules for node
        "peerigon/node"
    ]
    // Setting env.node = true is not necessary, this is already done by peerigon/node
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

*We recommend using [`peerigon/styles/react-jsx-no-literals`](#peerigonstylesreact-jsx-no-literals) if you're using i18n in your project.*

### [`peerigon/typescript`](typescript.js)

**Important: Requires [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), [`@typescript-eslint/parser`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) and [`eslint-import-resolver-typescript`](https://github.com/alexgorbatchev/eslint-import-resolver-typescript) as project dependency.**

```
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript --save-dev
```

Rules for [TypeScript](https://www.typescriptlang.org/).

```js
{
    "extends": [
        "peerigon",
        "peerigon/typescript",
        // Arrow functions are preferred with TypeScript
        // See https://github.com/peerigon/eslint-config-peerigon/issues/23#issuecomment-472614432
        "peerigon/styles/prefer-arrow",
    ],
    "root": true
}
```

You need to add `--ext js,ts,tsx` to the `lint` script:

```js
{
    "scripts": {
        "lint": "eslint ./src ./test --ext js,ts,tsx"
    }
}
```

*We recommend using [`peerigon/styles/prefer-arrow`](#peerigonstylesprefer-arrow) because arrow functions (or function expressions in general) can leverage [TypeScript's contextual typing](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing).*

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
        "peerigon/flowtype"
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
{
    "extends": [
        "peerigon",
        "peerigon/styles/prefer-arrow"
    ],
    "root": true
}
```

### [`peerigon/styles/prefer-interface`](styles/prefer-interface.js)

**Important: Use it in combination with [`peerigon/typescript`](typescript.js).**

[Prefer `interface` over `type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md).

```js
{
    "extends": [
        "peerigon",
        "peerigon/typescript",
        "peerigon/styles/prefer-interface"
    ],
    "root": true
}
```

### [`peerigon/styles/react-jsx-allow-bind`](styles/react-jsx-allow-bind.js)

**Important: Use it in combination with [`peerigon/react`](react.js).**

Depending on the way you write your components, it might be ok to create functions during `render()`. Use it if you're not using things like `React.memo()` or `shouldComponentUpdate` a lot.

```js
{
    "extends": [
        "peerigon",
        "peerigon/react",
        "peerigon/styles/react-jsx-allow-bind"
    ],
    "root": true
}
```

### [`peerigon/styles/react-jsx-no-literals`](styles/react-jsx-no-literals.js)

**Important: Use it in combination with [`peerigon/react`](react.js).**

Use this style if you're using i18n. It prevents people from putting raw strings in components.

```js
{
    "extends": [
        "peerigon",
        "peerigon/react",
        "peerigon/styles/react-jsx-no-literals"
    ],
    "root": true
}
```

It disallows this:

```jsx
const Hello = <div>test</div>;
```

As an escape hatch, this is still allowed:

```jsx
const Hello = <div>{'test'}</div>;
```

## Prettier

There is a [Prettier](https://prettier.io/) config in this repository that corresponds to our linting rules as much as possible. Add a `.prettierrc` file to your repository with the following content:

```json
"eslint-config-peerigon/prettier"
```

Please note that our linting rules will complain about specific code snippets coming from Prettier. We recommend running `eslint --fix` afterwards.

## VSCode

This is our recommended VSCode configuration using the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Adjust it to the needs of your particular project:

```json
{
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "prettier.eslintIntegration": true,
    "prettier.tslintIntegration": false,
    "prettier.requireConfig": true
}
```

## License

Unlicense

## Sponsors

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://peerigon.com)
