import { base } from "../../src/rules/base.js";
import { browser } from "../../src/rules/browser.js";
import { react } from "../../src/rules/react.js";

/**
 * @type {Array<import("eslint").Linter.Config>}
 */
export default [...base, ...react, ...browser];
