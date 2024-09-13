const camelcase = {
  allow: ["^UNSAFE_"], // Allows React UNSAFE_ methods
  ignoreDestructuring: false,
  properties: "always",
};

export const ruleOptions = {
  ["camelcase"]: camelcase,
  ["max-lines"]: {
    max: 700,
    skipBlankLines: true,
    skipComments: true,
  },
  ["no-unused-expressions"]: {
    allowShortCircuit: true,
    allowTernary: true,
  },
  ["no-unused-vars"]: {
    // This pattern is pretty common
    ignoreRestSiblings: true,
    varsIgnorePattern: "^_",
  },
  ["@typescript-eslint/naming-convention"]: (() => {
    const options = {
      default: {
        selector: "default",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      function: {
        selector: "function",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      parameter: {
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      method: {
        selector: "method",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      typeLike: {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      enumMember: {
        selector: "enumMember",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      // In case it's destructured, we don't want to force the developer to change the casing
      destructuring: {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
      // In case the property name requires quotes, we don't enforce any convention
      requiresQuites: {
        selector: [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember",
        ],
        modifiers: ["requiresQuotes"],
        format: null,
      },
      // We don't enforce any convention on object literals since these are often used
      // for data object where we're not in control of the type (e.g. an api that takes camel_case properties)
      objectLiteralProperty: {
        selector: "objectLiteralProperty",
        format: null,
      },
    };

    // By enumerating all selectors explicitly we increase the
    // specificity of these rules.
    const escapeHatches = [
      "variable",
      "function",
      "parameter",
      "property",
      "parameterProperty",
      "method",
      "accessor",
      "enumMember",
      "class",
      "interface",
      "typeAlias",
      "enum",
      "typeParameter",
    ].map((selector) => ({
      filter: {
        match: true,
        // UNSAFE_ is a prefix used by React for all lifecycle hooks that are about to be deprecated
        regex: "^(__|UNSAFE_).+$",
      },
      format: null,
      selector,
    }));

    return {
      ...options,
      defaultRules: [...Object.values(options), ...escapeHatches],
      ignoreProperties: {
        selector: "property",
        format: null,
      },
    };
  })(),
};
