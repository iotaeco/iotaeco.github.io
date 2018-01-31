import { NetworkProtocol } from "./networkProtocol";
/**
 * Represents the configuration for a network endpoint.
 * @interface
 */
export interface INetworkEndPoint {
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
