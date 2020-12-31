import { IDocument, IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation } from '../../base/interfaces/official';
import { ISuperHTMLCollection, ISuperHTMLElement, ISuperElement, ISuperNodeList } from '../../base/interfaces/super';
import { IDocumentProperties } from '../../base/official-klasses/Document';
export declare const getState: (instance: IDocument) => IDocumentProperties, setState: (instance: IDocument, properties: Partial<IDocumentProperties>) => void, recordProxy: (proxy: IDocument, instance: IDocument) => void;
declare const DocumentBaseClass: {
    new (): {
        readonly URL: Promise<string>;
        readonly anchors: ISuperHTMLCollection;
        readonly body: ISuperHTMLElement;
        readonly characterSet: Promise<string>;
        readonly compatMode: Promise<string>;
        readonly contentType: Promise<string>;
        readonly cookie: Promise<string>;
        readonly designMode: Promise<string>;
        readonly dir: Promise<string>;
        readonly doctype: IDocumentType;
        readonly documentElement: ISuperElement;
        readonly documentURI: Promise<string>;
        readonly domain: Promise<string>;
        readonly embeds: ISuperHTMLCollection;
        readonly featurePolicy: IFeaturePolicy;
        readonly forms: ISuperHTMLCollection;
        readonly fullscreenEnabled: Promise<boolean>;
        readonly head: IHTMLHeadElement;
        readonly hidden: Promise<boolean>;
        readonly images: ISuperHTMLCollection;
        readonly implementation: IDOMImplementation;
        readonly lastModified: Promise<string>;
        readonly links: ISuperHTMLCollection;
        readonly location: ILocation;
        readonly plugins: ISuperHTMLCollection;
        readonly readyState: Promise<import("../../base/interfaces/official").IDocumentReadyState>;
        readonly referrer: Promise<string>;
        readonly scripts: ISuperHTMLCollection;
        readonly scrollingElement: ISuperElement;
        readonly title: Promise<string>;
        readonly visibilityState: Promise<import("../../base/interfaces/official").IVisibilityState>;
        exitFullscreen(): Promise<void>;
        exitPointerLock(): Promise<void>;
        getElementsByClassName(classNames: string): ISuperHTMLCollection;
        getElementsByName(elementName: string): ISuperNodeList;
        getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
        getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
        hasFocus(): Promise<boolean>;
        then<TResult1 = IDocument, TResult2 = never>(onfulfilled?: ((value: IDocument) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        readonly ATTRIBUTE_NODE: number;
        readonly CDATA_SECTION_NODE: number;
        readonly COMMENT_NODE: number;
        readonly DOCUMENT_FRAGMENT_NODE: number;
        readonly DOCUMENT_NODE: number;
        readonly DOCUMENT_POSITION_CONTAINED_BY: number;
        readonly DOCUMENT_POSITION_CONTAINS: number;
        readonly DOCUMENT_POSITION_DISCONNECTED: number;
        readonly DOCUMENT_POSITION_FOLLOWING: number;
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        readonly DOCUMENT_POSITION_PRECEDING: number;
        readonly DOCUMENT_TYPE_NODE: number;
        readonly ELEMENT_NODE: number;
        readonly ENTITY_NODE: number;
        readonly ENTITY_REFERENCE_NODE: number;
        readonly NOTATION_NODE: number;
        readonly PROCESSING_INSTRUCTION_NODE: number;
        readonly TEXT_NODE: number;
        readonly baseURI: Promise<string>;
        readonly childNodes: ISuperNodeList;
        readonly firstChild: import("../../base/interfaces/super").ISuperNode;
        readonly isConnected: Promise<boolean>;
        readonly lastChild: import("../../base/interfaces/super").ISuperNode;
        readonly nextSibling: import("../../base/interfaces/super").ISuperNode;
        readonly nodeName: Promise<string>;
        readonly nodeType: Promise<number>;
        readonly nodeValue: Promise<string | null>;
        readonly ownerDocument: import("../../base/interfaces/super").ISuperDocument;
        readonly parentElement: ISuperElement;
        readonly parentNode: import("../../base/interfaces/super").ISuperNode;
        readonly previousSibling: import("../../base/interfaces/super").ISuperNode;
        readonly textContent: Promise<string | null>;
        compareDocumentPosition(other: import("../../base/interfaces/isolate").INodeIsolate): Promise<number>;
        contains(other: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        getRootNode(options?: import("../../base/interfaces/official").IGetRootNodeOptions | undefined): import("../../base/interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        isSameNode(otherNode: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        lookupNamespaceURI(prefix: string | null): Promise<string | null>;
        lookupPrefix(namespace: string | null): Promise<string | null>;
        normalize(): Promise<void>;
        readonly activeElement: ISuperElement;
        readonly fullscreenElement: ISuperElement;
        readonly pointerLockElement: ISuperElement;
        caretPositionFromPoint(x: number, y: number): import("../../base/interfaces/official").ICaretPosition;
        elementFromPoint(x: number, y: number): ISuperElement;
        getSelection(): import("../../base/interfaces/official").ISelection;
        readonly fonts: import("../../base/interfaces/official").IFontFaceSet;
        getElementById(elementId: string): ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: ISuperHTMLCollection;
        readonly firstElementChild: ISuperElement;
        readonly lastElementChild: ISuperElement;
        querySelector(selectors: string): ISuperElement;
        querySelectorAll(selectors: string): ISuperNodeList;
        createExpression(expression: string, resolver?: ((prefix: string | null) => string | null) | {
            lookupNamespaceURI(prefix: string | null): string | null;
        } | null | undefined): import("../../base/interfaces/official").IXPathExpression;
        evaluate(expression: string, contextNode: import("../../base/interfaces/isolate").INodeIsolate, resolver?: ((prefix: string | null) => string | null) | {
            lookupNamespaceURI(prefix: string | null): string | null;
        } | null | undefined, type?: number | undefined, result?: import("../../base/interfaces/official").IXPathResult | null | undefined): import("../../base/interfaces/official").IXPathResult;
    };
};
export default class Document extends DocumentBaseClass implements IDocument {
    constructor();
    get anchors(): ISuperHTMLCollection;
    get body(): ISuperHTMLElement;
    get doctype(): IDocumentType;
    get documentElement(): ISuperElement;
    get embeds(): ISuperHTMLCollection;
    get featurePolicy(): IFeaturePolicy;
    get forms(): ISuperHTMLCollection;
    get head(): IHTMLHeadElement;
    get images(): ISuperHTMLCollection;
    get implementation(): IDOMImplementation;
    get links(): ISuperHTMLCollection;
    get location(): ILocation;
    get plugins(): ISuperHTMLCollection;
    get scripts(): ISuperHTMLCollection;
    get scrollingElement(): ISuperElement;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByName(elementName: string): ISuperNodeList;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
}
export {};
