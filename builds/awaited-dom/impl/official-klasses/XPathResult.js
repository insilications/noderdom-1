"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const XPathResult_1 = require("../../base/official-klasses/XPathResult");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const XPathResultBaseClass = XPathResult_1.XPathResultGenerator();
class XPathResult extends XPathResultBaseClass {
    get singleNodeValue() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty(this, 'singleNodeValue'), awaitedOptions);
    }
    // methods
    iterateNext() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addMethod(this, 'iterateNext'), awaitedOptions);
    }
    snapshotItem(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addMethod(this, 'snapshotItem', index), awaitedOptions);
    }
}
exports.default = XPathResult;
//# sourceMappingURL=XPathResult.js.map