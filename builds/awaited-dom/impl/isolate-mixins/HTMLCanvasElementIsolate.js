"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLCanvasElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLCanvasElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLCanvasElementIsolate extends HTMLCanvasElementIsolate_1.default {
    captureStream(frameRequestRate) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createMediaStream)(awaitedPath.addMethod(this, 'captureStream', frameRequestRate), awaitedOptions);
    }
    transferControlToOffscreen() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createOffscreenCanvas)(awaitedPath.addMethod(this, 'transferControlToOffscreen'), awaitedOptions);
    }
}
exports.default = HTMLCanvasElementIsolate;
//# sourceMappingURL=HTMLCanvasElementIsolate.js.map