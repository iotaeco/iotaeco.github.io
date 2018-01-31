/**
 * Handle errors as gracefully as possible.
 */
export declare class ErrorHelper {
    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @param includeStack Include the stack trace if there is one.
     * @returns Formatted version of the error object.
     */
    static format(err: any, includeStack: boolean): string;
}
