import globals from "globals";

export { globals };

/**
 * @template Item
 * @param {Array<Item>} a
 * @param {Array<Item>} b
 * @returns {Array<Item>}
 */
const intersect = (a, b) => {
    const setOfB = new Set(b);

    return a.filter((x) => setOfB.has(x));
};
