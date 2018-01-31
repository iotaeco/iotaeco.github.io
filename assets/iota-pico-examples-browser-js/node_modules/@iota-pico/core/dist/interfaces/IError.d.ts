/**
 * Represents an error.
 * @interface
 */
export interface IError {
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
}
