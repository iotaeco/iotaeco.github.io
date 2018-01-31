/**
 * Represents the request for getTransactionsToApprove command.
 * @interface
 */
export interface IGetTransactionsToApproveRequest {
    /**
     * Number of bundles to go back to determine the transactions for approval.
     */
    depth: number;
}
