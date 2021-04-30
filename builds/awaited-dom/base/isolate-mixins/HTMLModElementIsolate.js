"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLModElementIsolateConstantKeys = exports.HTMLModElementIsolatePropertyKeys = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLModElementIsolate', exports.getState, exports.setState);
class HTMLModElementIsolate {
    get cite() {
        return exports.awaitedHandler.getProperty(this, 'cite', false);
    }
    get dateTime() {
        return exports.awaitedHandler.getProperty(this, 'dateTime', false);
    }
}
exports.default = HTMLModElementIsolate;
exports.HTMLModElementIsolatePropertyKeys = ['cite', 'dateTime'];
exports.HTMLModElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLModElementIsolate.js.map