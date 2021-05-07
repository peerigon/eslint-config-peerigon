/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

module.exports = {
    rules: {
        "react/jsx-no-bind": [
            // We're using only "warn" here because it's not a hard error,
            // but it can be a problem if React.memo is used a lot.
            // Use styles/react-jsx-allow-bind if you're not using React.memo.
            "warn",
            {
                allowArrowFunctions: false,
                allowBind: false,
                allowFunctions: false,
                ignoreDOMComponents: true,
                ignoreRefs: true,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    },
};
