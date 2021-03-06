/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface KsCalc {
    /**
    * 外からの入力
    */
    'input': string;
  }
  interface KsCalcAttributes extends StencilHTMLAttributes {
    /**
    * 外からの入力
    */
    'input'?: string;
    /**
    * 計算結果が変わったときに結果を返すEvent Angularで言うところの '@Output'
    */
    'onChangeResult'?: (event: CustomEvent) => void;
  }

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'KsCalc': Components.KsCalc;
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'ks-calc': Components.KsCalcAttributes;
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLKsCalcElement extends Components.KsCalc, HTMLStencilElement {}
  var HTMLKsCalcElement: {
    prototype: HTMLKsCalcElement;
    new (): HTMLKsCalcElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'ks-calc': HTMLKsCalcElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'ks-calc': HTMLKsCalcElement;
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
