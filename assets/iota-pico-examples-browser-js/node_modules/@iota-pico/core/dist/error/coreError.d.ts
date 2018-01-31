import { IError } from "../interfaces/IError";
/**
 * A core implementation of an error.
 */
export declare class CoreError implements IError {
    /**
     * The message for the error.
     */
    message: string;
    /**
     * The stack trace for the error.
     */
    stack: string;
    /**
     * Additional details about the error.
     */
    additional?: {
        [id: string]: any;
    };
    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    });
    /**
     * Check if an object could be a CoreError.
     * @param obj The object to check if it is a CoreError.
     * @returns true If the tested object is a CoreError.
     */
    static isError(obj: any): obj is CoreError;
    /**
     * Format the error to a readable version.
     */
    format(): string;
}
