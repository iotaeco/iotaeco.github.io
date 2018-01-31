/**
 * Represents the response from getInclusionStates command.
 * @interface
 */
export interface IGetInclusionStatesResponse {
    /**
     * List of boolean values in the same order as the transaction list you submitted,
     * thus you get a true/false whether a transaction is confirmed or not.
     */
    states: boolean[];
    /**
     * The duration of the request.
     */
    duration: number;
}
