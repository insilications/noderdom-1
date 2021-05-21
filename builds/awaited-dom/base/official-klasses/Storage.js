"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageConstantKeys = exports.StoragePropertyKeys = exports.StorageGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Storage', exports.getState, exports.setState);
function StorageGenerator() {
    return class Storage {
        constructor() {
            const proxy = new Proxy(this, {
                get(target, prop) {
                    if (prop in target) {
                        // @ts-ignore
                        const value = target[prop];
                        if (typeof value === 'function')
                            return value.bind(target);
                        return value;
                    }
                    // delegate to string indexer
                    if (typeof prop === 'string') {
                        return target.getItem(prop);
                    }
                },
            });
            return proxy;
        }
        // properties
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        // methods
        clear() {
            return exports.awaitedHandler.runMethod(this, 'clear', []);
        }
        getItem(key) {
            return exports.awaitedHandler.runMethod(this, 'getItem', [key]);
        }
        key(index) {
            return exports.awaitedHandler.runMethod(this, 'key', [index]);
        }
        removeItem(key) {
            return exports.awaitedHandler.runMethod(this, 'removeItem', [key]);
        }
        setItem(key, value) {
            return exports.awaitedHandler.runMethod(this, 'setItem', [key, value]);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return inspectInstanceProperties_1.default(this, exports.StoragePropertyKeys, exports.StorageConstantKeys);
        }
    };
}
exports.StorageGenerator = StorageGenerator;
exports.StoragePropertyKeys = ['length'];
exports.StorageConstantKeys = [];
//# sourceMappingURL=Storage.js.map