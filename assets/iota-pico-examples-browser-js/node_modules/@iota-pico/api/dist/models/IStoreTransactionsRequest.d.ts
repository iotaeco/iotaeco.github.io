/**
 * Represents the request for storeTransactions command.
 * @interface
 */
export interface IStoreTransactionsRequest {
    /**
     * List of raw data of transactions to be stored.
     */
    trytes: string[];
}
