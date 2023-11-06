/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

const options = require("./options.js");

module.exports = {
    env: {
        mocha: true,
        jest: true,
    },
    globals: {
        cy: true,
        Cypress: true,
        assert: true,
    },
    rules: {
        /* eslint-enable sort-keys */
        // chai uses these as assertions
        "@babel/no-unused-expressions": "off",
        // In order to make mocks more condensed, single line blocks are allowed in tests
        // Storybook stories export a default config object which gets used by their pipeline
        "import/no-anonymous-default-export": "off",
        // In test scenarios this kind of module pattern is more usual
        "import/no-unassigned-import": "off",
        // Long tests are not necessarily a problem, but there is a certain limit
        "max-lines": "off",
        // mocha blocks are nested all the way down
        "max-nested-callbacks": "off",
        // Allows empty catch blocks in try clauses
        "no-empty": "off",
        // If you want to test for thrown errors in a constructor function, it's common to ignore the result
        // @see https://github.com/peerigon/clockodo/pull/1#discussion_r180795825
        "no-new": "off",
        // It's uncommon to use async/await in Cypress tests
        // https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Asynchronous
        "promise/no-nesting": "off",
    },
};
