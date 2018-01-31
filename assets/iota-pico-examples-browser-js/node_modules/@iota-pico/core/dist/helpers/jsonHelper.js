"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Json helper methods
 */
class JsonHelper {
    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    static stringify(value, replacer, space) {
        // eliminates any recursion in the stringify
        const cache = [];
        const recusionReplacer = (key, replaceValue) => {
            if (typeof replaceValue === "object" && value !== null && replaceValue !== undefined) {
                if (cache.indexOf(replaceValue) !== -1) {
                    // circular reference found, discard key
                    return;
                }
                else {
                    cache.push(replaceValue);
                }
            }
            return replacer ? replacer(key, replaceValue) : replaceValue;
        };
        return JSON.stringify(value, recusionReplacer, space);
    }
}
exports.JsonHelper = JsonHelper;
