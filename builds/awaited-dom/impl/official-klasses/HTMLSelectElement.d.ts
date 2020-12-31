import { IHTMLSelectElement, IHTMLFormElement, IHTMLOptionsCollection, IHTMLOptionElement } from '../../base/interfaces/official';
import { ISuperNodeList, ISuperHTMLCollection, ISuperElement } from '../../base/interfaces/super';
import { IHTMLSelectElementProperties } from '../../base/official-klasses/HTMLSelectElement';
export declare const getState: (instance: IHTMLSelectElement) => IHTMLSelectElementProperties, setState: (instance: IHTMLSelectElement, properties: Partial<IHTMLSelectElementProperties>) => void, recordProxy: (proxy: IHTMLSelectElement, instance: IHTMLSelectElement) => void;
declare const HTMLSelectElementBaseClass: {
    new (): {
        [index: number]: ISuperElement;
        readonly autocomplete: Promise<string>;
        readonly autofocus: Promise<boolean>;
        readonly disabled: Promise<boolean>;
        readonly form: IHTMLFormElement;
        readonly labels: ISuperNodeList;
        readonly length: Promise<number>;
        readonly multiple: Promise<boolean>;
        readonly name: Promise<string>;
        readonly options: IHTMLOptionsCollection;
        readonly required: Promise<boolean>;
        readonly selectedIndex: Promise<number>;
        readonly selectedOptions: ISuperHTMLCollection;
        readonly size: Promise<number>;
        readonly type: Promise<string>;
        readonly validationMessage: Promise<string>;
        readonly validity: Promise<import("../../base/interfaces/official").IValidityState>;
        readonly value: Promise<string>;
        readonly willValidate: Promise<boolean>;
        checkValidity(): Promise<boolean>;
        item(index: number): ISuperElement;
        namedItem(name: string): IHTMLOptionElement;
        reportValidity(): Promise<boolean>;
        then<TResult1 = IHTMLSelectElement, TResult2 = never>(onfulfilled?: ((value: IHTMLSelectElement) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
        readonly accessKey: Promise<string>;
        readonly autoCapitalize: Promise<string>;
        readonly dir: Promise<string>;
        readonly draggable: Promise<boolean>;
        readonly hidden: Promise<boolean>;
        readonly inert: Promise<boolean>;
        readonly innerText: Promise<string>;
        readonly lang: Promise<string>;
        readonly offsetHeight: Promise<number>;
        readonly offsetLeft: Promise<number>;
        readonly offsetParent: ISuperElement;
        readonly offsetTop: Promise<number>;
        readonly offsetWidth: Promise<number>;
        readonly spellcheck: Promise<boolean>;
        readonly title: Promise<string>;
        readonly translate: Promise<boolean>;
        click(): Promise<void>;
        readonly attributes: import("../../base/interfaces/official").INamedNodeMap;
        readonly classList: import("../../base/interfaces/official").IDOMTokenList;
        readonly className: Promise<string>;
        readonly clientHeight: Promise<number>;
        readonly clientLeft: Promise<number>;
        readonly clientTop: Promise<number>;
        readonly clientWidth: Promise<number>;
        readonly id: Promise<string>;
        readonly innerHTML: Promise<string>;
        readonly localName: Promise<string>;
        readonly namespaceURI: Promise<string | null>;
        readonly outerHTML: Promise<string>;
        readonly part: import("../../base/interfaces/official").IDOMTokenList;
        readonly prefix: Promise<string | null>;
        readonly scrollHeight: Promise<number>;
        readonly scrollLeft: Promise<number>;
        readonly scrollTop: Promise<number>;
        readonly scrollWidth: Promise<number>;
        readonly shadowRoot: import("../../base/interfaces/official").IShadowRoot;
        readonly slot: Promise<string>;
        readonly tagName: Promise<string>;
        closest(selectors: string): ISuperElement;
        computedStyleMap(): import("../../base/interfaces/official").IStylePropertyMapReadOnly;
        getAttribute(qualifiedName: string): Promise<string | null>;
        getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
        getAttributeNames(): Promise<Iterable<string>>;
        getAttributeNode(qualifiedName: string): Promise<import("../../base/interfaces/official").IAttr | null>;
        getAttributeNodeNS(namespace: string | null, localName: string): Promise<import("../../base/interfaces/official").IAttr | null>;
        getBoundingClientRect(): Promise<import("../../base/interfaces/official").IDOMRect>;
        getClientRects(): Promise<import("../../base/interfaces/official").IDOMRectList>;
        getElementsByClassName(classNames: string): ISuperHTMLCollection;
        getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
        getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
        hasAttribute(qualifiedName: string): Promise<boolean>;
        hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
        hasAttributes(): Promise<boolean>;
        hasPointerCapture(pointerId: number): Promise<boolean>;
        matches(selectors: string): Promise<boolean>;
        requestFullscreen(options?: import("../../base/interfaces/official").IFullscreenOptions | undefined): Promise<void>;
        requestPointerLock(): Promise<void>;
        scrollIntoView(arg?: boolean | import("../../base/interfaces/official").IScrollIntoViewOptions | undefined): Promise<void>;
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
        readonly nextElementSibling: ISuperElement;
        readonly previousElementSibling: ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: ISuperHTMLCollection;
        readonly firstElementChild: ISuperElement;
        readonly lastElementChild: ISuperElement;
        querySelector(selectors: string): ISuperElement;
        querySelectorAll(selectors: string): ISuperNodeList;
        readonly style: import("../../base/interfaces/official").ICSSStyleDeclaration;
        readonly contentEditable: Promise<string>;
        readonly isContentEditable: Promise<boolean>;
        blur(): Promise<void>;
        focus(): Promise<void>;
    };
};
export default class HTMLSelectElement extends HTMLSelectElementBaseClass implements IHTMLSelectElement {
    constructor();
    get form(): IHTMLFormElement;
    get labels(): ISuperNodeList;
    get options(): IHTMLOptionsCollection;
    get selectedOptions(): ISuperHTMLCollection;
    item(index: number): ISuperElement;
    namedItem(name: string): IHTMLOptionElement;
}
export {};
