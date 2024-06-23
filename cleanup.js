import _ from "lodash";

const allRules = [];
const oldRules = [];

const allRulesMap = new Map(
  allRules.flatMap(({ rules }) => (rules ? Object.entries(rules) : [])),
);

const oldRulesMap = new Map(Object.entries(oldRules));

for (const [rule, config] of allRulesMap.entries()) {
  const oldRuleConfig = oldRulesMap.get(rule);

  if (_.isEqual(config, oldRuleConfig)) {
    oldRulesMap.delete(rule);
  }
}

for (const [rule, oldRuleConfig] of oldRulesMap.entries()) {
  if (oldRuleConfig === "off" || oldRuleConfig?.at(0) === "off") {
    if (allRulesMap.has(rule) === false) {
      oldRulesMap.delete(rule);
    }
  }
}
