import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLDialogElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLDialogElement, IHTMLDialogElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDialogElement>('HTMLDialogElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLDialogElement>(getState, setState, awaitedHandler);

export function HTMLDialogElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDialogElement extends HTMLElement implements IHTMLDialogElement, PromiseLike<IHTMLDialogElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLDialogElement',
      });
    }

    // properties

    public get open(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'open', false);
    }

    public get returnValue(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'returnValue', false);
    }

    // methods

    public close(returnValue?: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'close', [returnValue]);
    }

    public show(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'show', []);
    }

    public showModal(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'showModal', []);
    }

    public then<TResult1 = IHTMLDialogElement, TResult2 = never>(onfulfilled?: ((value: IHTMLDialogElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLDialogElementPropertyKeys, HTMLDialogElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDialogElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly open?: Promise<boolean>;
  readonly returnValue?: Promise<string>;
}

export const HTMLDialogElementPropertyKeys = [...HTMLElementPropertyKeys, 'open', 'returnValue'];

export const HTMLDialogElementConstantKeys = [...HTMLElementConstantKeys];
