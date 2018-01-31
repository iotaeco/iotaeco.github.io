/**
 * Represents the request for wereAddressesSpentFrom command.
 * @interface
 */
export interface IWereAddressesSpentFromRequest {
    /**
     * The address hashes to check if they were spent from.
     */
    addresses: string[];
}
