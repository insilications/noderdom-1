"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Storage_1 = require("../../base/official-klasses/Storage");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const StorageBaseClass = Storage_1.StorageGenerator();
class Storage extends StorageBaseClass {
}
exports.default = Storage;
//# sourceMappingURL=Storage.js.map