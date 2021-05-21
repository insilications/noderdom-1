"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLDocumentIsolateConstantKeys = exports.HTMLDocumentIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLDocumentIsolate', exports.getState, exports.setState);
class HTMLDocumentIsolate {
}
exports.default = HTMLDocumentIsolate;
exports.HTMLDocumentIsolatePropertyKeys = [];
exports.HTMLDocumentIsolateConstantKeys = [];
//# sourceMappingURL=HTMLDocumentIsolate.js.map