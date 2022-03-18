"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor() {
        this._message = "";
    }
    set message(message) {
        this._message = message;
    }
    get message() {
        return this._message;
    }
    log(message) {
        console.log("The marsRover project logs: " + message);
    }
}
exports.Logger = Logger;
