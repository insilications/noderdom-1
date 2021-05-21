"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTemplateElementConstantKeys = exports.HTMLTemplateElementPropertyKeys = exports.HTMLTemplateElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTemplateElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLTemplateElementGenerator(HTMLElement) {
    return class HTMLTemplateElement extends HTMLElement {
        constructor() {
            super();
            exports.setState(this, {
                createInstanceName: 'createHTMLTemplateElement',
            });
        }
        // properties
        get content() {
            throw new Error('HTMLTemplateElement.content getter not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return inspectInstanceProperties_1.default(this, exports.HTMLTemplateElementPropertyKeys, exports.HTMLTemplateElementConstantKeys);
        }
    };
}
exports.HTMLTemplateElementGenerator = HTMLTemplateElementGenerator;
exports.HTMLTemplateElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'content'];
exports.HTMLTemplateElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLTemplateElement.js.map