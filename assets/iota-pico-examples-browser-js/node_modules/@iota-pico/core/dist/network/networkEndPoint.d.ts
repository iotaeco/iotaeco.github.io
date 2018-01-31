import { INetworkEndPoint } from "../interfaces/INetworkEndPoint";
import { NetworkProtocol } from "../interfaces/networkProtocol";
/**
 * Default implementation of a network endpoint.
 */
export declare class NetworkEndPoint implements INetworkEndPoint {
    private readonly _protocol;
    private readonly _host;
    private readonly _path;
    private readonly _port;
    /**
     * Create an instance of NetworkEndPoint.
     * @param protocol The protocol to access the endpoint with.
     * @param host The host name or ip of the endpoint.
     * @param path The path to the endpoint.
     * @param port The port of the endpoint.
     */
    constructor(protocol: NetworkProtocol, host: string, path: string, port: number);
    /**
     * The protocol to access the endpoint with.
     * @return The protocol.
     */
    getProtocol(): NetworkProtocol;
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */
    getHost(): string;
    /**
     * The path to the endpoint.
     * @returns The path.
     */
    getPath(): string;
    /**
     * The port of the endpoint.
     * @returns The port.
     */
    getPort(): number;
    /**
     * The complete uri.
     * @returns The uri.
     */
    getUri(): string;
}
