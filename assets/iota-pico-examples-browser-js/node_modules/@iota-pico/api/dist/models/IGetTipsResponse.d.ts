/**
 * Represents the response from getTips command.
 * @interface
 */
export interface IGetTipsResponse {
    /**
     * The hashes for the tips.
     */
    hashes: string[];
    /**
     * The duration of the request.
     */
    duration: number;
}
