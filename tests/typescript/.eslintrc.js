module.exports = {
    env: {
        node: true,
    },
    extends: [
        // Should be the same as in "../../presets/prettier-typescript.js"
        "../../base.js",
        "../../typescript.js",
        "../../styles/prefer-arrow.js",
        // prettier must be at the end
        "prettier",
    ],
    root: true,
    parserOptions: {
        project: "./tests/typescript/tsconfig.json",
    },
};
