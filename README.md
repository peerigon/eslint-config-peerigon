eslint-config-peerigon
======================
**[Peerigon](https://peerigon.com/) coding rules as [eslint](http://eslint.org/) config.**

[![](https://img.shields.io/npm/v/eslint-config-peerigon.svg)](https://www.npmjs.com/package/eslint-config-peerigon)
[![](https://img.shields.io/npm/dm/eslint-config-peerigon.svg)](https://www.npmjs.com/package/eslint-config-peerigon)
[![Dependency Status](https://david-dm.org/peerigon/eslint-config-peerigon.svg)](https://david-dm.org/peerigon/eslint-config-peerigon?branch=master)

Provided configs
------------------------------------------------------------------------

### [`peerigon`](base.js)

**Base rules for every project. You should always add these rules.**

These rules assume a modern project with full ES2015 support and a module system with a node.js-like resolving behavior (like node.js and webpack). For special rules, which extend these base rules for older environments, see below.

The base rules do not define an `env`, so you might want to do that for yourself to enable specific globals.

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

In case you changed the resolving behavior, you can use the [resolvers option](https://github.com/benmosher/eslint-plugin-import#resolvers) of the `eslint-plugin-import`. For instance, if you're using webpack, you need to install the [`eslint-import-resolver-webpack`](https://www.npmjs.com/package/eslint-import-resolver-webpack) module and tell the plugin the location of your `webpack.config.js` like this:

```js
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "config/webpack.config.js"
            }
        }
    },
```

You don't need to do that if you stick to node's/webpack's default resolver.

---

### [`peerigon/tests`](tests.js)

Special rules for tests, like allowing deeper function nesting and function inlining.
Create a `.eslintrc` file inside your `test` folder with these contents:

```js
{
    "extends": [
        "peerigon/tests"
    ]
}
```

Do not add `"root": true` here since we want to *extend* our project config.

### [`peerigon/node`](node.js)

Special rules for node.js >= 4.0.0 environments. Use these rules if you do not
want to transpile your code with babel:

```js
{
    "extends": [
        // Base rules with full ES2015 support
        "peerigon",
        // Legacy rules for node
        "peerigon/node"
    ],
    // Setting env.node = true is not necessary, this is already done by peerigon/node
    "root": true
}
```

### [`peerigon/react`](react.js)

**Requires [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) to be installed as project dependency.**

Rules for [React](https://facebook.github.io/react/) development.
Also applicable in other JSX environments, like [Preact](https://github.com/developit/preact):

```js
{
    "extends": [
        "peerigon",
        "peerigon/react"
    ],
    "root": true
}
```

### [`peerigon/flowtype`](flowtype.js)

**Requires [`babel-eslint`](https://github.com/babel/babel-eslint) and [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype) to be installed as project dependency.**

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

### [`peerigon/fp`](fp.js)

Rules if you want to enforce a functional programming style in your project.

These rules are changed:

- Use `const` arrow function expressions everywhere
- The `function` keyword is only allowed in two cases:
    - If you're using a generator
    - If you need to capture `this`. Just use a function expression in this case and name your function `captureThis`, and the error will be gone.
- Functions with side-effects (= if you do not use the return value) need to be prefixed with `void`. In functional programming, pure functions are always preferred. That's why you need to do function calls with side-effects explicitly.
- `for` and `while` loops are not allowed, use `forEach`, `map`, `reduce`, ...
- A function with more than 10 statements is marked with a warning. If you need more statements, try to split that function into multiple functions.

If you are using these rules, also consider using Flowtype since both are a perfect fit. However, it is not required.

Example:

```js
export default (
    originalSetup?: OriginalSetup
): OriginalSetup => function captureThis(
    app: ExpressApp,
    ...args
): DevServerSetupResult {
    void app.use(pauseMiddleware);

    if (typeof originalSetup === "function") {
        return originalSetup.call(this, app, ...args); // eslint-disable-line no-invalid-this
    }

    return undefined;
};
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

Goals
------------------------------------------------------------------------
Coding rules and coding conventions are always a hot topic because they tend to be subjective.
But for the benefit of all team members, it's reasonable to have common rules among projects.

In order to make good decisions, we judge our rules by these features, ordered by priority:

1. Ease of reading
2. Ease of refactoring
3. Ease of writing

Because,<br>
code is read more often than it's changed and<br>
code is changed more often than it's written.

---

Since the "ease of reading" tends to be very subjective again, we should stick to well-known typography rules:

### Avoid long lines

```
This line is very hard to follow because it is very long. The human eye is not used to follow a straight line for so long that's why it feels more comfortable to have some line breaks in between
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

Recommendations
------------------------------------------------------------------------

### Disabling rules

Sometimes, there is a legitimate use-case to disable a specific rule. You can disable a rule for the current line like this

```js
// eslint-disable-line rule-code
```

where `rule-code` is the code that is displayed along the error message.

In rare cases, it makes sense to disable a rule for the whole project. For instance, if you work with JSON data coming from a foreign API that uses underscore property names.

If you don't agree with a rule, please do not just disable the rule. It's better to create an issue here in order to discuss the pros and cons of a rule.

### Should I apply `--fix` as part of my `posttest` script?

**No**. Because this way, eslint won't report all linting errors on Travis CI. Thus, a PR could contain linting errors without Travis CI complaining about it.

License
------------------------------------------------------------------------

Unlicense

Sponsors
------------------------------------------------------------------------

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://peerigon.com)
