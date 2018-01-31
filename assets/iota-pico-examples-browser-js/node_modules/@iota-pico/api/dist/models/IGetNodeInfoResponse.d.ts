/**
 * Represents the response from getNodeInfo command.
 * @interface
 */
export interface IGetNodeInfoResponse {
    /**
     * Name of the IOTA software you're currently using (IRI stands for Initial Reference Implementation).
     */
    appName: string;
    /**
     * The version of the IOTA software you're currently running.
     */
    appVersion: string;
    /**
     * Available cores on your machine for JRE.
     */
    jreAvailableProcessors: number;
    /**
     * The version of the Java Virtual Machine.
     */
    jreVersion: number;
    /**
     * Returns the amount of free memory in the Java Virtual Machine.
     */
    jreFreeMemory: number;
    /**
     * Returns the maximum amount of memory that the Java virtual machine will attempt to use.
     */
    jreMaxMemory: number;
    /**
     * Returns the total amount of memory in the Java virtual machine.
     */
    jreTotalMemory: number;
    /**
     * Latest milestone that was signed off by the coordinator.
     */
    latestMilestone: string;
    /**
     * Index of the latest milestone.
     */
    latestMilestoneIndex: number;
    /**
     * The latest milestone which is solid and is used for sending transactions. For a milestone to
     * become solid your local node must basically approve the subtangle of coordinator-approved
     * transactions, and have a consistent view of all referenced transactions.
     */
    latestSolidSubtangleMilestone: string;
    /**
     * Index of the latest solid subtangle.
     */
    latestSolidSubtangleMilestoneIndex: number;
    /**
     * Number of neighbors you are directly connected with.
     */
    neighbors: number;
    /**
     * Packets which are currently queued up.
     */
    packetsQueueSize: number;
    /**
     * Current UNIX timestamp.
     */
    time: number;
    /**
     * Number of tips in the network.
     */
    tips: number;
    /**
     * Transactions to request during syncing process.
     */
    transactionsToRequest: number;
    /**
     * The duration of the request.
     */
    duration: number;
}
