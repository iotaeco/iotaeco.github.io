import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import { INetworkEndPoint } from "@iota-pico/core/dist/interfaces/INetworkEndPoint";
/**
 * Default implementation of a node client.
 * @interface
 */
export declare class BrowserNetworkClient implements INetworkClient {
    private readonly _networkEndPoint;
    /**
     * Create an instance of BrowserNetworkClient.
     * @param networkEndPoint The endpoint to use for the client.
     */
    constructor(networkEndPoint: INetworkEndPoint);
    /**
     * Post data asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    postJson<T, U>(data: T, additionalHeaders?: {
        [header: string]: string;
    }): Promise<U>;
}
