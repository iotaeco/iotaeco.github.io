"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * Default implementation of a node client.
 * @interface
 */
class BrowserNetworkClient {
    /**
     * Create an instance of BrowserNetworkClient.
     * @param networkEndPoint The endpoint to use for the client.
     */
    constructor(networkEndPoint) {
        if (networkEndPoint === undefined || networkEndPoint === null) {
            throw new coreError_1.CoreError("The networkEndPoint must be defined");
        }
        this._networkEndPoint = networkEndPoint;
    }
    /**
     * Post data asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    async postJson(data, additionalHeaders) {
        return new Promise((resolve, reject) => {
            const headers = additionalHeaders || {};
            headers["Content-Type"] = "application/json";
            const req = new XMLHttpRequest();
            req.open("POST", this._networkEndPoint.getUri(), true);
            for (const key in headers) {
                req.setRequestHeader(key, headers[key]);
            }
            req.onreadystatechange = () => {
                if (req.readyState === XMLHttpRequest.DONE) {
                    const responseData = req.responseText;
                    if (req.status === 200) {
                        try {
                            const response = JSON.parse(responseData);
                            resolve(response);
                        }
                        catch (err) {
                            reject(new coreError_1.CoreError("Unsuccessful POST request, unable to parse response", {
                                endPoint: this._networkEndPoint.getUri(),
                                httpStatusCode: req.status,
                                response: responseData
                            }));
                        }
                    }
                    else {
                        reject(new coreError_1.CoreError("Unsuccessful POST request", {
                            endPoint: this._networkEndPoint.getUri(),
                            httpStatusCode: req.status,
                            response: responseData
                        }));
                    }
                }
            };
            try {
                req.send(JSON.stringify(data));
            }
            catch (err) {
                reject(new coreError_1.CoreError("Unsuccessful POST request", {
                    endPoint: this._networkEndPoint.getUri(),
                    httpError: err
                }));
            }
        });
    }
}
exports.BrowserNetworkClient = BrowserNetworkClient;
