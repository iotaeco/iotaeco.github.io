/**
 * Represents the request for getTrytes command.
 * @interface
 */
export interface IGetTrytesRequest {
    /**
     * List of transaction hashes of which you want to get trytes from.
     */
    hashes: string[];
}
