// TODO: Make npm run test:react
// TODO: Add hooks plugin and a11y plugin

import reactPluginRecommended from "eslint-plugin-react/configs/recommended.js";
import reactPluginJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import { globPatterns } from "../lib/glob-patterns.js";

export const react = [
  {
    files: [globPatterns.react, globPatterns.typescriptReact],
    ...reactPluginRecommended,
    ...reactPluginJsxRuntime,
  },
  {
    files: [globPatterns.react, globPatterns.typescriptReact],
    rules: {
      "react/button-has-type": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
      "react/default-props-match-prop-types": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
      "react/display-name": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
      "react/forbid-foreign-prop-types": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
      "react/forbid-prop-types": [
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        "warn",
        {
          checkChildContextTypes: true,
          checkContextTypes: true,
        },
      ],
      "react/hook-use-state": ["warn", { allowDestructuredState: true }], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
      "react/iframe-missing-sandbox": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
      "react/jsx-boolean-value": ["warn", "never"], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      "react/jsx-curly-brace-presence": ["warn", "never"], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
      "react/jsx-filename-extension": [
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "warn",
        {
          extensions: [".jsx", ".tsx"],
        },
      ],
      "react/jsx-handler-names": [
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        "warn",
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
        },
      ],
      "react/jsx-key": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
      "react/jsx-no-constructed-context-values": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
      "react/jsx-no-leaked-render": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
      "react/jsx-no-script-url": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
      "react/jsx-no-undef": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
      "react/jsx-pascal-case": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      "react/jsx-props-no-spread-multi": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
      "react/no-access-state-in-setstate": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
      "react/no-array-index-key": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
      "react/no-danger": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
      "react/no-did-mount-set-state": ["warn", "disallow-in-func"], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
      "react/no-did-update-set-state": ["warn", "disallow-in-func"], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
      "react/no-invalid-html-attribute": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
      "react/no-redundant-should-component-update": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
      "react/no-this-in-sfc": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
      "react/no-typos": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
      "react/no-unstable-nested-components": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
      "react/no-unused-prop-types": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
      "react/no-unused-state": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
      "react/no-will-update-set-state": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
      "react/prefer-es6-class": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
      "react/prefer-stateless-function": [
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        "warn",
        {
          ignorePureComponents: true,
        },
      ],
      "react/self-closing-comp": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
      "react/style-prop-object": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
      "react/void-dom-elements-no-children": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    },
  },
];
