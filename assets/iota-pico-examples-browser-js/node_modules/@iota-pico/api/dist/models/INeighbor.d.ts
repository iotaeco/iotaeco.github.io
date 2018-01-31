/**
 * Represents the a neighbor.
 * @interface
 */
export interface INeighbor {
    /**
     * The address of your peer.
     */
    address: string;
    /**
     * Number of all transactions sent (invalid, valid, already-seen).
     */
    numberOfAllTransactions: number;
    /**
     * Invalid transactions your peer has sent you.
     * These are transactions with invalid signatures or overall schema.
     */
    numberOfInvalidTransactions: number;
    /**
     * New transactions which were transmitted.
     */
    numberOfNewTransactions: number;
}
