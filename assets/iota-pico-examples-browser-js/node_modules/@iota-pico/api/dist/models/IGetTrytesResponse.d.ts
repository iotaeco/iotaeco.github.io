/**
 * Represents the response from getTrytes command.
 * @interface
 */
export interface IGetTrytesResponse {
    /**
     * Trytes of the requested hashes.
     */
    trytes: string[];
    /**
     * The duration of the request.
     */
    duration: number;
}
