"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLObjectElement_1 = require("../../base/official-klasses/HTMLObjectElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLObjectElementBaseClass = HTMLObjectElement_1.HTMLObjectElementGenerator(HTMLElement_1.default);
class HTMLObjectElement extends HTMLObjectElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get contentDocument() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperDocument(awaitedPath.addProperty(this, 'contentDocument'), awaitedOptions);
    }
    get form() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLFormElement(awaitedPath.addProperty(this, 'form'), awaitedOptions);
    }
}
exports.default = HTMLObjectElement;
//# sourceMappingURL=HTMLObjectElement.js.map