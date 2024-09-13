import { base } from "../../src/rules/base.js";
import { react } from "../../src/rules/react.js";

/**
 * @type {Array<import("eslint").Linter.Config>}
 */
export default [...base, ...react];
