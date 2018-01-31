/**
 * Represents the response from getTransactionsToApprove command.
 * @interface
 */
export interface IGetTransactionsToApproveResponse {
    /**
     * The trunk transaction.
     */
    trunkTransaction: string;
    /**
     * The branch transaction.
     */
    branchTransaction: string;
}
