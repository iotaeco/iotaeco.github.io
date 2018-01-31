/**
 * Represents the response from checkConsistency command.
 * @interface
 */
export interface ICheckConsistencyResponse {
    /**
     * Is the tail reference consistent.
     */
    state: boolean;
    /**
     * Is the tail reference consistent.
     */
    info: string;
    /**
     * The duration of the request.
     */
    duration: number;
}
