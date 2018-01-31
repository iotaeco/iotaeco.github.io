/**
 * Represents the response from removeNeighbors command.
 * @interface
 */
export interface IRemoveNeighborsResponse {
    /**
     * The number of neighbours removed.
     */
    removedNeighbors: number;
    /**
     * The duration of the request.
     */
    duration: number;
}
