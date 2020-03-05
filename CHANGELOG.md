# [27.2.0](https://github.com/peerigon/eslint-config-peerigon/compare/v27.1.3...v27.2.0) (2020-03-05)


### Bug Fixes

* Disable "no-anonymous-default-exports" rule in tests ([#82](https://github.com/peerigon/eslint-config-peerigon/issues/82)) ([01f4cd4](https://github.com/peerigon/eslint-config-peerigon/commit/01f4cd48a1feb811ddd4c33b853e9736a20d350a))


### Features

* Add prefer array shorthand style option ([#81](https://github.com/peerigon/eslint-config-peerigon/issues/81)) ([fb9f50a](https://github.com/peerigon/eslint-config-peerigon/commit/fb9f50aa7f69cd74306b784fb30f3750dfccb818))

## [27.1.3](https://github.com/peerigon/eslint-config-peerigon/compare/v27.1.2...v27.1.3) (2020-02-13)


### Bug Fixes

* **base:** Relax some promise rules ([8b357e1](https://github.com/peerigon/eslint-config-peerigon/commit/8b357e1a16f583ba68a980ef27666ab18bcba599))
* **react:** Fix minor issue when using styles/react-jsx-no-literals ([049cac6](https://github.com/peerigon/eslint-config-peerigon/commit/049cac6997c59f6c093b750700cb72e636c0f7e1))
* **typescript:** Disable @typescript-eslint/restrict-template-expressions ([efbb8b3](https://github.com/peerigon/eslint-config-peerigon/commit/efbb8b3728aad709b0a9d3f3461de369cf0bd8c6))

## [27.1.2](https://github.com/peerigon/eslint-config-peerigon/compare/v27.1.1...v27.1.2) (2020-02-13)


### Bug Fixes

* **typescript:** Disable @typescript-eslint/require-array-sort-compare ([e6ac2e1](https://github.com/peerigon/eslint-config-peerigon/commit/e6ac2e1b9015504ba3dd3dcf79cb8234fbbe7a5c))

## [27.1.1](https://github.com/peerigon/eslint-config-peerigon/compare/v27.1.0...v27.1.1) (2020-02-13)


### Bug Fixes

* **react:** Fix problem with escape hatch in styles/react-jsx-no-literals ([993568b](https://github.com/peerigon/eslint-config-peerigon/commit/993568b6884b068407e01443d8551be4467dc8d6))

# [27.1.0](https://github.com/peerigon/eslint-config-peerigon/compare/v27.0.1...v27.1.0) (2020-02-13)


### Features

* **typescript:** Disable no-extraneous-class ([c4f49eb](https://github.com/peerigon/eslint-config-peerigon/commit/c4f49eb6a8b752322adb299b568d28526087ae0d))
* Allow exceptions for naming conventions in TypeScript projects ([89de83b](https://github.com/peerigon/eslint-config-peerigon/commit/89de83bc54a1809de6e0a0ec7bb20cc3e0a41067))

## [27.0.1](https://github.com/peerigon/eslint-config-peerigon/compare/v27.0.0...v27.0.1) (2020-02-12)


### Bug Fixes

* Add new example `.editorconfig` ([5891b4c](https://github.com/peerigon/eslint-config-peerigon/commit/5891b4c78b2a0007d393dd3490d350c4d8c700a5))

# [27.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v26.0.0...v27.0.0) (2020-02-12)


### Bug Fixes

* **typescript:** Do not set tsconfig.json by default ([6b35fd4](https://github.com/peerigon/eslint-config-peerigon/commit/6b35fd420d98ae9b6837fabdb5c88d13ec1254fa))


### BREAKING CHANGES

* **typescript:** We don't set the tsconfig.json now by default. Every project needs to specify it explicitly. This prevents some bugs that would be otherwise hard to understand. We also added a note to the README which should help people to set it up.

# [26.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v25.3.1...v26.0.0) (2020-02-12)


### Bug Fixes

* Remove impractical rules ([56c62a2](https://github.com/peerigon/eslint-config-peerigon/commit/56c62a26a112924548d11237ed9ae4c7d5411b9c))
* **base:** Disable require-atomic-updates ([38cd859](https://github.com/peerigon/eslint-config-peerigon/commit/38cd859fcf112c13469fba95822549d9808e1ae0))
* **base:** Improve padding-line-between-statements ([4b3c394](https://github.com/peerigon/eslint-config-peerigon/commit/4b3c39469b76094ff3557ac8fdde5634b49360b5))
* **base:** Increase soft limit of complexity rule ([a78a702](https://github.com/peerigon/eslint-config-peerigon/commit/a78a702f5b5d16ff9b11237ee9c059618f80eb32))
* **base:** Temporarily disable require-unicode-regexp ([b248df7](https://github.com/peerigon/eslint-config-peerigon/commit/b248df7736fd7a4ccf7914a418c46cd533ec052a))
* **typescript:** Allow _ parameter names ([c0b3779](https://github.com/peerigon/eslint-config-peerigon/commit/c0b37797012dbea18efa45c6989ec78bfe694f99))
* **typescript:** Only require return await inside try-catch ([709751f](https://github.com/peerigon/eslint-config-peerigon/commit/709751fa7b49c507c2a8112d8625710bc71510a6))
* **typescript:** Switch to regular camelCase and PascalCase naming convention ([182c295](https://github.com/peerigon/eslint-config-peerigon/commit/182c29553f8c021c776d66dbd15dbe9f09c91e3e))
* Disable no-return-await ([14db3eb](https://github.com/peerigon/eslint-config-peerigon/commit/14db3eb268b4ffd1923958fb1952248ae77dbbec))
* Fine-tune soft limits of max-lines and max-dependencies ([a123f41](https://github.com/peerigon/eslint-config-peerigon/commit/a123f41676aad7b3d56ff35512774fd4860093d9))


### chore

* Refactor glob-patterns module ([1db1f22](https://github.com/peerigon/eslint-config-peerigon/commit/1db1f22dedf8a9d1c6cc7342391f3774288e93dc))
* Remove support for Node<10 ([6c45b41](https://github.com/peerigon/eslint-config-peerigon/commit/6c45b41233bdc381bbc9916193cf3b07914fc8bb))
* Update dependencies ([b52305e](https://github.com/peerigon/eslint-config-peerigon/commit/b52305ee79c201371d876e58d57a1163ec568ed4))


### Features

* **react:** Allow functions created during render ([8c80148](https://github.com/peerigon/eslint-config-peerigon/commit/8c80148b27465fc896de2fdee9091a3ddcd9f736))
* Lower severity of opinionated rules ([c0bea51](https://github.com/peerigon/eslint-config-peerigon/commit/c0bea5118cc6577d2f33bd40d93be1d94e0edce6))
* **typescript:** Add new TypeScript rules ([9e77b24](https://github.com/peerigon/eslint-config-peerigon/commit/9e77b24ef7ff906c8a7259ba9b33ebb434dc45e7))
* **typescript:** Disable @typescript-eslint/explicit-module-boundary-types again ([a88a683](https://github.com/peerigon/eslint-config-peerigon/commit/a88a6833367c45a85a8497fa207f4395c82fe736))
* **typescript:** Enforce naming convention ([1fb0844](https://github.com/peerigon/eslint-config-peerigon/commit/1fb0844068673f22e6c2bcccb86852b10bb2aa8f))
* **typescript:** Improve TypeScript support in base ESLint rules ([6763671](https://github.com/peerigon/eslint-config-peerigon/commit/6763671c22c9d5512f53294e33fcbc838fd12012))
* Add @typescript-eslint/explicit-module-boundary-types ([3f106a0](https://github.com/peerigon/eslint-config-peerigon/commit/3f106a050bbfa2a3466fe985e1bd810856afb0b0))
* Add bunch of JSDoc rules ([680550e](https://github.com/peerigon/eslint-config-peerigon/commit/680550e6415658081bebc89fd834081fecc61f96))
* Add styles/no-default-export ([d8b0242](https://github.com/peerigon/eslint-config-peerigon/commit/d8b0242069d326e12c3dfb7247867c5dfd336d49))
* Add styles/no-null ([a30511b](https://github.com/peerigon/eslint-config-peerigon/commit/a30511b1ea55dc8081375ffe0de245f34cc54e79))
* Disable some jsdoc rules when using TypeScript ([82220fa](https://github.com/peerigon/eslint-config-peerigon/commit/82220fa862bcb2d3298a1c076b7a7c50b2794491))
* Improve jsdoc rules ([0a6694d](https://github.com/peerigon/eslint-config-peerigon/commit/0a6694d061e4553ebde0653322b7567a69956e44))
* Improve prettier support ([1cd6537](https://github.com/peerigon/eslint-config-peerigon/commit/1cd6537aa59fd53e9b3f40caa1f72b52a4a8dddf))
* **base:** Add no-dupe-else-if ([0ee8136](https://github.com/peerigon/eslint-config-peerigon/commit/0ee8136bbff0e53d08def5bc818054b29bea097b))
* **base:** Add prefer-exponentiation-operator ([fd41a01](https://github.com/peerigon/eslint-config-peerigon/commit/fd41a01e0692670375d43009f45704b02d02c1c3))
* **base:** Add prefer-regex-literals ([01599bd](https://github.com/peerigon/eslint-config-peerigon/commit/01599bda47b1197fca321780a644c6a5693a54af))
* **base:** Add require-atomic-updates ([69f2c36](https://github.com/peerigon/eslint-config-peerigon/commit/69f2c36d0d9b57d32a98f617c33cc407423b2904))
* **base:** Add require-unicode-regexp ([0b44ba5](https://github.com/peerigon/eslint-config-peerigon/commit/0b44ba50add0a1a8b378c8f311000c2558fe3f54))
* **base:** Disallow assignments of imports ([0e6af86](https://github.com/peerigon/eslint-config-peerigon/commit/0e6af861370cd95bbff8dc0f96c112cb3a26ba83))
* **base:** Disallow return in constructors ([f9edbbc](https://github.com/peerigon/eslint-config-peerigon/commit/f9edbbcce36703d644b9ada2315e5be310ae7102))
* **base:** Disallow return in setters ([f3f574c](https://github.com/peerigon/eslint-config-peerigon/commit/f3f574cfcff59a8e65efda84658a746246720e3d))
* **base:** Require grouping of setters and getters ([94792f2](https://github.com/peerigon/eslint-config-peerigon/commit/94792f2a8ab22bb777fa70ba09ef96ecefee0e38))


### BREAKING CHANGES

* **react:** The default style now is to allow functions created during render. The style peerigon/styles/react-jsx-allow-bind has been removed and replaced by its opposite peerigon/styles/react-jsx-no-bind for applications that use memo a lot.

The motivation behind this is that it's more convenient for a lot of people to create functions during render. The performance downside is usually not an issue and can be mitigated by better usage of useState().
* **typescript:** There are new rules for TypeScript code:
- [no-dynamic-delete](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md)
- [no-extra-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md)
- [no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)
- [no-non-null-asserted-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md)
- [no-unnecessary-condition](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)
- [prefer-as-con](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md)
- [prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)
- [prefer-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)
- [restrict-template-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
- [return-await](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md)
- [switch-exhaustiveness-check](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md)
* **typescript:** The new rule enforces the consistent use of camelCase, PascalCase and UPPER_CASE for variable, property and member names. Additionally, only PascalCase is allowed for type-like structures.
* Exported functions now need to specify an explicit return type. This enforces everyone to be explicit about the public interface of the module. This is likely to increase the developer experience because type errors will show up closer to the actual error.
* Use param instead of arg and argument.
* The prettier config now uses tabs instead of spaces. This is not actually breaking since Prettier will just format your code in a different way, but it will produce a lot of noise.
* globPatterns.js has been renamed to glob-patterns.js
* **base:** Require u flag in all regexes. The u flag adds unicode support and reports invalid regex patterns.
* **base:** ESLint now reports a potential unsafe use of +=,-=,*=,/= in combination with async await
* **base:** Regex literals are now preferred over new RegExp() if the regex is not dynamic.
* **base:** The exponentiation operator is now preferred over Math.pow()
* Support for Node versions below 10 has been removed.
* **base:** Setters can't return values. This is enforced with a linting rule now. See https://eslint.org/docs/rules/no-setter-return
* **base:** Assignments of imports are now disallowed. They throw a runtime error anyway. See https://eslint.org/docs/rules/no-import-assign
* **base:** Certain If-else usages that were an error anyway are now a linting error. See ttps://eslint.org/docs/rules/no-dupe-else-if
* **base:** Returning values from constructors is not allowed anymore. See https://eslint.org/docs/rules/no-constructor-return
* **base:** Setters and getters now need to be grouped together. See https://eslint.org/docs/rules/grouped-accessor-pairs
* Remove official ESLint 5 support

# [26.0.0-beta.3](https://github.com/peerigon/eslint-config-peerigon/compare/v26.0.0-beta.2...v26.0.0-beta.3) (2020-02-06)


### Features

* Disable some jsdoc rules when using TypeScript ([82220fa](https://github.com/peerigon/eslint-config-peerigon/commit/82220fa862bcb2d3298a1c076b7a7c50b2794491))

# [26.0.0-beta.2](https://github.com/peerigon/eslint-config-peerigon/compare/v26.0.0-beta.1...v26.0.0-beta.2) (2020-02-06)


### Features

* Improve jsdoc rules ([0a6694d](https://github.com/peerigon/eslint-config-peerigon/commit/0a6694d061e4553ebde0653322b7567a69956e44))


### BREAKING CHANGES

* Use param instead of arg and argument.

# [26.0.0-beta.1](https://github.com/peerigon/eslint-config-peerigon/compare/v25.3.0...v26.0.0-beta.1) (2020-02-06)


### Bug Fixes

* **base:** Increase soft limit of complexity rule ([a78a702](https://github.com/peerigon/eslint-config-peerigon/commit/a78a702f5b5d16ff9b11237ee9c059618f80eb32))
* Fine-tune soft limits of max-lines and max-dependencies ([a123f41](https://github.com/peerigon/eslint-config-peerigon/commit/a123f41676aad7b3d56ff35512774fd4860093d9))
* **typescript:** Do not "fix" 'any' to 'unknown' ([154a42b](https://github.com/peerigon/eslint-config-peerigon/commit/154a42b1de215ffa763f7da32a66588695d5dad0))


### chore

* Refactor glob-patterns module ([1db1f22](https://github.com/peerigon/eslint-config-peerigon/commit/1db1f22dedf8a9d1c6cc7342391f3774288e93dc))
* Remove support for Node<10 ([6c45b41](https://github.com/peerigon/eslint-config-peerigon/commit/6c45b41233bdc381bbc9916193cf3b07914fc8bb))
* Update dependencies ([b52305e](https://github.com/peerigon/eslint-config-peerigon/commit/b52305ee79c201371d876e58d57a1163ec568ed4))


### Features

* Add styles/no-default-export ([d8b0242](https://github.com/peerigon/eslint-config-peerigon/commit/d8b0242069d326e12c3dfb7247867c5dfd336d49))
* Add styles/no-null ([a30511b](https://github.com/peerigon/eslint-config-peerigon/commit/a30511b1ea55dc8081375ffe0de245f34cc54e79))
* Improve prettier support ([1cd6537](https://github.com/peerigon/eslint-config-peerigon/commit/1cd6537aa59fd53e9b3f40caa1f72b52a4a8dddf))
* **base:** Add no-dupe-else-if ([0ee8136](https://github.com/peerigon/eslint-config-peerigon/commit/0ee8136bbff0e53d08def5bc818054b29bea097b))
* **base:** Add prefer-exponentiation-operator ([fd41a01](https://github.com/peerigon/eslint-config-peerigon/commit/fd41a01e0692670375d43009f45704b02d02c1c3))
* **base:** Add prefer-regex-literals ([01599bd](https://github.com/peerigon/eslint-config-peerigon/commit/01599bda47b1197fca321780a644c6a5693a54af))
* **base:** Add require-atomic-updates ([69f2c36](https://github.com/peerigon/eslint-config-peerigon/commit/69f2c36d0d9b57d32a98f617c33cc407423b2904))
* **base:** Add require-unicode-regexp ([0b44ba5](https://github.com/peerigon/eslint-config-peerigon/commit/0b44ba50add0a1a8b378c8f311000c2558fe3f54))
* **base:** Disallow assignments of imports ([0e6af86](https://github.com/peerigon/eslint-config-peerigon/commit/0e6af861370cd95bbff8dc0f96c112cb3a26ba83))
* **base:** Disallow return in constructors ([f9edbbc](https://github.com/peerigon/eslint-config-peerigon/commit/f9edbbcce36703d644b9ada2315e5be310ae7102))
* **base:** Disallow return in setters ([f3f574c](https://github.com/peerigon/eslint-config-peerigon/commit/f3f574cfcff59a8e65efda84658a746246720e3d))
* **base:** Require grouping of setters and getters ([94792f2](https://github.com/peerigon/eslint-config-peerigon/commit/94792f2a8ab22bb777fa70ba09ef96ecefee0e38))
* Add bunch of JSDoc rules ([680550e](https://github.com/peerigon/eslint-config-peerigon/commit/680550e6415658081bebc89fd834081fecc61f96))


### BREAKING CHANGES

* The prettier config now uses tabs instead of spaces. This is not actually breaking since Prettier will just format your code in a different way, but it will produce a lot of noise.
* globPatterns.js has been renamed to glob-patterns.js
* **base:** Require u flag in all regexes. The u flag adds unicode support and reports invalid regex patterns.
* **base:** ESLint now reports a potential unsafe use of +=,-=,*=,/= in combination with async await
* **base:** Regex literals are now preferred over new RegExp() if the regex is not dynamic.
* **base:** The exponentiation operator is now preferred over Math.pow()
* Support for Node versions below 10 has been removed.
* **base:** Setters can't return values. This is enforced with a linting rule now. See https://eslint.org/docs/rules/no-setter-return
* **base:** Assignments of imports are now disallowed. They throw a runtime error anyway. See https://eslint.org/docs/rules/no-import-assign
* **base:** Certain If-else usages that were an error anyway are now a linting error. See ttps://eslint.org/docs/rules/no-dupe-else-if
* **base:** Returning values from constructors is not allowed anymore. See https://eslint.org/docs/rules/no-constructor-return
* **base:** Setters and getters now need to be grouped together. See https://eslint.org/docs/rules/grouped-accessor-pairs
* Remove official ESLint 5 support

# [25.3.0](https://github.com/peerigon/eslint-config-peerigon/compare/v25.2.0...v25.3.0) (2020-02-01)


### Bug Fixes

* **base:** Allow finally() as a replacement for catch() ([0d2b2df](https://github.com/peerigon/eslint-config-peerigon/commit/0d2b2df))


### Features

* **base:** Relax eqeqeq ([e8f9cd6](https://github.com/peerigon/eslint-config-peerigon/commit/e8f9cd6))
* **react:** Relax react/require-default-props rule ([8be6c52](https://github.com/peerigon/eslint-config-peerigon/commit/8be6c52))
* **typescript:** Relax @typescript-eslint/strict-boolean-expressions rule ([524c462](https://github.com/peerigon/eslint-config-peerigon/commit/524c462))

# [25.2.0](https://github.com/peerigon/eslint-config-peerigon/compare/v25.1.1...v25.2.0) (2020-01-23)


### Features

* Add semantic-release ([eb3f1d4](https://github.com/peerigon/eslint-config-peerigon/commit/eb3f1d4e8f4b01377865582e4816f859c628e46f))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [25.1.1](https://github.com/peerigon/eslint-config-peerigon/compare/v25.1.0...v25.1.1) (2020-01-13)


### Bug Fixes

* Turn off no-empty-function for TypeScript ([1c8c5ac](https://github.com/peerigon/eslint-config-peerigon/commit/1c8c5ac))



## [25.1.0](https://github.com/peerigon/eslint-config-peerigon/compare/v25.0.1...v25.1.0) (2020-01-10)


### Bug Fixes

* Disable import/extensions for tsx files ([b13c7f6](https://github.com/peerigon/eslint-config-peerigon/commit/b13c7f6))


### Features

* Allow ESLint 6 as peer dependency ([e474e5e](https://github.com/peerigon/eslint-config-peerigon/commit/e474e5e))



### [25.0.1](https://github.com/peerigon/eslint-config-peerigon/compare/v25.0.0...v25.0.1) (2019-12-25)


### Bug Fixes

* Allow template literals for Jest inline snapshots ([2b9c4e5](https://github.com/peerigon/eslint-config-peerigon/commit/2b9c4e5))



## [25.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v24.0.0...v25.0.0) (2019-12-23)


### Bug Fixes

* Allow non-null assertions in test files ([240beec](https://github.com/peerigon/eslint-config-peerigon/commit/240beec))
* Do not require .ts extensions in TypeScript files ([e40ffbe](https://github.com/peerigon/eslint-config-peerigon/commit/e40ffbe))
* Turn off consistent-type-definitions in d.ts files ([1c00846](https://github.com/peerigon/eslint-config-peerigon/commit/1c00846))


### Features

* Don't allow loose equality checks ([8e065bf](https://github.com/peerigon/eslint-config-peerigon/commit/8e065bf))


### BREAKING CHANGES

* Loose equality checks are not allowed anymore.



## [24.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v23.2.0...v24.0.0) (2019-08-23)


### Features

* Update TypeScript rules ([31fbf88](https://github.com/peerigon/eslint-config-peerigon/commit/31fbf88))


### BREAKING CHANGES

* You need to update `@typescript-eslint/eslint-plugin@^2.0.0` if you're using the TypeScript rules. The recommended rules changed a little bit and there have been some breaking rule changes like `@typescript-eslint/consistent-type-assertions`, `@typescript-eslint/no-unnecessary-type-arguments` and `@typescript-eslint/strict-boolean-expressions`



## [23.2.0](https://github.com/peerigon/eslint-config-peerigon/compare/v23.1.0...v23.2.0) (2019-08-02)


### Bug Fixes

* Disable `react/jsx-no-literals` in tests ([ed93deb](https://github.com/peerigon/eslint-config-peerigon/commit/ed93deb))


### Features

* Disable `react/jsx-one-expression-per-line` ([136a945](https://github.com/peerigon/eslint-config-peerigon/commit/136a945))



## [23.1.0](https://github.com/peerigon/eslint-config-peerigon/compare/v23.0.0...v23.1.0) (2019-08-01)


### Features

* Disable `react/jsx-wrap-multilines` ([2eb57e2](https://github.com/peerigon/eslint-config-peerigon/commit/2eb57e2))



## [23.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v22.1.0...v23.0.0) (2019-08-01)


### Bug Fixes

* Add additional check for tsconfig.json resolving ([dd53d16](https://github.com/peerigon/eslint-config-peerigon/commit/dd53d16))


### Features

* Enable `@typescript-eslint/explicit-member-accessibility rule` ([f036659](https://github.com/peerigon/eslint-config-peerigon/commit/f036659))
* Relax `import/order` rule ([ae8d12a](https://github.com/peerigon/eslint-config-peerigon/commit/ae8d12a))


### BREAKING CHANGES

* The `@typescript-eslint/explicit-member-accessibility` rule will now reports errors when someone uses the public keyword in TypeScript classes where it is not necessary.



## [22.1.0](https://github.com/peerigon/eslint-config-peerigon/compare/v22.0.0...v22.1.0) (2019-07-31)


### Features

* Add Prettier config ([4d5e84e](https://github.com/peerigon/eslint-config-peerigon/commit/4d5e84e))
* Disable id-length ([a8c791b](https://github.com/peerigon/eslint-config-peerigon/commit/a8c791b))
* Relax @typescript-eslint/no-floating-promises ([ce7bf3e](https://github.com/peerigon/eslint-config-peerigon/commit/ce7bf3e))



## [22.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v21.2.0...v22.0.0) (2019-07-15)


### Bug Fixes

* Change @typescript-eslint/member-delimiter-style ([e8dda25](https://github.com/peerigon/eslint-config-peerigon/commit/e8dda25))
* Turn of react/prop-types for TypeScript files ([afe4ef5](https://github.com/peerigon/eslint-config-peerigon/commit/afe4ef5))


### Features

* Enable test rules by glob pattern ([63c023c](https://github.com/peerigon/eslint-config-peerigon/commit/63c023c))
* Recognize @testing-library/jest-dom/extend-expect as module with side-effects ([3ff10a2](https://github.com/peerigon/eslint-config-peerigon/commit/3ff10a2))
* Relax some import rules ([6efa5a3](https://github.com/peerigon/eslint-config-peerigon/commit/6efa5a3))
* Relax typescript rules in tests ([c73ee22](https://github.com/peerigon/eslint-config-peerigon/commit/c73ee22))


### BREAKING CHANGES

* Change back to @typescript-eslint/member-delimiter-style "semi" because we want to stay consistent with classes. Sorry for the noise :(



## [21.2.0](https://github.com/peerigon/eslint-config-peerigon/compare/v21.1.0...v21.2.0) (2019-07-09)


### Features

* Detect React version ([0b85c38](https://github.com/peerigon/eslint-config-peerigon/commit/0b85c38))



## [21.1.0](https://github.com/peerigon/eslint-config-peerigon/compare/v21.0.0...v21.1.0) (2019-07-09)


### Features

* Introduce peerigon/styles/react-jsx-no-literals ([8c0425f](https://github.com/peerigon/eslint-config-peerigon/commit/8c0425f))



## [21.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v20.0.1...v21.0.0) (2019-07-09)


### Features

* Add eslint-plugin-react-hooks ([6c0d0a3](https://github.com/peerigon/eslint-config-peerigon/commit/6c0d0a3))
* Add styles/react-jsx-allow-bind ([a8e4326](https://github.com/peerigon/eslint-config-peerigon/commit/a8e4326))
* Disable promise/prefer-await-to-then and promise/prefer-await-to-callbacks ([b715e44](https://github.com/peerigon/eslint-config-peerigon/commit/b715e44))
* Relax import/max-dependencies and max-lines ([f692e4b](https://github.com/peerigon/eslint-config-peerigon/commit/f692e4b))
* Relax max-lines in tests ([cd1e294](https://github.com/peerigon/eslint-config-peerigon/commit/cd1e294))
* Relax react/jsx-no-bind ([89873c3](https://github.com/peerigon/eslint-config-peerigon/commit/89873c3))
* Switch off react/no-multi-comp ([366636a](https://github.com/peerigon/eslint-config-peerigon/commit/366636a))


### BREAKING CHANGES

* There are linting rules for React hooks now.



### [20.0.1](https://github.com/peerigon/eslint-config-peerigon/compare/v20.0.0...v20.0.1) (2019-07-08)


### Bug Fixes

* Allow jsdoc [@swagger](https://github.com/swagger) tags ([b59eb2b](https://github.com/peerigon/eslint-config-peerigon/commit/b59eb2b))



## [20.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v19.0.0...v20.0.0) (2019-07-08)


### Bug Fixes

* Add note on @typescript-eslint/parser in README ([898abe3](https://github.com/peerigon/eslint-config-peerigon/commit/898abe3))
* Disable import rules that are slow ([41edcb2](https://github.com/peerigon/eslint-config-peerigon/commit/41edcb2))
* Improve options for import/no-extraneous-dependencies ([5fe07e6](https://github.com/peerigon/eslint-config-peerigon/commit/5fe07e6))
* Reuse no-unused-vars option in TypeScript ([44464ac](https://github.com/peerigon/eslint-config-peerigon/commit/44464ac))


### Features

* Ignore long comments in max-len rule ([4a8d39d](https://github.com/peerigon/eslint-config-peerigon/commit/4a8d39d))
* Increase import/max-dependencies to 20 ([f5d6c9d](https://github.com/peerigon/eslint-config-peerigon/commit/f5d6c9d))
* Refactor TypeScript rules ([302d840](https://github.com/peerigon/eslint-config-peerigon/commit/302d840))
* Update dependencies ([32914ef](https://github.com/peerigon/eslint-config-peerigon/commit/32914ef))


### BREAKING CHANGES

* Added and changed a lot of TypeScript rules. This change was necessary because a lot of new rules have been added to @typescript-eslint. Also adds some performance improvements.
* eslint-plugin-jsdoc received a major version bump
* The pattern for devDependencies checked by import/no-extraneous-dependencies has changed



## [19.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v17.1.0...v19.0.0) (2019-05-29)


### Bug Fixes

* Activate TypeScript rules only for *.tsx? files ([338d98f](https://github.com/peerigon/eslint-config-peerigon/commit/338d98f))
* Remove JS file overrides in typescript rules ([68fc6df](https://github.com/peerigon/eslint-config-peerigon/commit/68fc6df))


### chore

* Update dependencies ([b28d7a4](https://github.com/peerigon/eslint-config-peerigon/commit/b28d7a4))


### Features

* Add lines-between-class-members rule ([b0ce663](https://github.com/peerigon/eslint-config-peerigon/commit/b0ce663))
* Disable arrow-body-style and arrow-parens rule ([c50a7b4](https://github.com/peerigon/eslint-config-peerigon/commit/c50a7b4))


### BREAKING CHANGES

* eslint-plugin-jsdoc received a major version update.
* It's now required to add a new line between multiline class members.
* Remove sourceType = script parser option for JS files in
TypeScript projects. This override made the wrong
assumption that all JS files should be scripts in a
TypeScript project which is certainly not correct.



# [18.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v17.1.0...v18.0.0) (2019-05-29)


### Bug Fixes

* Remove JS file overrides in typescript rules ([ef27f23](https://github.com/peerigon/eslint-config-peerigon/commit/ef27f23))


### BREAKING CHANGES

* Remove sourceType = script parser option for JS files in
TypeScript projects. This override made the wrong
assumption that all JS files should be scripts in a
TypeScript project which is certainly not correct.



<a name="17.1.0"></a>
# [17.1.0](https://github.com/peerigon/eslint-config-peerigon/compare/v17.0.0...v17.1.0) (2019-02-22)


### Features

* Add prefer-interface style for TypeScript apps ([#58](https://github.com/peerigon/eslint-config-peerigon/issues/58)) ([529503f](https://github.com/peerigon/eslint-config-peerigon/commit/529503f))



<a name="17.0.0"></a>
# [17.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v16.0.0...v17.0.0) (2019-02-21)


### Features

* Add new rule ([#57](https://github.com/peerigon/eslint-config-peerigon/issues/57)) ([7bde0ba](https://github.com/peerigon/eslint-config-peerigon/commit/7bde0ba))


### BREAKING CHANGES

* - "optimize-regex/optimize-regex": "error"



<a name="16.0.0"></a>
## [16.0.0](https://github.com/peerigon/eslint-config-peerigon/compare/v15.0.2...v16.0.0) (2019-02-21)


### Features

* Add and refactor rules ([be86a71](https://github.com/peerigon/eslint-config-peerigon/commit/be86a71))


### BREAKING CHANGES

* This commit adds and changes a bunch of TypeScript rules because the original plugin was deprecated.

However, there were also notable changes to the base rules:

- "array-func/prefer-flat-map": "error" // https://github.com/freaktechnik/eslint-plugin-array-func
- "jsdoc/check-examples": "error"
- "jsdoc/require-returns": "error"
- "jsdoc/require-returns-check": "error"



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
