"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonHelper_1 = require("../helpers/jsonHelper");
/**
 * A core implementation of an error.
 */
class CoreError {
    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     */
    constructor(message, additional) {
        this.message = message;
        this.additional = additional ? additional : {};
        this.stack = new Error().stack;
    }
    /**
     * Check if an object could be a CoreError.
     * @param obj The object to check if it is a CoreError.
     * @returns true If the tested object is a CoreError.
     */
    static isError(obj) {
        return obj !== undefined && obj !== null && typeof obj === "object" && "message" in obj && "additional" in obj;
    }
    /**
     * Format the error to a readable version.
     */
    format() {
        let out = this.message || "";
        const keys = Object.keys(this.additional);
        if (keys.length > 0) {
            out += "\r\n";
            keys.forEach(key => {
                out += `\t${key}: ${jsonHelper_1.JsonHelper.stringify(this.additional[key])}\r\n`;
            });
        }
        return out;
    }
}
exports.CoreError = CoreError;
