"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Slotable_1 = __importDefault(require("../../base/official-mixins/Slotable"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class Slotable extends Slotable_1.default {
    get assignedSlot() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLSlotElement(awaitedPath.addProperty(this, 'assignedSlot'), awaitedOptions);
    }
}
exports.default = Slotable;
//# sourceMappingURL=Slotable.js.map