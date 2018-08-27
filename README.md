# eslint-config-peerigon

**[Peerigon](https://peerigon.com/) coding rules as [ESLint](http://eslint.org/) config.**

[![](https://img.shields.io/npm/v/eslint-config-peerigon.svg)](https://www.npmjs.com/package/eslint-config-peerigon)
[![](https://img.shields.io/npm/dm/eslint-config-peerigon.svg)](https://www.npmjs.com/package/eslint-config-peerigon)
[![Dependency Status](https://david-dm.org/peerigon/eslint-config-peerigon.svg)](https://david-dm.org/peerigon/eslint-config-peerigon?branch=master)

These rules are intentionally strict about formatting or whitespace issues. You should use an editor configuration where you can apply autofixes (`eslint --fix`) on demand (for instance when saving the file). The goal of these rules is to achieve a consistent coding style while avoiding common pitfalls.

## Provided configs

### [`peerigon`](base.js)

**Base rules for every project. You should always add these rules.**

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

The base rules use the `eslint-plugin-import` to resolve imports. Although it's possible to define [custom resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers), it's highly discouraged to deviate from the common Node/webpack resolving algorithm. Other tools like linters and intellisense don't work reliably when you change the resolver.

---

### [`peerigon/tests`](tests.js)

Special rules for tests, like allowing deeper function nesting and function inlining.
Create a `.eslintrc.json` file inside your `test` folder with these contents:

```js
{
    "extends": [
        "peerigon/tests"
    ]
}
```

Do not add `"root": true` here since we want to *extend* our project config.

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

**Important: Requires [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) and [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) as project dependency.**

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

### [`peerigon/typescript`](typescript.js)

**Important: Requires [`typescript-eslint-parser`](https://github.com/babel/typescript-eslint-parser) and [`eslint-plugin-typescript`](https://github.com/nzakas/eslint-plugin-typescript) as project dependency.**

Rules for [TypeScript](https://www.typescriptlang.org/).

```js
{
    "extends": [
        "peerigon",
        "peerigon/typescript"
    ],
    "root": true
}
```

### [`peerigon/flowtype`](flowtype.js)

**Important: Requires [`babel-eslint`](https://github.com/babel/babel-eslint) and [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype) as project dependency.**

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

## Goals

Coding rules and coding conventions are always a hot topic because they tend to be subjective.
But for the benefit of all team members, it's reasonable to have common rules among projects.

We judge our rules by these features, ordered by priority:

1. Ease of reading
2. Ease of refactoring
3. Ease of writing

Because,<br>
we read code more often then we change it and<br>
we change core more often then we write it.

---

Since the "ease of reading" tends to be subjective again, we should stick to well-known typography rules:

### Avoid long lines

```
This line is hard to follow because it's long. The human eye is not used to follow a straight line for so long that's why it feels more comfortable to have some line breaks between them.
```

### Avoid unbalanced lines

```
The following two lines look a little bit strange because the first one has a lot of text and is very long while the second
is short.
```

### Use horizontal whitespace

```
this=is+hard-to;read-because/we,can't,distinguish&tokens
andLongVariableNamesAreHardToReadBecauseCamelCaseHasNoWhitespace
```

### Don't use too much vertical whitespace

```
This is a line with some text in it, and after that


There is


another


blank


line and than

another blank link and again
```

### Avoid unnecessary characters

```
(yes) = {we: (are)}, (programmersWhoAreUsedToReadThis - but);

this = is ? nicer : to(read);
```

### Repeat familiar patterns and stay consistent

```
it =is distracting  {to :use } { whitespaces}= inconsistently .
```

---

We should also take into account that code is different than regular paragraphs of text. That's why there are also other concerns, like the following:

### A change should be as atomic as possible

That's why this change:

```javascript
let a = 1;                   let a = 1;
let bb = 2;     change to    const bb = 2;
let ccc = 3;                 let ccc = 3;

// only line 2 has been changed
```

is better than that change:

```javascript
let a   = 1,                 let   a   = 1,
    bbb = 2,    change to          cc  = 3;
    cc  = 3;                 const bbb = 3;

// all three lines have been changed
```

If you don't have to change a lot of lines, refactoring is more fun. As a nice side-effect, `git diff` also becomes more readable.

## Recommendations

### Disabling rules

Sometimes, there is a legitimate use-case to disable a specific rule. You can disable a rule for the current line like this

```js
// eslint-disable-line rule-code
```

where `rule-code` is the code that is displayed along the error message.

In rare cases, it makes sense to disable a rule for the whole project. For instance, if you work with JSON data coming from a foreign API that uses underscore property names.

If you don't agree with a rule, please do not disable the rule. It's better to create an issue here to start a discussion about the pros and cons of a rule.

### Should I apply `--fix` as part of my `posttest` script?

**No**. Because this way, eslint won't report all linting errors on Travis CI. Thus, a PR could contain linting errors without Travis CI complaining about it.

## License

Unlicense

## Sponsors

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://peerigon.com)
