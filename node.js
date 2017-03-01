// These rules try to be as close as possible to base.js while omitting the language features that are not supported by the current maintenance version of node.
// See https://github.com/nodejs/LTS and http://node.green/
module.exports = {
    parserOptions: {
        sourceType: "script"
    },
    rules: {
        "prefer-spread": "off"
    }
};
