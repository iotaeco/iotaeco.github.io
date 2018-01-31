/**
 * Represents the request for checkConsistency command.
 * @interface
 */
export interface ICheckConsistencyRequest {
    /**
     * The tail hashes to check for consistency.
     */
    tails: string[];
}
