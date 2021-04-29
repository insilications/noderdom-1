import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { ISuperHTMLElement, ISuperElement } from '../interfaces/super';
import { IElementCSSInlineStyle, IElementContentEditable, IHTMLHyperlinkElementUtils, IHTMLOrSVGElement, ILinkStyle, INonDocumentTypeChildNode, IParentNode, ISlotable } from '../interfaces/official';
import { IElementIsolate, IHTMLAnchorElementIsolate, IHTMLAreaElementIsolate, IHTMLAudioElementIsolate, IHTMLBRElementIsolate, IHTMLBaseElementIsolate, IHTMLBodyElementIsolate, IHTMLButtonElementIsolate, IHTMLCanvasElementIsolate, IHTMLDListElementIsolate, IHTMLDataElementIsolate, IHTMLDataListElementIsolate, IHTMLDetailsElementIsolate, IHTMLDialogElementIsolate, IHTMLDirectoryElementIsolate, IHTMLDivElementIsolate, IHTMLElementIsolate, IHTMLEmbedElementIsolate, IHTMLFieldSetElementIsolate, IHTMLFontElementIsolate, IHTMLFormElementIsolate, IHTMLFrameElementIsolate, IHTMLFrameSetElementIsolate, IHTMLHRElementIsolate, IHTMLHeadElementIsolate, IHTMLHeadingElementIsolate, IHTMLHtmlElementIsolate, IHTMLIFrameElementIsolate, IHTMLImageElementIsolate, IHTMLInputElementIsolate, IHTMLLIElementIsolate, IHTMLLabelElementIsolate, IHTMLLegendElementIsolate, IHTMLLinkElementIsolate, IHTMLMapElementIsolate, IHTMLMediaElementIsolate, IHTMLMetaElementIsolate, IHTMLMeterElementIsolate, IHTMLModElementIsolate, IHTMLOListElementIsolate, IHTMLObjectElementIsolate, IHTMLOptGroupElementIsolate, IHTMLOptionElementIsolate, IHTMLParagraphElementIsolate, IHTMLParamElementIsolate, IHTMLPreElementIsolate, IHTMLProgressElementIsolate, IHTMLQuoteElementIsolate, IHTMLScriptElementIsolate, IHTMLSelectElementIsolate, IHTMLSlotElementIsolate, IHTMLSourceElementIsolate, IHTMLSpanElementIsolate, IHTMLStyleElementIsolate, IHTMLTableCaptionElementIsolate, IHTMLTableCellElementIsolate, IHTMLTableColElementIsolate, IHTMLTableElementIsolate, IHTMLTableRowElementIsolate, IHTMLTableSectionElementIsolate, IHTMLTemplateElementIsolate, IHTMLTextAreaElementIsolate, IHTMLTimeElementIsolate, IHTMLTitleElementIsolate, IHTMLTrackElementIsolate, IHTMLUListElementIsolate, IHTMLVideoElementIsolate, INodeIsolate } from '../interfaces/isolate';
import { IElementCSSInlineStyleProperties } from '../official-mixins/ElementCSSInlineStyle';
import { IElementContentEditableProperties } from '../official-mixins/ElementContentEditable';
import { IElementIsolateProperties } from '../isolate-mixins/ElementIsolate';
import { IHTMLAnchorElementIsolateProperties } from '../isolate-mixins/HTMLAnchorElementIsolate';
import { IHTMLAreaElementIsolateProperties } from '../isolate-mixins/HTMLAreaElementIsolate';
import { IHTMLAudioElementIsolateProperties } from '../isolate-mixins/HTMLAudioElementIsolate';
import { IHTMLBRElementIsolateProperties } from '../isolate-mixins/HTMLBRElementIsolate';
import { IHTMLBaseElementIsolateProperties } from '../isolate-mixins/HTMLBaseElementIsolate';
import { IHTMLBodyElementIsolateProperties } from '../isolate-mixins/HTMLBodyElementIsolate';
import { IHTMLButtonElementIsolateProperties } from '../isolate-mixins/HTMLButtonElementIsolate';
import { IHTMLCanvasElementIsolateProperties } from '../isolate-mixins/HTMLCanvasElementIsolate';
import { IHTMLDListElementIsolateProperties } from '../isolate-mixins/HTMLDListElementIsolate';
import { IHTMLDataElementIsolateProperties } from '../isolate-mixins/HTMLDataElementIsolate';
import { IHTMLDataListElementIsolateProperties } from '../isolate-mixins/HTMLDataListElementIsolate';
import { IHTMLDetailsElementIsolateProperties } from '../isolate-mixins/HTMLDetailsElementIsolate';
import { IHTMLDialogElementIsolateProperties } from '../isolate-mixins/HTMLDialogElementIsolate';
import { IHTMLDirectoryElementIsolateProperties } from '../isolate-mixins/HTMLDirectoryElementIsolate';
import { IHTMLDivElementIsolateProperties } from '../isolate-mixins/HTMLDivElementIsolate';
import { IHTMLElementIsolateProperties } from '../isolate-mixins/HTMLElementIsolate';
import { IHTMLEmbedElementIsolateProperties } from '../isolate-mixins/HTMLEmbedElementIsolate';
import { IHTMLFieldSetElementIsolateProperties } from '../isolate-mixins/HTMLFieldSetElementIsolate';
import { IHTMLFontElementIsolateProperties } from '../isolate-mixins/HTMLFontElementIsolate';
import { IHTMLFormElementIsolateProperties } from '../isolate-mixins/HTMLFormElementIsolate';
import { IHTMLFrameElementIsolateProperties } from '../isolate-mixins/HTMLFrameElementIsolate';
import { IHTMLFrameSetElementIsolateProperties } from '../isolate-mixins/HTMLFrameSetElementIsolate';
import { IHTMLHRElementIsolateProperties } from '../isolate-mixins/HTMLHRElementIsolate';
import { IHTMLHeadElementIsolateProperties } from '../isolate-mixins/HTMLHeadElementIsolate';
import { IHTMLHeadingElementIsolateProperties } from '../isolate-mixins/HTMLHeadingElementIsolate';
import { IHTMLHtmlElementIsolateProperties } from '../isolate-mixins/HTMLHtmlElementIsolate';
import { IHTMLHyperlinkElementUtilsProperties } from '../official-mixins/HTMLHyperlinkElementUtils';
import { IHTMLIFrameElementIsolateProperties } from '../isolate-mixins/HTMLIFrameElementIsolate';
import { IHTMLImageElementIsolateProperties } from '../isolate-mixins/HTMLImageElementIsolate';
import { IHTMLInputElementIsolateProperties } from '../isolate-mixins/HTMLInputElementIsolate';
import { IHTMLLIElementIsolateProperties } from '../isolate-mixins/HTMLLIElementIsolate';
import { IHTMLLabelElementIsolateProperties } from '../isolate-mixins/HTMLLabelElementIsolate';
import { IHTMLLegendElementIsolateProperties } from '../isolate-mixins/HTMLLegendElementIsolate';
import { IHTMLLinkElementIsolateProperties } from '../isolate-mixins/HTMLLinkElementIsolate';
import { IHTMLMapElementIsolateProperties } from '../isolate-mixins/HTMLMapElementIsolate';
import { IHTMLMediaElementIsolateProperties } from '../isolate-mixins/HTMLMediaElementIsolate';
import { IHTMLMetaElementIsolateProperties } from '../isolate-mixins/HTMLMetaElementIsolate';
import { IHTMLMeterElementIsolateProperties } from '../isolate-mixins/HTMLMeterElementIsolate';
import { IHTMLModElementIsolateProperties } from '../isolate-mixins/HTMLModElementIsolate';
import { IHTMLOListElementIsolateProperties } from '../isolate-mixins/HTMLOListElementIsolate';
import { IHTMLObjectElementIsolateProperties } from '../isolate-mixins/HTMLObjectElementIsolate';
import { IHTMLOptGroupElementIsolateProperties } from '../isolate-mixins/HTMLOptGroupElementIsolate';
import { IHTMLOptionElementIsolateProperties } from '../isolate-mixins/HTMLOptionElementIsolate';
import { IHTMLOrSVGElementProperties } from '../official-mixins/HTMLOrSVGElement';
import { IHTMLParagraphElementIsolateProperties } from '../isolate-mixins/HTMLParagraphElementIsolate';
import { IHTMLParamElementIsolateProperties } from '../isolate-mixins/HTMLParamElementIsolate';
import { IHTMLPreElementIsolateProperties } from '../isolate-mixins/HTMLPreElementIsolate';
import { IHTMLProgressElementIsolateProperties } from '../isolate-mixins/HTMLProgressElementIsolate';
import { IHTMLQuoteElementIsolateProperties } from '../isolate-mixins/HTMLQuoteElementIsolate';
import { IHTMLScriptElementIsolateProperties } from '../isolate-mixins/HTMLScriptElementIsolate';
import { IHTMLSelectElementIsolateProperties } from '../isolate-mixins/HTMLSelectElementIsolate';
import { IHTMLSlotElementIsolateProperties } from '../isolate-mixins/HTMLSlotElementIsolate';
import { IHTMLSourceElementIsolateProperties } from '../isolate-mixins/HTMLSourceElementIsolate';
import { IHTMLSpanElementIsolateProperties } from '../isolate-mixins/HTMLSpanElementIsolate';
import { IHTMLStyleElementIsolateProperties } from '../isolate-mixins/HTMLStyleElementIsolate';
import { IHTMLTableCaptionElementIsolateProperties } from '../isolate-mixins/HTMLTableCaptionElementIsolate';
import { IHTMLTableCellElementIsolateProperties } from '../isolate-mixins/HTMLTableCellElementIsolate';
import { IHTMLTableColElementIsolateProperties } from '../isolate-mixins/HTMLTableColElementIsolate';
import { IHTMLTableElementIsolateProperties } from '../isolate-mixins/HTMLTableElementIsolate';
import { IHTMLTableRowElementIsolateProperties } from '../isolate-mixins/HTMLTableRowElementIsolate';
import { IHTMLTableSectionElementIsolateProperties } from '../isolate-mixins/HTMLTableSectionElementIsolate';
import { IHTMLTemplateElementIsolateProperties } from '../isolate-mixins/HTMLTemplateElementIsolate';
import { IHTMLTextAreaElementIsolateProperties } from '../isolate-mixins/HTMLTextAreaElementIsolate';
import { IHTMLTimeElementIsolateProperties } from '../isolate-mixins/HTMLTimeElementIsolate';
import { IHTMLTitleElementIsolateProperties } from '../isolate-mixins/HTMLTitleElementIsolate';
import { IHTMLTrackElementIsolateProperties } from '../isolate-mixins/HTMLTrackElementIsolate';
import { IHTMLUListElementIsolateProperties } from '../isolate-mixins/HTMLUListElementIsolate';
import { IHTMLVideoElementIsolateProperties } from '../isolate-mixins/HTMLVideoElementIsolate';
import { ILinkStyleProperties } from '../official-mixins/LinkStyle';
import { INodeIsolateProperties } from '../isolate-mixins/NodeIsolate';
import { INonDocumentTypeChildNodeProperties } from '../official-mixins/NonDocumentTypeChildNode';
import { IParentNodeProperties } from '../official-mixins/ParentNode';
import { ISlotableProperties } from '../official-mixins/Slotable';
export declare const getState: (instance: ISuperHTMLElement) => ISuperHTMLElementProperties, setState: (instance: ISuperHTMLElement, properties: Partial<ISuperHTMLElementProperties>) => void, recordProxy: (proxy: ISuperHTMLElement, instance: ISuperHTMLElement) => void;
export declare const awaitedHandler: AwaitedHandler<ISuperHTMLElement>;
export declare const nodeFactory: NodeFactory<ISuperHTMLElement>;
export declare function SuperHTMLElementGenerator(ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>, ElementContentEditable: Constructable<IElementContentEditable>, ElementIsolate: Constructable<IElementIsolate>, HTMLAnchorElementIsolate: Constructable<IHTMLAnchorElementIsolate>, HTMLAreaElementIsolate: Constructable<IHTMLAreaElementIsolate>, HTMLAudioElementIsolate: Constructable<IHTMLAudioElementIsolate>, HTMLBRElementIsolate: Constructable<IHTMLBRElementIsolate>, HTMLBaseElementIsolate: Constructable<IHTMLBaseElementIsolate>, HTMLBodyElementIsolate: Constructable<IHTMLBodyElementIsolate>, HTMLButtonElementIsolate: Constructable<IHTMLButtonElementIsolate>, HTMLCanvasElementIsolate: Constructable<IHTMLCanvasElementIsolate>, HTMLDListElementIsolate: Constructable<IHTMLDListElementIsolate>, HTMLDataElementIsolate: Constructable<IHTMLDataElementIsolate>, HTMLDataListElementIsolate: Constructable<IHTMLDataListElementIsolate>, HTMLDetailsElementIsolate: Constructable<IHTMLDetailsElementIsolate>, HTMLDialogElementIsolate: Constructable<IHTMLDialogElementIsolate>, HTMLDirectoryElementIsolate: Constructable<IHTMLDirectoryElementIsolate>, HTMLDivElementIsolate: Constructable<IHTMLDivElementIsolate>, HTMLElementIsolate: Constructable<IHTMLElementIsolate>, HTMLEmbedElementIsolate: Constructable<IHTMLEmbedElementIsolate>, HTMLFieldSetElementIsolate: Constructable<IHTMLFieldSetElementIsolate>, HTMLFontElementIsolate: Constructable<IHTMLFontElementIsolate>, HTMLFormElementIsolate: Constructable<IHTMLFormElementIsolate>, HTMLFrameElementIsolate: Constructable<IHTMLFrameElementIsolate>, HTMLFrameSetElementIsolate: Constructable<IHTMLFrameSetElementIsolate>, HTMLHRElementIsolate: Constructable<IHTMLHRElementIsolate>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, HTMLHeadingElementIsolate: Constructable<IHTMLHeadingElementIsolate>, HTMLHtmlElementIsolate: Constructable<IHTMLHtmlElementIsolate>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>, HTMLIFrameElementIsolate: Constructable<IHTMLIFrameElementIsolate>, HTMLImageElementIsolate: Constructable<IHTMLImageElementIsolate>, HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>, HTMLLIElementIsolate: Constructable<IHTMLLIElementIsolate>, HTMLLabelElementIsolate: Constructable<IHTMLLabelElementIsolate>, HTMLLegendElementIsolate: Constructable<IHTMLLegendElementIsolate>, HTMLLinkElementIsolate: Constructable<IHTMLLinkElementIsolate>, HTMLMapElementIsolate: Constructable<IHTMLMapElementIsolate>, HTMLMediaElementIsolate: Constructable<IHTMLMediaElementIsolate>, HTMLMetaElementIsolate: Constructable<IHTMLMetaElementIsolate>, HTMLMeterElementIsolate: Constructable<IHTMLMeterElementIsolate>, HTMLModElementIsolate: Constructable<IHTMLModElementIsolate>, HTMLOListElementIsolate: Constructable<IHTMLOListElementIsolate>, HTMLObjectElementIsolate: Constructable<IHTMLObjectElementIsolate>, HTMLOptGroupElementIsolate: Constructable<IHTMLOptGroupElementIsolate>, HTMLOptionElementIsolate: Constructable<IHTMLOptionElementIsolate>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>, HTMLParagraphElementIsolate: Constructable<IHTMLParagraphElementIsolate>, HTMLParamElementIsolate: Constructable<IHTMLParamElementIsolate>, HTMLPreElementIsolate: Constructable<IHTMLPreElementIsolate>, HTMLProgressElementIsolate: Constructable<IHTMLProgressElementIsolate>, HTMLQuoteElementIsolate: Constructable<IHTMLQuoteElementIsolate>, HTMLScriptElementIsolate: Constructable<IHTMLScriptElementIsolate>, HTMLSelectElementIsolate: Constructable<IHTMLSelectElementIsolate>, HTMLSlotElementIsolate: Constructable<IHTMLSlotElementIsolate>, HTMLSourceElementIsolate: Constructable<IHTMLSourceElementIsolate>, HTMLSpanElementIsolate: Constructable<IHTMLSpanElementIsolate>, HTMLStyleElementIsolate: Constructable<IHTMLStyleElementIsolate>, HTMLTableCaptionElementIsolate: Constructable<IHTMLTableCaptionElementIsolate>, HTMLTableCellElementIsolate: Constructable<IHTMLTableCellElementIsolate>, HTMLTableColElementIsolate: Constructable<IHTMLTableColElementIsolate>, HTMLTableElementIsolate: Constructable<IHTMLTableElementIsolate>, HTMLTableRowElementIsolate: Constructable<IHTMLTableRowElementIsolate>, HTMLTableSectionElementIsolate: Constructable<IHTMLTableSectionElementIsolate>, HTMLTemplateElementIsolate: Constructable<IHTMLTemplateElementIsolate>, HTMLTextAreaElementIsolate: Constructable<IHTMLTextAreaElementIsolate>, HTMLTimeElementIsolate: Constructable<IHTMLTimeElementIsolate>, HTMLTitleElementIsolate: Constructable<IHTMLTitleElementIsolate>, HTMLTrackElementIsolate: Constructable<IHTMLTrackElementIsolate>, HTMLUListElementIsolate: Constructable<IHTMLUListElementIsolate>, HTMLVideoElementIsolate: Constructable<IHTMLVideoElementIsolate>, LinkStyle: Constructable<ILinkStyle>, NodeIsolate: Constructable<INodeIsolate>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, ParentNode: Constructable<IParentNode>, Slotable: Constructable<ISlotable>): {
    new (): {
        [index: number]: ISuperElement;
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
        then<TResult1 = ISuperHTMLElement, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLElement) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        readonly style: import("../interfaces/official").ICSSStyleDeclaration;
        readonly contentEditable: Promise<string>;
        readonly isContentEditable: Promise<boolean>;
        readonly attributes: import("../interfaces/official").INamedNodeMap;
        readonly classList: import("../interfaces/official").IDOMTokenList;
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
        readonly part: import("../interfaces/official").IDOMTokenList;
        readonly prefix: Promise<string | null>;
        readonly scrollHeight: Promise<number>;
        readonly scrollLeft: Promise<number>;
        readonly scrollTop: Promise<number>;
        readonly scrollWidth: Promise<number>;
        readonly shadowRoot: import("../interfaces/official").IShadowRoot;
        readonly slot: Promise<string>;
        readonly tagName: Promise<string>;
        closest(selectors: string): ISuperElement;
        getAttribute(qualifiedName: string): Promise<string | null>;
        getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
        getAttributeNames(): Promise<Iterable<string>>;
        getAttributeNode(qualifiedName: string): Promise<import("../interfaces/official").IAttr | null>;
        getAttributeNodeNS(namespace: string | null, localName: string): Promise<import("../interfaces/official").IAttr | null>;
        getBoundingClientRect(): Promise<import("../interfaces/official").IDOMRect>;
        getClientRects(): Promise<import("../interfaces/official").IDOMRectList>;
        getElementsByClassName(classNames: string): import("../interfaces/super").ISuperHTMLCollection;
        getElementsByTagName(qualifiedName: string): import("../interfaces/super").ISuperHTMLCollection;
        getElementsByTagNameNS(namespace: string | null, localName: string): import("../interfaces/super").ISuperHTMLCollection;
        hasAttribute(qualifiedName: string): Promise<boolean>;
        hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
        hasAttributes(): Promise<boolean>;
        hasPointerCapture(pointerId: number): Promise<boolean>;
        matches(selectors: string): Promise<boolean>;
        requestFullscreen(options?: import("../interfaces/official").IFullscreenOptions | undefined): Promise<void>;
        requestPointerLock(): Promise<void>;
        scrollIntoView(arg?: boolean | import("../interfaces/official").IScrollIntoViewOptions | undefined): Promise<void>;
        readonly download: Promise<string>;
        readonly hreflang: Promise<string>;
        readonly referrerPolicy: Promise<string>;
        readonly rel: Promise<string>;
        readonly relList: import("../interfaces/official").IDOMTokenList;
        readonly target: Promise<string>;
        readonly text: Promise<string>;
        readonly type: Promise<string>;
        readonly alt: Promise<string>;
        readonly coords: Promise<string>;
        readonly noHref: Promise<boolean>;
        readonly shape: Promise<string>;
        readonly href: Promise<string>;
        readonly aLink: Promise<string>;
        readonly background: Promise<string>;
        readonly bgColor: Promise<string>;
        readonly link: Promise<string>;
        readonly vLink: Promise<string>;
        readonly autofocus: Promise<boolean>;
        readonly disabled: Promise<boolean>;
        readonly form: import("../interfaces/official").IHTMLFormElement;
        readonly formAction: Promise<string>;
        readonly formEnctype: Promise<string>;
        readonly formMethod: Promise<string>;
        readonly formNoValidate: Promise<boolean>;
        readonly formTarget: Promise<string>;
        readonly labels: import("../interfaces/super").ISuperNodeList;
        readonly name: Promise<string>;
        readonly validationMessage: Promise<string>;
        readonly validity: Promise<import("../interfaces/official").IValidityState>;
        readonly value: Promise<string> | Promise<number>;
        readonly willValidate: Promise<boolean>;
        checkValidity: (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>);
        reportValidity: (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>);
        readonly height: Promise<string> | Promise<number>;
        readonly width: Promise<string> | Promise<number>;
        captureStream: ((frameRequestRate?: number | undefined) => import("../interfaces/official").IMediaStream) & (() => import("../interfaces/official").IMediaStream);
        toDataURL(type?: string | undefined, quality?: any): Promise<string>;
        transferControlToOffscreen(): import("../interfaces/official").IOffscreenCanvas;
        readonly compact: Promise<boolean>;
        readonly options: Promise<import("../interfaces/super").ISuperHTMLCollection> | import("../interfaces/official").IHTMLOptionsCollection;
        readonly open: Promise<boolean>;
        readonly returnValue: Promise<string>;
        close(returnValue?: string | undefined): Promise<void>;
        show(): Promise<void>;
        showModal(): Promise<void>;
        readonly align: Promise<string>;
        readonly src: Promise<string>;
        readonly elements: import("../interfaces/super").ISuperHTMLCollection;
        readonly color: Promise<string>;
        readonly face: Promise<string>;
        readonly size: Promise<string> | Promise<number>;
        readonly acceptCharset: Promise<string>;
        readonly action: Promise<string>;
        readonly autocomplete: Promise<string>;
        readonly encoding: Promise<string>;
        readonly enctype: Promise<string>;
        readonly length: Promise<number>;
        readonly noValidate: Promise<boolean>;
        reset(): Promise<void>;
        submit(): Promise<void>;
        readonly contentDocument: import("../interfaces/super").ISuperDocument;
        readonly frameBorder: Promise<string>;
        readonly longDesc: Promise<string>;
        readonly marginHeight: Promise<string>;
        readonly marginWidth: Promise<string>;
        readonly noResize: Promise<boolean>;
        readonly scrolling: Promise<string>;
        readonly cols: Promise<string> | Promise<number>;
        readonly rows: Promise<string> | Promise<number> | import("../interfaces/super").ISuperHTMLCollection;
        readonly version: Promise<string>;
        readonly hash: Promise<string>;
        readonly host: Promise<string> | ISuperElement;
        readonly hostname: Promise<string>;
        readonly origin: Promise<string>;
        readonly password: Promise<string>;
        readonly pathname: Promise<string>;
        readonly port: Promise<string>;
        readonly protocol: Promise<string>;
        readonly search: Promise<string>;
        readonly username: Promise<string>;
        toString: (() => string) & (() => Promise<string>);
        readonly allow: Promise<string>;
        readonly allowFullscreen: Promise<boolean>;
        readonly allowPaymentRequest: Promise<boolean>;
        readonly csp: Promise<string>;
        readonly featurePolicy: import("../interfaces/official").IFeaturePolicy;
        readonly sandbox: import("../interfaces/official").IDOMTokenList;
        readonly srcdoc: Promise<string>;
        readonly complete: Promise<boolean>;
        readonly crossOrigin: Promise<string | null>;
        readonly currentSrc: Promise<string>;
        readonly decoding: Promise<string>;
        readonly isMap: Promise<boolean>;
        readonly naturalHeight: Promise<number>;
        readonly naturalWidth: Promise<number>;
        readonly sizes: Promise<string> | import("../interfaces/official").IDOMTokenList;
        readonly srcset: Promise<string>;
        readonly useMap: Promise<string>;
        readonly x: Promise<number>;
        readonly y: Promise<number>;
        decode(): Promise<void>;
        readonly accept: Promise<string>;
        readonly checked: Promise<boolean>;
        readonly defaultChecked: Promise<boolean>;
        readonly defaultValue: Promise<string>;
        readonly dirName: Promise<string>;
        readonly files: import("../interfaces/official").IFileList;
        readonly indeterminate: Promise<boolean>;
        readonly inputMode: Promise<string>;
        readonly list: ISuperHTMLElement;
        readonly max: Promise<string> | Promise<number>;
        readonly maxLength: Promise<number>;
        readonly min: Promise<string> | Promise<number>;
        readonly minLength: Promise<number>;
        readonly multiple: Promise<boolean>;
        readonly pattern: Promise<string>;
        readonly placeholder: Promise<string>;
        readonly readOnly: Promise<boolean>;
        readonly required: Promise<boolean>;
        readonly selectionDirection: Promise<string | null>;
        readonly selectionEnd: Promise<number | null>;
        readonly selectionStart: Promise<number | null>;
        readonly step: Promise<string>;
        readonly valueAsDate: Promise<any>;
        readonly valueAsNumber: Promise<number>;
        select: (() => Promise<void>) & (() => Promise<void>);
        setRangeText: ((replacement: string, start?: number | undefined, end?: number | undefined, selectionMode?: "end" | "preserve" | "select" | "start" | undefined) => Promise<void>) & ((replacement: string, start?: number | undefined, end?: number | undefined, selectionMode?: "end" | "preserve" | "select" | "start" | undefined) => Promise<void>);
        setSelectionRange: ((start: number, end: number, direction?: string | undefined) => Promise<void>) & ((start: number, end: number, direction?: string | undefined) => Promise<void>);
        stepDown(n?: number | undefined): Promise<void>;
        stepUp(n?: number | undefined): Promise<void>;
        readonly control: ISuperHTMLElement;
        readonly htmlFor: Promise<string>;
        readonly as: Promise<string>;
        readonly media: Promise<string>;
        readonly areas: import("../interfaces/super").ISuperHTMLCollection;
        readonly HAVE_CURRENT_DATA: number;
        readonly HAVE_ENOUGH_DATA: number;
        readonly HAVE_FUTURE_DATA: number;
        readonly HAVE_METADATA: number;
        readonly HAVE_NOTHING: number;
        readonly NETWORK_EMPTY: number;
        readonly NETWORK_IDLE: number;
        readonly NETWORK_LOADING: number;
        readonly NETWORK_NO_SOURCE: number;
        readonly audioTracks: import("../interfaces/official").IAudioTrackList;
        readonly autoplay: Promise<boolean>;
        readonly buffered: import("../interfaces/official").ITimeRanges;
        readonly controls: Promise<boolean>;
        readonly controlsList: import("../interfaces/official").IDOMTokenList;
        readonly currentTime: Promise<number>;
        readonly defaultMuted: Promise<boolean>;
        readonly defaultPlaybackRate: Promise<number>;
        readonly disableRemotePlayback: Promise<boolean>;
        readonly duration: Promise<number>;
        readonly ended: Promise<boolean>;
        readonly error: import("../interfaces/official").IMediaError;
        readonly loop: Promise<boolean>;
        readonly mediaKeys: import("../interfaces/official").IMediaKeys;
        readonly muted: Promise<boolean>;
        readonly networkState: Promise<number>;
        readonly playbackRate: Promise<number>;
        readonly played: import("../interfaces/official").ITimeRanges;
        readonly preload: Promise<string>;
        readonly readyState: Promise<number> | Promise<import("../interfaces/official").IDocumentReadyState>;
        readonly seekable: import("../interfaces/official").ITimeRanges;
        readonly seeking: Promise<boolean>;
        readonly sinkId: Promise<string>;
        readonly textTracks: import("../interfaces/official").ITextTrackList;
        readonly videoTracks: import("../interfaces/official").IVideoTrackList;
        readonly volume: Promise<number>;
        canPlayType(type: string): Promise<import("../interfaces/official").ICanPlayTypeResult>;
        load(): Promise<void>;
        pause(): Promise<void>;
        play(): Promise<void>;
        setSinkId(sinkId: string): Promise<void>;
        readonly content: Promise<string> | import("../interfaces/official").IDocumentFragment;
        readonly httpEquiv: Promise<string>;
        readonly scheme: Promise<string>;
        readonly high: Promise<number>;
        readonly low: Promise<number>;
        readonly optimum: Promise<number>;
        readonly cite: Promise<string>;
        readonly dateTime: Promise<string>;
        readonly reversed: Promise<boolean>;
        readonly start: Promise<number>;
        readonly archive: Promise<string>;
        readonly border: Promise<string>;
        readonly code: Promise<string>;
        readonly codeBase: Promise<string>;
        readonly codeType: Promise<string>;
        readonly data: Promise<string>;
        readonly declare: Promise<boolean>;
        readonly hspace: Promise<number>;
        readonly standby: Promise<string>;
        readonly vspace: Promise<number>;
        readonly label: Promise<string>;
        readonly defaultSelected: Promise<boolean>;
        readonly index: Promise<number>;
        readonly selected: Promise<boolean>;
        readonly dataset: Promise<Record<string, string>>;
        readonly nonce: Promise<string>;
        readonly tabIndex: Promise<number>;
        blur(): Promise<void>;
        focus(): Promise<void>;
        readonly valueType: Promise<string>;
        readonly position: Promise<number>;
        readonly async: Promise<boolean>;
        readonly charset: Promise<string>;
        readonly defer: Promise<boolean>;
        readonly event: Promise<string>;
        readonly noModule: Promise<boolean>;
        readonly selectedIndex: Promise<number>;
        readonly selectedOptions: import("../interfaces/super").ISuperHTMLCollection;
        item(index: number): ISuperElement;
        namedItem(name: string): import("../interfaces/official").IHTMLOptionElement;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
        assignedElements(options?: import("../interfaces/official").IAssignedNodesOptions | undefined): Promise<Iterable<ISuperElement>>;
        assignedNodes(options?: import("../interfaces/official").IAssignedNodesOptions | undefined): Promise<Iterable<import("../interfaces/super").ISuperNode>>;
        readonly ch: Promise<string>;
        readonly chOff: Promise<string>;
        readonly span: Promise<number>;
        readonly vAlign: Promise<string>;
        readonly caption: import("../interfaces/official").IHTMLTableCaptionElement;
        readonly cellPadding: Promise<string>;
        readonly cellSpacing: Promise<string>;
        readonly frame: Promise<string>;
        readonly rules: Promise<string>;
        readonly summary: Promise<string>;
        readonly tBodies: import("../interfaces/super").ISuperHTMLCollection;
        readonly tFoot: import("../interfaces/official").IHTMLTableSectionElement;
        readonly tHead: import("../interfaces/official").IHTMLTableSectionElement;
        readonly cells: import("../interfaces/super").ISuperHTMLCollection;
        readonly rowIndex: Promise<number>;
        readonly sectionRowIndex: Promise<number>;
        deleteCell(index: number): Promise<void>;
        insertCell(index?: number | undefined): import("../interfaces/official").IHTMLTableCellElement;
        readonly textLength: Promise<number>;
        readonly wrap: Promise<string>;
        setCustomValidity(error: string): Promise<void>;
        readonly ERROR: number;
        readonly LOADED: number;
        readonly LOADING: number;
        readonly NONE: number;
        readonly default: Promise<boolean>;
        readonly kind: Promise<string>;
        readonly srclang: Promise<string>;
        readonly track: Promise<import("../interfaces/official").ITextTrack>;
        readonly poster: Promise<string>;
        readonly videoHeight: Promise<number>;
        readonly videoWidth: Promise<number>;
        getVideoPlaybackQuality(): import("../interfaces/official").IVideoPlaybackQuality;
        readonly sheet: import("../interfaces/super").ISuperStyleSheet;
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
        readonly childNodes: import("../interfaces/super").ISuperNodeList;
        readonly firstChild: import("../interfaces/super").ISuperNode;
        readonly isConnected: Promise<boolean>;
        readonly lastChild: import("../interfaces/super").ISuperNode;
        readonly nextSibling: import("../interfaces/super").ISuperNode;
        readonly nodeName: Promise<string>;
        readonly nodeType: Promise<number>;
        readonly nodeValue: Promise<string | null>;
        readonly ownerDocument: import("../interfaces/super").ISuperDocument;
        readonly parentElement: ISuperElement;
        readonly parentNode: import("../interfaces/super").ISuperNode;
        readonly previousSibling: import("../interfaces/super").ISuperNode;
        readonly textContent: Promise<string | null>;
        compareDocumentPosition(other: INodeIsolate): Promise<number>;
        contains(other: INodeIsolate | null): Promise<boolean>;
        getRootNode(options?: import("../interfaces/official").IGetRootNodeOptions | undefined): import("../interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: INodeIsolate | null): Promise<boolean>;
        isSameNode(otherNode: INodeIsolate | null): Promise<boolean>;
        lookupNamespaceURI(prefix: string | null): Promise<string | null>;
        lookupPrefix(namespace: string | null): Promise<string | null>;
        normalize(): Promise<void>;
        readonly nextElementSibling: ISuperElement;
        readonly previousElementSibling: ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: import("../interfaces/super").ISuperHTMLCollection;
        readonly firstElementChild: ISuperElement;
        readonly lastElementChild: ISuperElement;
        querySelector(selectors: string): ISuperElement;
        querySelectorAll(selectors: string): import("../interfaces/super").ISuperNodeList;
        readonly assignedSlot: import("../interfaces/official").IHTMLSlotElement;
    };
};
export interface ISuperHTMLElementProperties extends IElementCSSInlineStyleProperties, IElementContentEditableProperties, IElementIsolateProperties, IHTMLAnchorElementIsolateProperties, IHTMLAreaElementIsolateProperties, IHTMLAudioElementIsolateProperties, IHTMLBRElementIsolateProperties, IHTMLBaseElementIsolateProperties, IHTMLBodyElementIsolateProperties, IHTMLButtonElementIsolateProperties, IHTMLCanvasElementIsolateProperties, IHTMLDListElementIsolateProperties, IHTMLDataElementIsolateProperties, IHTMLDataListElementIsolateProperties, IHTMLDetailsElementIsolateProperties, IHTMLDialogElementIsolateProperties, IHTMLDirectoryElementIsolateProperties, IHTMLDivElementIsolateProperties, IHTMLElementIsolateProperties, IHTMLEmbedElementIsolateProperties, IHTMLFieldSetElementIsolateProperties, IHTMLFontElementIsolateProperties, IHTMLFormElementIsolateProperties, IHTMLFrameElementIsolateProperties, IHTMLFrameSetElementIsolateProperties, IHTMLHRElementIsolateProperties, IHTMLHeadElementIsolateProperties, IHTMLHeadingElementIsolateProperties, IHTMLHtmlElementIsolateProperties, IHTMLHyperlinkElementUtilsProperties, IHTMLIFrameElementIsolateProperties, IHTMLImageElementIsolateProperties, IHTMLInputElementIsolateProperties, IHTMLLIElementIsolateProperties, IHTMLLabelElementIsolateProperties, IHTMLLegendElementIsolateProperties, IHTMLLinkElementIsolateProperties, IHTMLMapElementIsolateProperties, IHTMLMediaElementIsolateProperties, IHTMLMetaElementIsolateProperties, IHTMLMeterElementIsolateProperties, IHTMLModElementIsolateProperties, IHTMLOListElementIsolateProperties, IHTMLObjectElementIsolateProperties, IHTMLOptGroupElementIsolateProperties, IHTMLOptionElementIsolateProperties, IHTMLOrSVGElementProperties, IHTMLParagraphElementIsolateProperties, IHTMLParamElementIsolateProperties, IHTMLPreElementIsolateProperties, IHTMLProgressElementIsolateProperties, IHTMLQuoteElementIsolateProperties, IHTMLScriptElementIsolateProperties, IHTMLSelectElementIsolateProperties, IHTMLSlotElementIsolateProperties, IHTMLSourceElementIsolateProperties, IHTMLSpanElementIsolateProperties, IHTMLStyleElementIsolateProperties, IHTMLTableCaptionElementIsolateProperties, IHTMLTableCellElementIsolateProperties, IHTMLTableColElementIsolateProperties, IHTMLTableElementIsolateProperties, IHTMLTableRowElementIsolateProperties, IHTMLTableSectionElementIsolateProperties, IHTMLTemplateElementIsolateProperties, IHTMLTextAreaElementIsolateProperties, IHTMLTimeElementIsolateProperties, IHTMLTitleElementIsolateProperties, IHTMLTrackElementIsolateProperties, IHTMLUListElementIsolateProperties, IHTMLVideoElementIsolateProperties, ILinkStyleProperties, INodeIsolateProperties, INonDocumentTypeChildNodeProperties, IParentNodeProperties, ISlotableProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    readonly accessKey?: Promise<string>;
    readonly autoCapitalize?: Promise<string>;
    readonly dir?: Promise<string>;
    readonly draggable?: Promise<boolean>;
    readonly hidden?: Promise<boolean>;
    readonly inert?: Promise<boolean>;
    readonly innerText?: Promise<string>;
    readonly lang?: Promise<string>;
    readonly offsetHeight?: Promise<number>;
    readonly offsetLeft?: Promise<number>;
    readonly offsetParent?: ISuperElement;
    readonly offsetTop?: Promise<number>;
    readonly offsetWidth?: Promise<number>;
    readonly spellcheck?: Promise<boolean>;
    readonly title?: Promise<string>;
    readonly translate?: Promise<boolean>;
}
export declare const SuperHTMLElementPropertyKeys: string[];
export declare const SuperHTMLElementConstantKeys: string[];
