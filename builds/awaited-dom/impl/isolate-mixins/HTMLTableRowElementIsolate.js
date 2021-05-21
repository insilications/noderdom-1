"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLTableRowElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLTableRowElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLTableRowElementIsolate extends HTMLTableRowElementIsolate_1.default {
    get cells() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'cells'), awaitedOptions);
    }
    // methods
    insertCell(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLTableCellElement(awaitedPath.addMethod(this, 'insertCell', index), awaitedOptions);
    }
}
exports.default = HTMLTableRowElementIsolate;
//# sourceMappingURL=HTMLTableRowElementIsolate.js.map