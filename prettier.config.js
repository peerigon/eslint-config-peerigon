"use strict";

module.exports = {
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    // Overwriting the default configuration because of "importAttributes".
    // TODO: Remove this once "importAttributes" is added to the default configuration.
    importOrderParserPlugins: [
        "typescript",
        "jsx",
        "decorators",
        "importAttributes",
    ],
    // Overwrites the default TS version of "1.0.0".
    // It's a little bit annoying to specify the TS version here as we don't know
    // the project's TS version (and we also don't want to update this file every time).
    // Specifying the most major version should be enough for now.
    importOrderTypeScriptVersion: "5.0.0",
};
