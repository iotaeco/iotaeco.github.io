/**
 * Represents the response from addNeighbors command.
 * @interface
 */
export interface IAddNeighborsResponse {
    /**
     * The number of neighbours added.
     */
    addedNeighbors: number;
    /**
     * The duration of the request.
     */
    duration: number;
}
