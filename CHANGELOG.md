# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
