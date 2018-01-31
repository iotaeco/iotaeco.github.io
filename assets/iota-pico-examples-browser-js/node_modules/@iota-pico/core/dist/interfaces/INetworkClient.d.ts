/**
 * Represents a client for performing communication.
 * @interface
 */
export interface INetworkClient {
    /**
     * Post data as JSON asynchronously.
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
