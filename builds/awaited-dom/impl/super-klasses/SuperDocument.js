"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperDocument_1 = require("../../base/super-klasses/SuperDocument");
const create_1 = require("../create");
const DocumentIsolate_1 = __importDefault(require("../isolate-mixins/DocumentIsolate"));
const DocumentOrShadowRoot_1 = __importDefault(require("../official-mixins/DocumentOrShadowRoot"));
const HTMLDocumentIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDocumentIsolate"));
const NodeIsolate_1 = __importDefault(require("../isolate-mixins/NodeIsolate"));
const NonElementParentNode_1 = __importDefault(require("../official-mixins/NonElementParentNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
const XPathEvaluatorBase_1 = __importDefault(require("../official-mixins/XPathEvaluatorBase"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperDocumentBaseClass = SuperDocument_1.SuperDocumentGenerator(DocumentIsolate_1.default, DocumentOrShadowRoot_1.default, HTMLDocumentIsolate_1.default, NodeIsolate_1.default, NonElementParentNode_1.default, ParentNode_1.default, XPathEvaluatorBase_1.default);
class SuperDocument extends SuperDocumentBaseClass {
    constructor() {
        super();
    }
    // properties
    get anchors() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'anchors'), awaitedOptions);
    }
    get body() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLElement(awaitedPath.addProperty(this, 'body'), awaitedOptions);
    }
    get doctype() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDocumentType(awaitedPath.addProperty(this, 'doctype'), awaitedOptions);
    }
    get documentElement() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty(this, 'documentElement'), awaitedOptions);
    }
    get embeds() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'embeds'), awaitedOptions);
    }
    get featurePolicy() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createFeaturePolicy(awaitedPath.addProperty(this, 'featurePolicy'), awaitedOptions);
    }
    get forms() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'forms'), awaitedOptions);
    }
    get head() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLHeadElement(awaitedPath.addProperty(this, 'head'), awaitedOptions);
    }
    get images() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'images'), awaitedOptions);
    }
    get implementation() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDOMImplementation(awaitedPath.addProperty(this, 'implementation'), awaitedOptions);
    }
    get links() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'links'), awaitedOptions);
    }
    get location() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createLocation(awaitedPath.addProperty(this, 'location'), awaitedOptions);
    }
    get plugins() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'plugins'), awaitedOptions);
    }
    get scripts() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'scripts'), awaitedOptions);
    }
    get scrollingElement() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty(this, 'scrollingElement'), awaitedOptions);
    }
    // methods
    getElementsByClassName(classNames) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addMethod(this, 'getElementsByClassName', classNames), awaitedOptions);
    }
    getElementsByName(elementName) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNodeList(awaitedPath.addMethod(this, 'getElementsByName', elementName), awaitedOptions);
    }
    getElementsByTagName(qualifiedName) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addMethod(this, 'getElementsByTagName', qualifiedName), awaitedOptions);
    }
    getElementsByTagNameNS(namespace, localName) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addMethod(this, 'getElementsByTagNameNS', namespace, localName), awaitedOptions);
    }
}
exports.default = SuperDocument;
//# sourceMappingURL=SuperDocument.js.map