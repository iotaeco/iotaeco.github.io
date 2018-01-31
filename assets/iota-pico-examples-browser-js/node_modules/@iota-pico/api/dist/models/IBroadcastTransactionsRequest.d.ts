/**
 * Represents the request for broadcastTransactions command.
 * @interface
 */
export interface IBroadcastTransactionsRequest {
    /**
     * List of raw data of transactions to be rebroadcast.
     */
    trytes: string[];
}
