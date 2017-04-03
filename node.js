/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

// These rules try to be as close as possible to base.js while omitting the language features that are not supported by the current maintenance version of node.
// See https://github.com/nodejs/LTS and http://node.green/
module.exports = {
    env: {
        node: true
    },
    parserOptions: {
        sourceType: "script"
    },
    rules: {
        /* eslint-enable sort-keys */
        "prefer-rest": "off",
        "prefer-spread": "off"
    }
};
