import { INeighbor } from "./INeighbor";
/**
 * Represents the response from getNeighbors command.
 * @interface
 */
export interface IGetNeighborsResponse {
    /**
     * The neighbors of the node.
     */
    neighbors: INeighbor[];
    /**
     * The duration of the request.
     */
    duration: number;
}
