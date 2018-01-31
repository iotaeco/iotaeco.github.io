/**
 * Represents the response from attachToTangle command.
 * @interface
 */
export interface IAttachToTangleResponse {
    /**
     * The returned tryte value, the last 243 trytes basically consist
     * of the: trunkTransaction + branchTransaction + nonce.
     */
    trytes: string[];
}
