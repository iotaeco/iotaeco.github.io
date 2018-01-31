/**
 * Represents the response from getMissingTransactions command.
 * @interface
 */
export interface IGetMissingTransactionsResponse {
    /**
     * The transactions with missing references.
     */
    hashes: string[];
    /**
     * The duration of the request.
     */
    duration: number;
}
