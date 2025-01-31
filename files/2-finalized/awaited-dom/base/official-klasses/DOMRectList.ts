import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IDOMRectList, IDOMRect } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectList, IDOMRectListProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRectList>('DOMRectList', getState, setState);
export const nodeFactory = new NodeFactory<IDOMRectList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IDOMRectList, IDOMRect>(getState, setState, awaitedHandler);

export function DOMRectListGenerator() {
  return class DOMRectList implements IDOMRectList, PromiseLike<IDOMRectList> {
    constructor() {
      setState(this, {
        createInstanceName: 'createDOMRectList',
        createIterableName: 'createDOMRect',
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
        },
      });

      return proxy;
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public item(index: number): IDOMRect {
      throw new Error('DOMRectList.item not implemented');
    }

    public then<TResult1 = IDOMRectList, TResult2 = never>(onfulfilled?: ((value: IDOMRectList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): Iterator<IDOMRect> {
      return awaitedIterator.iterateNodePointers(this);
    }

    [index: number]: IDOMRect;

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, DOMRectListPropertyKeys, DOMRectListConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const DOMRectListPropertyKeys = ['length'];

export const DOMRectListConstantKeys = [];
