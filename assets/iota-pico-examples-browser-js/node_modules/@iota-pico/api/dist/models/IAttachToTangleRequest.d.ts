/**
 * Represents the request for attachToTangle command.
 * @interface
 */
export interface IAttachToTangleRequest {
    /**
     * Trunk transaction to approve.
     */
    trunkTransaction: string;
    /**
     * Branch transaction to approve.
     */
    branchTransaction: string;
    /**
     * Proof of Work intensity. Minimum value is 18
     */
    minWeightMagnitude: number;
    /**
     * List of trytes (raw transaction data) to attach to the tangle.
     */
    trytes: string[];
}
