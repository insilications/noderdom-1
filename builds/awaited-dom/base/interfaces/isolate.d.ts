import { ISuperNodeList, ISuperNode, ISuperDocument, ISuperElement, ISuperHTMLCollection, ISuperHTMLElement, ISuperText } from './super';
import { IGetRootNodeOptions, IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, IDocumentReadyState, IVisibilityState, INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList, IFullscreenOptions, IScrollIntoViewOptions, IHTMLFormElement, IValidityState, IMediaStream, IOffscreenCanvas, IHTMLOptionsCollection, IFileList, ISelectionMode, IAudioTrackList, ITimeRanges, IMediaError, IMediaKeys, ITextTrackList, IVideoTrackList, ICanPlayTypeResult, IVideoPlaybackQuality, IDocumentFragment, IHTMLOptionElement, IAssignedNodesOptions, IHTMLTableCaptionElement, IHTMLTableSectionElement, IHTMLTableCellElement, ITextTrack, IShadowRootMode, ICSSRuleList, ICSSRule } from './official';
export interface INodeIsolate {
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
    readonly firstChild: ISuperNode;
    readonly isConnected: Promise<boolean>;
    readonly lastChild: ISuperNode;
    readonly nextSibling: ISuperNode;
    readonly nodeName: Promise<string>;
    readonly nodeType: Promise<number>;
    readonly nodeValue: Promise<string | null>;
    readonly ownerDocument: ISuperDocument;
    readonly parentElement: ISuperElement;
    readonly parentNode: ISuperNode;
    readonly previousSibling: ISuperNode;
    readonly textContent: Promise<string | null>;
    compareDocumentPosition(other: INodeIsolate): Promise<number>;
    contains(other: INodeIsolate | null): Promise<boolean>;
    getRootNode(options?: IGetRootNodeOptions): ISuperNode;
    hasChildNodes(): Promise<boolean>;
    isDefaultNamespace(namespace: string | null): Promise<boolean>;
    isEqualNode(otherNode: INodeIsolate | null): Promise<boolean>;
    isSameNode(otherNode: INodeIsolate | null): Promise<boolean>;
    lookupNamespaceURI(prefix: string | null): Promise<string | null>;
    lookupPrefix(namespace: string | null): Promise<string | null>;
    normalize(): Promise<void>;
}
export interface IHTMLDocumentIsolate {
}
export interface IDocumentIsolate {
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
    readonly readyState: Promise<IDocumentReadyState> | Promise<number>;
    readonly referrer: Promise<string>;
    readonly scripts: ISuperHTMLCollection;
    readonly scrollingElement: ISuperElement;
    readonly title: Promise<string>;
    readonly visibilityState: Promise<IVisibilityState>;
    exitFullscreen(): Promise<void>;
    exitPointerLock(): Promise<void>;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByName(elementName: string): ISuperNodeList;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
    hasFocus(): Promise<boolean>;
}
export interface IElementIsolate {
    readonly attributes: INamedNodeMap;
    readonly classList: IDOMTokenList;
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
    readonly part: IDOMTokenList;
    readonly prefix: Promise<string | null>;
    readonly scrollHeight: Promise<number>;
    readonly scrollLeft: Promise<number>;
    readonly scrollTop: Promise<number>;
    readonly scrollWidth: Promise<number>;
    readonly shadowRoot: IShadowRoot;
    readonly slot: Promise<string>;
    readonly tagName: Promise<string>;
    closest(selectors: string): ISuperElement;
    getAttribute(qualifiedName: string): Promise<string | null>;
    getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
    getAttributeNames(): Promise<Iterable<string>>;
    getAttributeNode(qualifiedName: string): Promise<IAttr | null>;
    getAttributeNodeNS(namespace: string | null, localName: string): Promise<IAttr | null>;
    getBoundingClientRect(): Promise<IDOMRect>;
    getClientRects(): Promise<IDOMRectList>;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
    hasAttribute(qualifiedName: string): Promise<boolean>;
    hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
    hasAttributes(): Promise<boolean>;
    hasPointerCapture(pointerId: number): Promise<boolean>;
    matches(selectors: string): Promise<boolean>;
    requestFullscreen(options?: IFullscreenOptions): Promise<void>;
    requestPointerLock(): Promise<void>;
    scrollIntoView(arg?: boolean | IScrollIntoViewOptions): Promise<void>;
}
export interface IHTMLMediaElementIsolate {
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
    readonly audioTracks: IAudioTrackList;
    readonly autoplay: Promise<boolean>;
    readonly buffered: ITimeRanges;
    readonly controls: Promise<boolean>;
    readonly controlsList: IDOMTokenList;
    readonly crossOrigin: Promise<string | null>;
    readonly currentSrc: Promise<string>;
    readonly currentTime: Promise<number>;
    readonly defaultMuted: Promise<boolean>;
    readonly defaultPlaybackRate: Promise<number>;
    readonly disableRemotePlayback: Promise<boolean>;
    readonly duration: Promise<number>;
    readonly ended: Promise<boolean>;
    readonly error: IMediaError;
    readonly loop: Promise<boolean>;
    readonly mediaKeys: IMediaKeys;
    readonly muted: Promise<boolean>;
    readonly networkState: Promise<number>;
    readonly playbackRate: Promise<number>;
    readonly played: ITimeRanges;
    readonly preload: Promise<string>;
    readonly readyState: Promise<IDocumentReadyState> | Promise<number>;
    readonly seekable: ITimeRanges;
    readonly seeking: Promise<boolean>;
    readonly sinkId: Promise<string>;
    readonly src: Promise<string>;
    readonly textTracks: ITextTrackList;
    readonly videoTracks: IVideoTrackList;
    readonly volume: Promise<number>;
    canPlayType(type: string): Promise<ICanPlayTypeResult>;
    load(): Promise<void>;
    pause(): Promise<void>;
    play(): Promise<void>;
    setSinkId(sinkId: string): Promise<void>;
}
export interface IAttrIsolate {
    readonly localName: Promise<string>;
    readonly name: Promise<string>;
    readonly namespaceURI: Promise<string | null>;
    readonly ownerElement: ISuperElement;
    readonly prefix: Promise<string | null>;
    readonly specified: Promise<boolean>;
    readonly value: Promise<string> | Promise<number>;
}
export interface ICharacterDataIsolate {
    readonly data: Promise<string>;
    readonly length: Promise<number>;
    substringData(offset: number, count: number): Promise<string>;
}
export interface ITextIsolate {
    readonly wholeText: Promise<string>;
    splitText(offset: number): Promise<ISuperText>;
}
export interface IDocumentFragmentIsolate {
}
export interface IShadowRootIsolate {
    readonly delegatesFocus: Promise<boolean>;
    readonly host: Promise<string> | ISuperElement;
    readonly innerHTML: Promise<string>;
    readonly mode: Promise<IShadowRootMode>;
}
export interface IDocumentTypeIsolate {
    readonly name: Promise<string>;
    readonly publicId: Promise<string>;
    readonly systemId: Promise<string>;
}
export interface IRadioNodeListIsolate {
    readonly value: Promise<string>;
    [index: number]: ISuperNode;
}
export interface INodeListIsolate {
    readonly length: Promise<number>;
    item(index: number): ISuperNode;
    forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeListIsolate) => void, thisArg?: any): Promise<void>;
    entries(): Promise<IterableIterator<[number, ISuperNode]>>;
    keys(): Promise<IterableIterator<number>>;
    values(): Promise<IterableIterator<ISuperNode>>;
    [Symbol.iterator](): Iterator<ISuperNode>;
    [index: number]: ISuperNode;
}
export interface IHTMLCollectionBaseIsolate {
    readonly length: Promise<number>;
    item(index: number): ISuperElement;
    [Symbol.iterator](): Iterator<ISuperElement>;
    [index: number]: ISuperElement;
}
export interface IHTMLOptionsCollectionIsolate {
}
export interface IHTMLCollectionIsolate {
    namedItem(name: string): ISuperElement;
    [index: number]: ISuperElement;
}
export interface ICSSStyleSheetIsolate {
    readonly cssRules: ICSSRuleList;
    readonly ownerRule: ICSSRule;
    deleteRule(index: number): Promise<void>;
    insertRule(rule: string, index?: number): Promise<number>;
}
export interface IStyleSheetIsolate {
}
export interface IHTMLElementIsolate {
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
}
export interface IHTMLAnchorElementIsolate {
    readonly download: Promise<string>;
    readonly hreflang: Promise<string>;
    readonly referrerPolicy: Promise<string>;
    readonly rel: Promise<string>;
    readonly relList: IDOMTokenList;
    readonly target: Promise<string>;
    readonly text: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLAreaElementIsolate {
    readonly alt: Promise<string>;
    readonly coords: Promise<string>;
    readonly download: Promise<string>;
    readonly hreflang: Promise<string>;
    readonly noHref: Promise<boolean>;
    readonly referrerPolicy: Promise<string>;
    readonly rel: Promise<string>;
    readonly relList: IDOMTokenList;
    readonly shape: Promise<string>;
    readonly target: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLBRElementIsolate {
}
export interface IHTMLBaseElementIsolate {
    readonly href: Promise<string>;
    readonly target: Promise<string>;
}
export interface IHTMLBodyElementIsolate {
    readonly aLink: Promise<string>;
    readonly background: Promise<string>;
    readonly bgColor: Promise<string>;
    readonly link: Promise<string>;
    readonly text: Promise<string>;
    readonly vLink: Promise<string>;
}
export interface IHTMLButtonElementIsolate {
    readonly autofocus: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly formAction: Promise<string>;
    readonly formEnctype: Promise<string>;
    readonly formMethod: Promise<string>;
    readonly formNoValidate: Promise<boolean>;
    readonly formTarget: Promise<string>;
    readonly labels: ISuperNodeList;
    readonly name: Promise<string>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string> | Promise<number>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLCanvasElementIsolate {
    readonly height: Promise<number> | Promise<string>;
    readonly width: Promise<number> | Promise<string>;
    captureStream(frameRequestRate?: number): IMediaStream;
    toDataURL(type?: string, quality?: any): Promise<string>;
    transferControlToOffscreen(): IOffscreenCanvas;
}
export interface IHTMLDListElementIsolate {
    readonly compact: Promise<boolean>;
}
export interface IHTMLDataElementIsolate {
    readonly value: Promise<string> | Promise<number>;
}
export interface IHTMLDataListElementIsolate {
    readonly options: Promise<ISuperHTMLCollection> | IHTMLOptionsCollection;
}
export interface IHTMLDetailsElementIsolate {
    readonly open: Promise<boolean>;
}
export interface IHTMLDialogElementIsolate {
    readonly open: Promise<boolean>;
    readonly returnValue: Promise<string>;
    close(returnValue?: string): Promise<void>;
    show(): Promise<void>;
    showModal(): Promise<void>;
}
export interface IHTMLDirectoryElementIsolate {
    readonly compact: Promise<boolean>;
}
export interface IHTMLDivElementIsolate {
    readonly align: Promise<string>;
}
export interface IHTMLEmbedElementIsolate {
    readonly align: Promise<string>;
    readonly height: Promise<number> | Promise<string>;
    readonly name: Promise<string>;
    readonly src: Promise<string>;
    readonly type: Promise<string>;
    readonly width: Promise<number> | Promise<string>;
}
export interface IHTMLFieldSetElementIsolate {
    readonly disabled: Promise<boolean>;
    readonly elements: ISuperHTMLCollection;
    readonly form: IHTMLFormElement;
    readonly name: Promise<string>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLFontElementIsolate {
    readonly color: Promise<string>;
    readonly face: Promise<string>;
    readonly size: Promise<string> | Promise<number>;
}
export interface IHTMLFormElementIsolate {
    readonly acceptCharset: Promise<string>;
    readonly action: Promise<string>;
    readonly autocomplete: Promise<string>;
    readonly encoding: Promise<string>;
    readonly enctype: Promise<string>;
    readonly length: Promise<number>;
    readonly name: Promise<string>;
    readonly noValidate: Promise<boolean>;
    readonly target: Promise<string>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    reset(): Promise<void>;
    submit(): Promise<void>;
}
export interface IHTMLFrameElementIsolate {
    readonly contentDocument: ISuperDocument;
    readonly frameBorder: Promise<string>;
    readonly longDesc: Promise<string>;
    readonly marginHeight: Promise<string>;
    readonly marginWidth: Promise<string>;
    readonly name: Promise<string>;
    readonly noResize: Promise<boolean>;
    readonly scrolling: Promise<string>;
    readonly src: Promise<string>;
}
export interface IHTMLFrameSetElementIsolate {
    readonly cols: Promise<string> | Promise<number>;
    readonly rows: Promise<string> | ISuperHTMLCollection | Promise<number>;
}
export interface IHTMLHRElementIsolate {
}
export interface IHTMLHeadElementIsolate {
}
export interface IHTMLHeadingElementIsolate {
    readonly align: Promise<string>;
}
export interface IHTMLHtmlElementIsolate {
    readonly version: Promise<string>;
}
export interface IHTMLIFrameElementIsolate {
    readonly align: Promise<string>;
    readonly allow: Promise<string>;
    readonly allowFullscreen: Promise<boolean>;
    readonly allowPaymentRequest: Promise<boolean>;
    readonly contentDocument: ISuperDocument;
    readonly csp: Promise<string>;
    readonly featurePolicy: IFeaturePolicy;
    readonly frameBorder: Promise<string>;
    readonly height: Promise<number> | Promise<string>;
    readonly longDesc: Promise<string>;
    readonly marginHeight: Promise<string>;
    readonly marginWidth: Promise<string>;
    readonly name: Promise<string>;
    readonly referrerPolicy: Promise<string>;
    readonly sandbox: IDOMTokenList;
    readonly scrolling: Promise<string>;
    readonly src: Promise<string>;
    readonly srcdoc: Promise<string>;
    readonly width: Promise<number> | Promise<string>;
}
export interface IHTMLImageElementIsolate {
    readonly alt: Promise<string>;
    readonly complete: Promise<boolean>;
    readonly crossOrigin: Promise<string | null>;
    readonly currentSrc: Promise<string>;
    readonly decoding: Promise<string>;
    readonly height: Promise<number> | Promise<string>;
    readonly isMap: Promise<boolean>;
    readonly naturalHeight: Promise<number>;
    readonly naturalWidth: Promise<number>;
    readonly referrerPolicy: Promise<string>;
    readonly sizes: Promise<string> | IDOMTokenList;
    readonly src: Promise<string>;
    readonly srcset: Promise<string>;
    readonly useMap: Promise<string>;
    readonly width: Promise<number> | Promise<string>;
    readonly x: Promise<number>;
    readonly y: Promise<number>;
    decode(): Promise<void>;
}
export interface IHTMLInputElementIsolate {
    readonly accept: Promise<string>;
    readonly alt: Promise<string>;
    readonly autocomplete: Promise<string>;
    readonly autofocus: Promise<boolean>;
    readonly checked: Promise<boolean>;
    readonly defaultChecked: Promise<boolean>;
    readonly defaultValue: Promise<string>;
    readonly dirName: Promise<string>;
    readonly disabled: Promise<boolean>;
    readonly files: IFileList;
    readonly form: IHTMLFormElement;
    readonly formAction: Promise<string>;
    readonly formEnctype: Promise<string>;
    readonly formMethod: Promise<string>;
    readonly formNoValidate: Promise<boolean>;
    readonly formTarget: Promise<string>;
    readonly height: Promise<number> | Promise<string>;
    readonly indeterminate: Promise<boolean>;
    readonly inputMode: Promise<string>;
    readonly labels: ISuperNodeList;
    readonly list: ISuperHTMLElement;
    readonly max: Promise<string> | Promise<number>;
    readonly maxLength: Promise<number>;
    readonly min: Promise<string> | Promise<number>;
    readonly minLength: Promise<number>;
    readonly multiple: Promise<boolean>;
    readonly name: Promise<string>;
    readonly pattern: Promise<string>;
    readonly placeholder: Promise<string>;
    readonly readOnly: Promise<boolean>;
    readonly required: Promise<boolean>;
    readonly selectionDirection: Promise<string | null>;
    readonly selectionEnd: Promise<number | null>;
    readonly selectionStart: Promise<number | null>;
    readonly size: Promise<string> | Promise<number>;
    readonly src: Promise<string>;
    readonly step: Promise<string>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string> | Promise<number>;
    readonly valueAsDate: Promise<any>;
    readonly valueAsNumber: Promise<number>;
    readonly width: Promise<number> | Promise<string>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    select(): Promise<void>;
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: string): Promise<void>;
    stepDown(n?: number): Promise<void>;
    stepUp(n?: number): Promise<void>;
}
export interface IHTMLLIElementIsolate {
    readonly type: Promise<string>;
    readonly value: Promise<string> | Promise<number>;
}
export interface IHTMLLabelElementIsolate {
    readonly control: ISuperHTMLElement;
    readonly form: IHTMLFormElement;
    readonly htmlFor: Promise<string>;
}
export interface IHTMLLegendElementIsolate {
    readonly align: Promise<string>;
    readonly form: IHTMLFormElement;
}
export interface IHTMLLinkElementIsolate {
    readonly as: Promise<string>;
    readonly crossOrigin: Promise<string | null>;
    readonly href: Promise<string>;
    readonly hreflang: Promise<string>;
    readonly media: Promise<string>;
    readonly referrerPolicy: Promise<string>;
    readonly rel: Promise<string>;
    readonly relList: IDOMTokenList;
    readonly sizes: Promise<string> | IDOMTokenList;
    readonly type: Promise<string>;
}
export interface IHTMLMapElementIsolate {
    readonly areas: ISuperHTMLCollection;
    readonly name: Promise<string>;
}
export interface IHTMLAudioElementIsolate {
}
export interface IHTMLVideoElementIsolate {
    readonly height: Promise<number> | Promise<string>;
    readonly poster: Promise<string>;
    readonly videoHeight: Promise<number>;
    readonly videoWidth: Promise<number>;
    readonly width: Promise<number> | Promise<string>;
    getVideoPlaybackQuality(): IVideoPlaybackQuality;
}
export interface IHTMLMetaElementIsolate {
    readonly content: Promise<string> | IDocumentFragment;
    readonly httpEquiv: Promise<string>;
    readonly name: Promise<string>;
    readonly scheme: Promise<string>;
}
export interface IHTMLMeterElementIsolate {
    readonly high: Promise<number>;
    readonly labels: ISuperNodeList;
    readonly low: Promise<number>;
    readonly max: Promise<string> | Promise<number>;
    readonly min: Promise<string> | Promise<number>;
    readonly optimum: Promise<number>;
    readonly value: Promise<string> | Promise<number>;
}
export interface IHTMLModElementIsolate {
    readonly cite: Promise<string>;
    readonly dateTime: Promise<string>;
}
export interface IHTMLOListElementIsolate {
    readonly compact: Promise<boolean>;
    readonly reversed: Promise<boolean>;
    readonly start: Promise<number>;
    readonly type: Promise<string>;
}
export interface IHTMLObjectElementIsolate {
    readonly align: Promise<string>;
    readonly archive: Promise<string>;
    readonly border: Promise<string>;
    readonly code: Promise<string>;
    readonly codeBase: Promise<string>;
    readonly codeType: Promise<string>;
    readonly contentDocument: ISuperDocument;
    readonly data: Promise<string>;
    readonly declare: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly height: Promise<number> | Promise<string>;
    readonly hspace: Promise<number>;
    readonly name: Promise<string>;
    readonly standby: Promise<string>;
    readonly type: Promise<string>;
    readonly useMap: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly vspace: Promise<number>;
    readonly width: Promise<number> | Promise<string>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLOptGroupElementIsolate {
    readonly disabled: Promise<boolean>;
    readonly label: Promise<string>;
}
export interface IHTMLOptionElementIsolate {
    readonly defaultSelected: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly index: Promise<number>;
    readonly label: Promise<string>;
    readonly selected: Promise<boolean>;
    readonly text: Promise<string>;
    readonly value: Promise<string> | Promise<number>;
}
export interface IHTMLParagraphElementIsolate {
    readonly align: Promise<string>;
}
export interface IHTMLParamElementIsolate {
    readonly name: Promise<string>;
    readonly type: Promise<string>;
    readonly value: Promise<string> | Promise<number>;
    readonly valueType: Promise<string>;
}
export interface IHTMLPreElementIsolate {
    readonly width: Promise<number> | Promise<string>;
}
export interface IHTMLProgressElementIsolate {
    readonly labels: ISuperNodeList;
    readonly max: Promise<string> | Promise<number>;
    readonly position: Promise<number>;
    readonly value: Promise<string> | Promise<number>;
}
export interface IHTMLQuoteElementIsolate {
    readonly cite: Promise<string>;
}
export interface IHTMLScriptElementIsolate {
    readonly async: Promise<boolean>;
    readonly charset: Promise<string>;
    readonly crossOrigin: Promise<string | null>;
    readonly defer: Promise<boolean>;
    readonly event: Promise<string>;
    readonly noModule: Promise<boolean>;
    readonly referrerPolicy: Promise<string>;
    readonly src: Promise<string>;
    readonly text: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLSelectElementIsolate {
    readonly autocomplete: Promise<string>;
    readonly autofocus: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly labels: ISuperNodeList;
    readonly length: Promise<number>;
    readonly multiple: Promise<boolean>;
    readonly name: Promise<string>;
    readonly options: Promise<ISuperHTMLCollection> | IHTMLOptionsCollection;
    readonly required: Promise<boolean>;
    readonly selectedIndex: Promise<number>;
    readonly selectedOptions: ISuperHTMLCollection;
    readonly size: Promise<string> | Promise<number>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string> | Promise<number>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    item(index: number): ISuperElement;
    namedItem(name: string): IHTMLOptionElement;
    reportValidity(): Promise<boolean>;
    [Symbol.iterator](): Iterator<ISuperElement>;
    [index: number]: ISuperElement;
}
export interface IHTMLSlotElementIsolate {
    readonly name: Promise<string>;
    assignedElements(options?: IAssignedNodesOptions): Promise<Iterable<ISuperElement>>;
    assignedNodes(options?: IAssignedNodesOptions): Promise<Iterable<ISuperNode>>;
}
export interface IHTMLSourceElementIsolate {
    readonly media: Promise<string>;
    readonly sizes: Promise<string> | IDOMTokenList;
    readonly src: Promise<string>;
    readonly srcset: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLSpanElementIsolate {
}
export interface IHTMLStyleElementIsolate {
    readonly media: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLTableCaptionElementIsolate {
}
export interface IHTMLTableCellElementIsolate {
}
export interface IHTMLTableColElementIsolate {
    readonly align: Promise<string>;
    readonly ch: Promise<string>;
    readonly chOff: Promise<string>;
    readonly span: Promise<number>;
    readonly vAlign: Promise<string>;
    readonly width: Promise<number> | Promise<string>;
}
export interface IHTMLTableElementIsolate {
    readonly align: Promise<string>;
    readonly bgColor: Promise<string>;
    readonly border: Promise<string>;
    readonly caption: IHTMLTableCaptionElement;
    readonly cellPadding: Promise<string>;
    readonly cellSpacing: Promise<string>;
    readonly frame: Promise<string>;
    readonly rows: Promise<string> | ISuperHTMLCollection | Promise<number>;
    readonly rules: Promise<string>;
    readonly summary: Promise<string>;
    readonly tBodies: ISuperHTMLCollection;
    readonly tFoot: IHTMLTableSectionElement;
    readonly tHead: IHTMLTableSectionElement;
    readonly width: Promise<number> | Promise<string>;
}
export interface IHTMLTableRowElementIsolate {
    readonly align: Promise<string>;
    readonly bgColor: Promise<string>;
    readonly cells: ISuperHTMLCollection;
    readonly ch: Promise<string>;
    readonly chOff: Promise<string>;
    readonly rowIndex: Promise<number>;
    readonly sectionRowIndex: Promise<number>;
    readonly vAlign: Promise<string>;
    deleteCell(index: number): Promise<void>;
    insertCell(index?: number): IHTMLTableCellElement;
}
export interface IHTMLTableSectionElementIsolate {
    readonly align: Promise<string>;
    readonly ch: Promise<string>;
    readonly chOff: Promise<string>;
    readonly rows: Promise<string> | ISuperHTMLCollection | Promise<number>;
    readonly vAlign: Promise<string>;
}
export interface IHTMLTemplateElementIsolate {
    readonly content: Promise<string> | IDocumentFragment;
}
export interface IHTMLTextAreaElementIsolate {
    readonly autocomplete: Promise<string>;
    readonly autofocus: Promise<boolean>;
    readonly cols: Promise<string> | Promise<number>;
    readonly defaultValue: Promise<string>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly inputMode: Promise<string>;
    readonly labels: ISuperNodeList;
    readonly maxLength: Promise<number>;
    readonly minLength: Promise<number>;
    readonly name: Promise<string>;
    readonly placeholder: Promise<string>;
    readonly readOnly: Promise<boolean>;
    readonly required: Promise<boolean>;
    readonly rows: Promise<string> | ISuperHTMLCollection | Promise<number>;
    readonly selectionDirection: Promise<string | null>;
    readonly selectionEnd: Promise<number | null>;
    readonly selectionStart: Promise<number | null>;
    readonly textLength: Promise<number>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string> | Promise<number>;
    readonly willValidate: Promise<boolean>;
    readonly wrap: Promise<string>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    select(): Promise<void>;
    setCustomValidity(error: string): Promise<void>;
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: string): Promise<void>;
}
export interface IHTMLTimeElementIsolate {
    readonly dateTime: Promise<string>;
}
export interface IHTMLTitleElementIsolate {
    readonly text: Promise<string>;
}
export interface IHTMLTrackElementIsolate {
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
    readonly default: Promise<boolean>;
    readonly kind: Promise<string>;
    readonly label: Promise<string>;
    readonly readyState: Promise<IDocumentReadyState> | Promise<number>;
    readonly src: Promise<string>;
    readonly srclang: Promise<string>;
    readonly track: Promise<ITextTrack>;
}
export interface IHTMLUListElementIsolate {
    readonly compact: Promise<boolean>;
    readonly type: Promise<string>;
}
