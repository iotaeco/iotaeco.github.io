/**
 * Represents the request for findTransactions command.
 * @interface
 */
export interface IFindTransactionsRequest {
    /**
     * List of bundle hashes. The hashes need to be extended to 81chars by padding the hash with 9's.
     */
    bundles: string[];
    /**
     * List of addresses.
     */
    addresses: string[];
    /**
     * List of transaction tags.
     */
    tags: string[];
    /**
     * List of approvees of a transaction.
     */
    approvees: string[];
}
