import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IXPathEvaluator, IXPathEvaluatorBase } from '../interfaces/official';
import { IXPathEvaluatorBaseProperties } from '../official-mixins/XPathEvaluatorBase';
export declare const getState: (instance: IXPathEvaluator) => IXPathEvaluatorProperties, setState: (instance: IXPathEvaluator, properties: Partial<IXPathEvaluatorProperties>) => void, recordProxy: (proxy: IXPathEvaluator, instance: IXPathEvaluator) => void;
export declare const awaitedHandler: AwaitedHandler<IXPathEvaluator>;
export declare function XPathEvaluatorGenerator(XPathEvaluatorBase: Constructable<IXPathEvaluatorBase>): {
    new (): {
        createExpression(expression: string, resolver?: ((prefix: string | null) => string | null) | {
            lookupNamespaceURI(prefix: string | null): string | null;
        } | null | undefined): import("../interfaces/official").IXPathExpression;
        evaluate(expression: string, contextNode: import("../interfaces/isolate").INodeIsolate, resolver?: ((prefix: string | null) => string | null) | {
            lookupNamespaceURI(prefix: string | null): string | null;
        } | null | undefined, type?: number | undefined, result?: import("../interfaces/official").IXPathResult | null | undefined): import("../interfaces/official").IXPathResult;
    };
};
export interface IXPathEvaluatorProperties extends IXPathEvaluatorBaseProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const XPathEvaluatorPropertyKeys: never[];
export declare const XPathEvaluatorConstantKeys: never[];
