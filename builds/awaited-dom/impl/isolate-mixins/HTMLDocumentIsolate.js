"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLDocumentIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLDocumentIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLDocumentIsolate extends HTMLDocumentIsolate_1.default {
}
exports.default = HTMLDocumentIsolate;
//# sourceMappingURL=HTMLDocumentIsolate.js.map