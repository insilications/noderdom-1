"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaKeysConstantKeys = exports.MediaKeysPropertyKeys = exports.MediaKeysGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('MediaKeys', exports.getState, exports.setState);
function MediaKeysGenerator() {
    return class MediaKeys {
        constructor() {
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return inspectInstanceProperties_1.default(this, exports.MediaKeysPropertyKeys, exports.MediaKeysConstantKeys);
        }
    };
}
exports.MediaKeysGenerator = MediaKeysGenerator;
exports.MediaKeysPropertyKeys = [];
exports.MediaKeysConstantKeys = [];
//# sourceMappingURL=MediaKeys.js.map