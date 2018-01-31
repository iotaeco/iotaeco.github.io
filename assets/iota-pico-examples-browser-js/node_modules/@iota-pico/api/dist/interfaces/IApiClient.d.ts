import { IAddNeighborsRequest } from "../models/IAddNeighborsRequest";
import { IAddNeighborsResponse } from "../models/IAddNeighborsResponse";
import { IAttachToTangleRequest } from "../models/IAttachToTangleRequest";
import { IAttachToTangleResponse } from "../models/IAttachToTangleResponse";
import { IBroadcastTransactionsRequest } from "../models/IBroadcastTransactionsRequest";
import { ICheckConsistencyRequest } from "../models/ICheckConsistencyRequest";
import { ICheckConsistencyResponse } from "../models/ICheckConsistencyResponse";
import { IFindTransactionsRequest } from "../models/IFindTransactionsRequest";
import { IFindTransactionsResponse } from "../models/IFindTransactionsResponse";
import { IGetBalancesRequest } from "../models/IGetBalancesRequest";
import { IGetBalancesResponse } from "../models/IGetBalancesResponse";
import { IGetInclusionStatesRequest } from "../models/IGetInclusionStatesRequest";
import { IGetInclusionStatesResponse } from "../models/IGetInclusionStatesResponse";
import { IGetMissingTransactionsResponse } from "../models/IGetMissingTransactionsResponse";
import { IGetNeighborsResponse } from "../models/IGetNeighborsResponse";
import { IGetNodeInfoResponse } from "../models/IGetNodeInfoResponse";
import { IGetTipsResponse } from "../models/IGetTipsResponse";
import { IGetTransactionsToApproveRequest } from "../models/IGetTransactionsToApproveRequest";
import { IGetTransactionsToApproveResponse } from "../models/IGetTransactionsToApproveResponse";
import { IGetTrytesRequest } from "../models/IGetTrytesRequest";
import { IGetTrytesResponse } from "../models/IGetTrytesResponse";
import { IRemoveNeighborsRequest } from "../models/IRemoveNeighborsRequest";
import { IRemoveNeighborsResponse } from "../models/IRemoveNeighborsResponse";
import { IStoreTransactionsRequest } from "../models/IStoreTransactionsRequest";
import { IWereAddressesSpentFromRequest } from "../models/IWereAddressesSpentFromRequest";
import { IWereAddressesSpentFromResponse } from "../models/IWereAddressesSpentFromResponse";
/**
 * Represents a client for performing communication with a node api.
 * @interface
 */
export interface IApiClient {
    /**
     * Returns information about your node.
     * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
     */
    getNodeInfo(): Promise<IGetNodeInfoResponse>;
    /**
     * Returns the set of neighbors you are connected with, as well as their activity count.
     * The activity counter is reset after restarting IRI.
     * @returns Promise which resolves to the getNeighbors response object or rejects with error.
     */
    getNeighbors(): Promise<IGetNeighborsResponse>;
    /**
     * Add a list of neighbors to your node. It should be noted that this is only temporary,
     * and the added neighbors will be removed from your set of neighbors after you relaunch IRI.
     * @returns Promise which resolves to the addNeighbors response object or rejects with error.
     */
    addNeighbors(request: IAddNeighborsRequest): Promise<IAddNeighborsResponse>;
    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */
    removeNeighbors(request: IRemoveNeighborsRequest): Promise<IRemoveNeighborsResponse>;
    /**
     * Returns the list of tips.
     * @returns Promise which resolves to the getTips response object or rejects with error.
     */
    getTips(): Promise<IGetTipsResponse>;
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    findTransactions(request: IFindTransactionsRequest): Promise<IFindTransactionsResponse>;
    /**
     * Returns the raw transaction data (trytes) of a specific transaction.
     * These trytes can then be easily converted into the actual transaction object.
     * @returns Promise which resolves to the getTrytes response object or rejects with error.
     */
    getTrytes(request: IGetTrytesRequest): Promise<IGetTrytesResponse>;
    /**
     * Get the inclusion states of a set of transactions. This is for determining if a transaction
     * was accepted and confirmed by the network or not. You can search for multiple tips (and thus,
     * milestones) to get past inclusion states of transactions.
     * @returns Promise which resolves to the getInclusionStates response object or rejects with error.
     */
    getInclusionStates(request: IGetInclusionStatesRequest): Promise<IGetInclusionStatesResponse>;
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    getBalances(request: IGetBalancesRequest): Promise<IGetBalancesResponse>;
    /**
     * Tip selection which returns trunkTransaction and branchTransaction. The input value is depth,
     * which basically determines how many bundles to go back to for finding the transactions to approve.
     * The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).
     * @param request The getTransactionsToApprove request object.
     * @returns Promise which resolves to the getTransactionsToApprove response object or rejects with error.
     */
    getTransactionsToApprove(request: IGetTransactionsToApproveRequest): Promise<IGetTransactionsToApproveResponse>;
    /**
     * Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply
     * branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and
     * reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.
     * @param request The attachToTangle request object.
     * @returns Promise which resolves to the attachToTangle response object or rejects with error.
     */
    attachToTangle(request: IAttachToTangleRequest): Promise<IAttachToTangleResponse>;
    /**
     * Interrupts and completely aborts the attachToTangle process
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    interruptAttachingToTangle(): Promise<void>;
    /**
     * Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.
     * @param request The broadcastTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    broadcastTransactions(request: IBroadcastTransactionsRequest): Promise<void>;
    /**
     * Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.
     * @param request The storeTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    storeTransactions(request: IStoreTransactionsRequest): Promise<void>;
    /**
     * Get transactions with missing references.
     * @param request The getMissingTransactions request object.
     * @returns Promise which resolves to the getMissingTransactions response object or rejects with error.
     */
    getMissingTransactions(): Promise<IGetMissingTransactionsResponse>;
    /**
     * Check the consistency of tail hashes.
     * @param request The checkConsistency request object.
     * @returns Promise which resolves to the checkConsistency response object or rejects with error.
     */
    checkConsistency(request: ICheckConsistencyRequest): Promise<ICheckConsistencyResponse>;
    /**
     * Have the requested addresses been spent from already.
     * @param request The wereAddressesSpentFrom request object.
     * @returns Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.
     */
    wereAddressesSpentFrom(request: IWereAddressesSpentFromRequest): Promise<IWereAddressesSpentFromResponse>;
}
