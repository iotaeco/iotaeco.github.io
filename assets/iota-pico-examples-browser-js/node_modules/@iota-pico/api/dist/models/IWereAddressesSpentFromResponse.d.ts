/**
 * Represents the response from wereAddressesSpentFrom command.
 * @interface
 */
export interface IWereAddressesSpentFromResponse {
    /**
     * States which are true if the corresponding input address was spent from.
     */
    states: boolean[];
}
