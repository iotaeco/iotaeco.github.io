/**
 * Represents the request for getInclusionStates command.
 * @interface
 */
export interface IGetInclusionStatesRequest {
    /**
     * List of transactions you want to get the inclusion state for.
     */
    transactions: string[];
    /**
     * List of tips (including milestones) you want to search for the inclusion state.
     */
    tips: string[];
}
