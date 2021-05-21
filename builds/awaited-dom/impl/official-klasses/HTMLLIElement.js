"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLLIElement_1 = require("../../base/official-klasses/HTMLLIElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLLIElementBaseClass = HTMLLIElement_1.HTMLLIElementGenerator(HTMLElement_1.default);
class HTMLLIElement extends HTMLLIElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLLIElement;
//# sourceMappingURL=HTMLLIElement.js.map