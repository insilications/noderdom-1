"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFontElementConstantKeys = exports.HTMLFontElementPropertyKeys = exports.HTMLFontElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFontElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLFontElementGenerator(HTMLElement) {
    return class HTMLFontElement extends HTMLElement {
        constructor() {
            super();
            exports.setState(this, {
                createInstanceName: 'createHTMLFontElement',
            });
        }
        // properties
        get color() {
            return exports.awaitedHandler.getProperty(this, 'color', false);
        }
        get face() {
            return exports.awaitedHandler.getProperty(this, 'face', false);
        }
        get size() {
            return exports.awaitedHandler.getProperty(this, 'size', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return inspectInstanceProperties_1.default(this, exports.HTMLFontElementPropertyKeys, exports.HTMLFontElementConstantKeys);
        }
    };
}
exports.HTMLFontElementGenerator = HTMLFontElementGenerator;
exports.HTMLFontElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'color', 'face', 'size'];
exports.HTMLFontElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLFontElement.js.map