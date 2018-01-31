"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("../error/coreError");
/**
 * Default implementation of a network endpoint.
 */
class NetworkEndPoint {
    /**
     * Create an instance of NetworkEndPoint.
     * @param protocol The protocol to access the endpoint with.
     * @param host The host name or ip of the endpoint.
     * @param path The path to the endpoint.
     * @param port The port of the endpoint.
     */
    constructor(protocol, host, path, port) {
        if (protocol === undefined || protocol === null || !/http|https/.test(protocol)) {
            throw new coreError_1.CoreError("The protocol must be defined as http or https");
        }
        if (host === undefined || host === null) {
            throw new coreError_1.CoreError("The host must be defined");
        }
        this._protocol = protocol;
        this._host = host.replace(/\/$/, "");
        this._path = (path || "").replace(/^\//, "").replace(/\/$/, "");
        this._port = port || 80;
    }
    /**
     * The protocol to access the endpoint with.
     * @return The protocol.
     */
    getProtocol() {
        return this._protocol;
    }
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */
    getHost() {
        return this._host;
    }
    /**
     * The path to the endpoint.
     * @returns The path.
     */
    getPath() {
        return this._path;
    }
    /**
     * The port of the endpoint.
     * @returns The port.
     */
    getPort() {
        return this._port;
    }
    /**
     * The complete uri.
     * @returns The uri.
     */
    getUri() {
        return `${this._protocol}://${this._host}:${this._port}/${this._path}`;
    }
}
exports.NetworkEndPoint = NetworkEndPoint;
