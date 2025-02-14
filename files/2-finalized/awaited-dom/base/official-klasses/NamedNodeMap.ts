import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { INamedNodeMap, IAttr } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INamedNodeMap, INamedNodeMapProperties>();
export const awaitedHandler = new AwaitedHandler<INamedNodeMap>('NamedNodeMap', getState, setState);
export const nodeFactory = new NodeFactory<INamedNodeMap>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<INamedNodeMap, IAttr>(getState, setState, awaitedHandler);

export function NamedNodeMapGenerator() {
  return class NamedNodeMap implements INamedNodeMap, PromiseLike<INamedNodeMap> {
    constructor() {
      setState(this, {
        createInstanceName: 'createNamedNodeMap',
        createIterableName: 'createAttr',
      });
      // proxy supports indexed property access
      const proxy = new Proxy(this, {
        get(target, prop) {
          if (prop in target) {
            // @ts-ignore
            const value: any = target[prop];
            if (typeof value === 'function') return value.bind(target);
            return value;
          }

          // delegate to indexer property
          if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop as unknown as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
          }

          // delegate to string indexer
          if(typeof prop === 'string') {
            return target.getNamedItem(prop as string);
          }
        },
      });

      return proxy;
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public getNamedItem(qualifiedName: string): Promise<IAttr | null> {
      return awaitedHandler.runMethod<IAttr | null>(this, 'getNamedItem', [qualifiedName]);
    }

    public getNamedItemNS(namespace: string | null, localName: string): Promise<IAttr | null> {
      return awaitedHandler.runMethod<IAttr | null>(this, 'getNamedItemNS', [namespace, localName]);
    }

    public item(index: number): Promise<IAttr | null> {
      return awaitedHandler.runMethod<IAttr | null>(this, 'item', [index]);
    }

    public then<TResult1 = INamedNodeMap, TResult2 = never>(onfulfilled?: ((value: INamedNodeMap) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): Iterator<IAttr> {
      return awaitedIterator.iterateNodePointers(this);
    }

    [index: number]: IAttr;

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, NamedNodeMapPropertyKeys, NamedNodeMapConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INamedNodeMapProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const NamedNodeMapPropertyKeys = ['length'];

export const NamedNodeMapConstantKeys = [];
