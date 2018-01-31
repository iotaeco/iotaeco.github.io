/**
 * Represents the response from findTransactions command.
 * @interface
 */
export interface IFindTransactionsResponse {
    /**
     * The transaction hashes which are returned depend on your input.
     * For each specified input value, the command will return the following:
     * bundles: returns the list of transactions which contain the specified bundle hash.
     * addresses: returns the list of transactions which have the specified address as an input/output field.
     * tags: returns the list of transactions which contain the specified tag value.
     * approvees: returns the list of transaction which reference (i.e. confirm) the specified transaction.
     */
    hashes: string[];
    /**
     * The duration of the request.
     */
    duration: number;
}
