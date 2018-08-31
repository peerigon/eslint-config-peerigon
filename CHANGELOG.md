# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="15.0.2"></a>
## [15.0.2](https://github.com/peerigon/eslint-config-peerigon/compare/v15.0.1...v15.0.2) (2018-08-31)


### Bug Fixes

* Wrong rule configurations ([#49](https://github.com/peerigon/eslint-config-peerigon/issues/49)) ([58da102](https://github.com/peerigon/eslint-config-peerigon/commit/58da102))



<a name="15.0.1"></a>
## [15.0.1](https://github.com/peerigon/eslint-config-peerigon/compare/v15.0.0...v15.0.1) (2018-08-30)


### Bug Fixes

* Disable no-empty rule in tests config ([#48](https://github.com/peerigon/eslint-config-peerigon/issues/48)) ([a1a1431](https://github.com/peerigon/eslint-config-peerigon/commit/a1a1431))



<a name="15.0.0"></a>
# [15.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v14.0.0...v15.0.0) (2018-08-29)


### Bug Fixes

* Enable singular folder names ([#46](https://github.com/peerigon/eslint-config-peerigon/issues/46)) ([166eece](https://github.com/peerigon/eslint-config-peerigon/commit/166eece))


### Features

* Enforce eol-last ([#47](https://github.com/peerigon/eslint-config-peerigon/issues/47)) ([985d474](https://github.com/peerigon/eslint-config-peerigon/commit/985d474))


### BREAKING CHANGES

* Enforce [eol-last](https://eslint.org/docs/rules/eol-last)



<a name="14.0.0"></a>
# [14.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v13.0.0...v14.0.0) (2018-08-27)


### Bug Fixes

* Add eslint-plugin-babel ([#33](https://github.com/peerigon/eslint-config-peerigon/issues/33)) ([3032b19](https://github.com/peerigon/eslint-config-peerigon/commit/3032b19))
* Disable array-func/prefer-array-from ([#35](https://github.com/peerigon/eslint-config-peerigon/issues/35)) ([69e2601](https://github.com/peerigon/eslint-config-peerigon/commit/69e2601))
* Disable react/destructuring-assignment ([#36](https://github.com/peerigon/eslint-config-peerigon/issues/36)) ([01eaced](https://github.com/peerigon/eslint-config-peerigon/commit/01eaced))
* Disable require-yield ([#37](https://github.com/peerigon/eslint-config-peerigon/issues/37)) ([8e7ceb7](https://github.com/peerigon/eslint-config-peerigon/commit/8e7ceb7))
* Fix react rules ([#43](https://github.com/peerigon/eslint-config-peerigon/issues/43)) ([47b82bb](https://github.com/peerigon/eslint-config-peerigon/commit/47b82bb)), closes [/github.com/yannickcr/eslint-plugin-react/issues/1679#issuecomment-363908562](https://github.com//github.com/yannickcr/eslint-plugin-react/issues/1679/issues/issuecomment-363908562)
* Lower the severity of some rules ([#39](https://github.com/peerigon/eslint-config-peerigon/issues/39)) ([4c4f531](https://github.com/peerigon/eslint-config-peerigon/commit/4c4f531))
* Remove eslint-plugin-security ([#38](https://github.com/peerigon/eslint-config-peerigon/issues/38)) ([e329dc0](https://github.com/peerigon/eslint-config-peerigon/commit/e329dc0))
* Replace deprecated experimentalObjectRestSpread option ([#42](https://github.com/peerigon/eslint-config-peerigon/issues/42)) ([6509fe8](https://github.com/peerigon/eslint-config-peerigon/commit/6509fe8))


### Features

* Add no-unsafe-regex plugin ([#34](https://github.com/peerigon/eslint-config-peerigon/issues/34)) ([1b17d18](https://github.com/peerigon/eslint-config-peerigon/commit/1b17d18))
* Add TypeScript rules ([#44](https://github.com/peerigon/eslint-config-peerigon/issues/44)) ([a25ec5a](https://github.com/peerigon/eslint-config-peerigon/commit/a25ec5a))
* Config new rules ([#32](https://github.com/peerigon/eslint-config-peerigon/issues/32)) ([fc9f007](https://github.com/peerigon/eslint-config-peerigon/commit/fc9f007))
* Enable arrow-parens rule ([#40](https://github.com/peerigon/eslint-config-peerigon/issues/40)) ([6ef3259](https://github.com/peerigon/eslint-config-peerigon/commit/6ef3259))
* Introduce custom style one-line arrow functions ([#41](https://github.com/peerigon/eslint-config-peerigon/issues/41)) ([3555781](https://github.com/peerigon/eslint-config-peerigon/commit/3555781))
* Update dependencies ([#31](https://github.com/peerigon/eslint-config-peerigon/issues/31)) ([0ff4147](https://github.com/peerigon/eslint-config-peerigon/commit/0ff4147))


### BREAKING CHANGES

* * Switch back to jsx and tsx extension
* Switch to multiline-multiprop in react/jsx-first-prop-new-line
* Arrow functions shouldn't have parenthesis around
a single argument
* The new rule can break tests
* jsdoc/no-undefined-types and jsdoc/valid-types are errors
now. This could break tests.
* Update peer dependency on eslint to ^5.4.0



<a name="13.0.0"></a>
# [13.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v12.0.1...v13.0.0) (2018-04-27)


### Features

* Add eslint-plugin-flowtype-errors ([fc15db3](https://github.com/peerigon/eslint-config-peerigon/commit/fc15db3))
* Add eslint-plugin-jsx-a11y to react rules ([7d8dbdc](https://github.com/peerigon/eslint-config-peerigon/commit/7d8dbdc))
* Add useful eslint plugins to base rules ([caf6088](https://github.com/peerigon/eslint-config-peerigon/commit/caf6088))
* Allow nested ternaries ([15107ac](https://github.com/peerigon/eslint-config-peerigon/commit/15107ac))
* Allow possibly undefined variables in typeof checks ([1e657c3](https://github.com/peerigon/eslint-config-peerigon/commit/1e657c3))
* Configure new rules ([273e139](https://github.com/peerigon/eslint-config-peerigon/commit/273e139))
* Enforce multiline ternary for long expressions ([92031d2](https://github.com/peerigon/eslint-config-peerigon/commit/92031d2))
* Make file extensions mandatory in imports ([6ea3964](https://github.com/peerigon/eslint-config-peerigon/commit/6ea3964))
* Refactor import rules ([53f41d4](https://github.com/peerigon/eslint-config-peerigon/commit/53f41d4))
* Refactor node rules ([8a4e2b5](https://github.com/peerigon/eslint-config-peerigon/commit/8a4e2b5))
* Refactor react rules ([9994d2b](https://github.com/peerigon/eslint-config-peerigon/commit/9994d2b))
* Refactor react/jsx-wrap-multilines rules ([efe8ebd](https://github.com/peerigon/eslint-config-peerigon/commit/efe8ebd))
* Refactor tests rules ([820124f](https://github.com/peerigon/eslint-config-peerigon/commit/820124f))
* Remove curly and bracket spacings ([4ff321c](https://github.com/peerigon/eslint-config-peerigon/commit/4ff321c))
* Remove eslint-plugin-flowtype-error again ([13bbca7](https://github.com/peerigon/eslint-config-peerigon/commit/13bbca7))
* Remove fp rules ([34543bc](https://github.com/peerigon/eslint-config-peerigon/commit/34543bc))
* Switch back to babel-eslint again ([f3ba862](https://github.com/peerigon/eslint-config-peerigon/commit/f3ba862))
* Switch back to eslint default parser ([#18](https://github.com/peerigon/eslint-config-peerigon/issues/18)) ([5ab10a8](https://github.com/peerigon/eslint-config-peerigon/commit/5ab10a8))
* Update peerigon/node to match node >= 6 ([c8ff737](https://github.com/peerigon/eslint-config-peerigon/commit/c8ff737))


### BREAKING CHANGES

* If you're using Flowtype and the flowtype rules,
you just need to call ESLint now to also do the typechecking.
* You need to add babel-eslint as project dependencies in project where the peerigon/flowtype rules are used. You don't need to change anything if you're using other rules.
* These plugins introduce new rules that might
cause linting errors now.
* - Add autofixable order of imports
- Discourage anonymous default exports
* Changes a lot of rules that are concerned with
whitespace after curlies and brackets. For consistency reasons,
we do not write spaces after these characters.
* Always add new line before multiline wraps. This change
was necessary because of the new react/jsx-closing-tag-location
which requires the closing tag to be on the same indentation as the
opening tag. In combination with the parentheses rule, it could lead
to an unstable state where eslint was trying to fix it
by switching back and forth between two states.
* This change adds a lot of new rules which
help us to improve the accessibility of our applications.
* There are new rules that might cause errors now.
* The padded-blocks rule has been activated for tests again.
* The fp rules where part of an experiment.
These overly strict rules don't make sense in JavaScript.
* Remove node 4 support
* - "import/extensions": ["error", "ignorePackages"],
* - "multiline-ternary": ["error", "always-multiline"]
* - import/no-self-import error
- import/no-useless-path-segments error
* A lof of rules have changed, expect some new errors.



<a name="12.0.1"></a>
## [12.0.1](https://github.com/peerigon/eslint-config-peerigon/compare/v12.0.0...v12.0.1) (2017-10-26)



<a name="12.0.0"></a>
# [12.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v11.3.1...v12.0.0) (2017-10-26)


### Chores

* Update eslint peer dependency ([b0c3e28](https://github.com/peerigon/eslint-config-peerigon/commit/b0c3e28))


### Features

* Update rules ([#14](https://github.com/peerigon/eslint-config-peerigon/issues/14)) ([47edb7e](https://github.com/peerigon/eslint-config-peerigon/commit/47edb7e))


### BREAKING CHANGES

* The eslint-config-peerigon now requires at least eslint@^4.9.0
* There have been new rules added which might break your build. But they should be auto-fixable 🖖 



<a name="11.3.1"></a>
## [11.3.1](https://github.com/peerigon/eslint-config-peerigon/compare/v11.3.0...v11.3.1) (2017-06-25)


### Bug Fixes

* Switch off react/no-set-state ([f4139d4](https://github.com/peerigon/eslint-config-peerigon/commit/f4139d4))



<a name="11.3.0"></a>
# [11.3.0](https://github.com/peerigon/eslint-config-peerigon/compare/v11.2.0...v11.3.0) (2017-06-23)


### Features

* Relax class-methods-use-this to warn because it should be a hint ([9af3645](https://github.com/peerigon/eslint-config-peerigon/commit/9af3645))
* Relax react rules ([a026414](https://github.com/peerigon/eslint-config-peerigon/commit/a026414))



<a name="11.2.0"></a>
# [11.2.0](https://github.com/peerigon/eslint-config-peerigon/compare/v11.1.0...v11.2.0) (2017-06-22)


### Features

* Relax no-extraneous-dependencies rule ([50710b5](https://github.com/peerigon/eslint-config-peerigon/commit/50710b5))



<a name="11.1.0"></a>
# [11.1.0](https://github.com/peerigon/eslint-config-peerigon/compare/v11.0.1...v11.1.0) (2017-06-22)


### Features

* Relax import/no-extraneous-dependencies rule ([4c26ba0](https://github.com/peerigon/eslint-config-peerigon/commit/4c26ba0))



<a name="11.0.1"></a>
## [11.0.1](https://github.com/peerigon/eslint-config-peerigon/compare/v11.0.0...v11.0.1) (2017-06-22)


### Bug Fixes

* Missing plugin declaration in react rules ([3a39340](https://github.com/peerigon/eslint-config-peerigon/commit/3a39340))



<a name="11.0.0"></a>
# [11.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v10.1.1...v11.0.0) (2017-06-22)


### Chores

* Remove eslint-plugin-flowtype ([e99537a](https://github.com/peerigon/eslint-config-peerigon/commit/e99537a))


### BREAKING CHANGES

* This commit removes eslint-plugin-flowtype from the package.json. In case you're using the flowtype config, you need to add eslint-plugin-flowtype to your package.json now.



<a name="10.1.1"></a>
## [10.1.1](https://github.com/peerigon/eslint-config-peerigon/compare/v10.1.0...v10.1.1) (2017-04-03)


### Bug Fixes

* Turn off "prefer-rest" in node rules ([b0af121](https://github.com/peerigon/eslint-config-peerigon/commit/b0af121))



<a name="10.1.0"></a>
# [10.1.0](https://github.com/peerigon/eslint-config-peerigon/compare/v10.0.0...v10.1.0) (2017-04-03)


### Features

* Remove no-confusing-arrow rule ([bb20a58](https://github.com/peerigon/eslint-config-peerigon/commit/bb20a58))



<a name="10.0.0"></a>
# [10.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v9.0.0...v10.0.0) (2017-03-31)


### Features

* Refactor rules ([691bfb2](https://github.com/peerigon/eslint-config-peerigon/commit/691bfb2))


### BREAKING CHANGES

* This version introduces also some breaking changes:

- Switch "no-alert" to "error" (a831ed4fc3b17d4a932745cdda7f31cbc00e955d)
- Switch "no-bitwise" to "error" (e8f38b6289c6b3ae7d17dc35a445b1837143c4bd)
- Switch "no-eq-null" to "error" (329ae4bbaf5b4fd732f899bd89cd8f152b7ac1e2)
- Switch "no-process-exit" to "error" (850275f029ea37c85c7e766f8d976a38ea89dce3)
- Switch "no-script-url" to "error" (5b10357db3fe6f836858066c44e740956ad3df61)
- Switch "no-useless-call" to "error" (66ab5190f01d27d81c5d0654c303f77466c37d47)
- Switch "no-script-url" to "error" (5b10357db3fe6f836858066c44e740956ad3df61)
- Add dangling commas (356adb84c3d7c9ba937c4248a38e1d1cc6ba46df)
- Add a bunch of new rules (bf343f51cba2ae93bc38dff541122705776b2259)
- Make "no-undef" rule stricter (6ae63b3b83925ebdbcb1586f3292ef9cb93d8dc9)



### 9.0.0
- **Breaking:** Enforce template-curly-spacing (see a3409a3613a58e002921db8cb54db0550fbfa56d)

### 8.0.0
- **Breaking:** Add/change react rules based on discussion in [#5](https://github.com/peerigon/eslint-config-peerigon/issues/5)
- **Breaking:** Add rule to prevent curly spaces in template strings (see c600bd8b71094ee972b933762d646faef091376d)

### 7.0.0
- Add new react rules

### 6.0.1
- Fix parser silently switching back to es2015 when using the es5 rules

### 6.0.0
- Update peer dependency eslint to ^3.0.0

### 5.1.0
- Increase allowed max complexity

### 5.0.0
- **Breaking:** Make eslint-plugin-jsdoc ^2.3.1 a peer dependency
- Add config for eslint-plugin-react

### 4.0.0
- **Breaking:** Improve JSDoc validation (some rules are a bit stricter now)

### 3.1.1
- Fix parser options for es6 and es5

### 3.1.0
- Change severity of "arrow-parens" rule to 0

### 3.0.0
- **Breaking:** Add rule "no-labels" with severity 2
- Update to eslint@^2.0.0
- Remove obsolete rules

### 2.0.0
- **Breaking:** Change rule "quote-props" to "as-needed"
- Add mocha env to tests config

### 1.0.0
- Add ES2015 rules
- Reached stable state :)
