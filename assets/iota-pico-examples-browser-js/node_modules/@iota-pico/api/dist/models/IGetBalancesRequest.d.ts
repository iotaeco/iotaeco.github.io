/**
 * Represents the request for getBalances command.
 * @interface
 */
export interface IGetBalancesRequest {
    /**
     * List of addresses you want to get the confirmed balance from.
     */
    addresses: string[];
    /**
     * Confirmation threshold, should be set to 100.
     */
    threshold: number;
}
