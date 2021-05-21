"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const CSSStyleSheetIsolate_1 = __importDefault(require("../../base/isolate-mixins/CSSStyleSheetIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class CSSStyleSheetIsolate extends CSSStyleSheetIsolate_1.default {
    get cssRules() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createCSSRuleList(awaitedPath.addProperty(this, 'cssRules'), awaitedOptions);
    }
    get ownerRule() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createCSSRule(awaitedPath.addProperty(this, 'ownerRule'), awaitedOptions);
    }
}
exports.default = CSSStyleSheetIsolate;
//# sourceMappingURL=CSSStyleSheetIsolate.js.map