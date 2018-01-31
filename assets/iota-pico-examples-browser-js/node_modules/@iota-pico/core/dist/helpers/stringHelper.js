"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * String helper methods
 */
class StringHelper {
    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    static isString(value) {
        return value === null || value === undefined
            ? false : Object.prototype.toString.call(value) === "[object String]";
    }
}
exports.StringHelper = StringHelper;
