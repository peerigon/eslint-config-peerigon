import tsEslint from "typescript-eslint";
import base from "./base.js";

export const typescript = tsEslint.config(
  ...base,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
);

export default typescript;
