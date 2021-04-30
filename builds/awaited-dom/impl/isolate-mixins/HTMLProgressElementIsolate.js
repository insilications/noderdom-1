"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLProgressElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLProgressElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class HTMLProgressElementIsolate extends HTMLProgressElementIsolate_1.default {
    get labels() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNodeList(awaitedPath.addProperty(this, 'labels'), awaitedOptions);
    }
}
exports.default = HTMLProgressElementIsolate;
//# sourceMappingURL=HTMLProgressElementIsolate.js.map