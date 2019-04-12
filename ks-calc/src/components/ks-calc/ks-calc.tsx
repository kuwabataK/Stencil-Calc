import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'ks-calc',
  styleUrl: 'ks-calc.css',
  shadow: true
})
export class KsCalc {
  /**
   * 入力
   */
  @Prop() input: string;

  /**
   * 出力
   */
  @Prop() output: number;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    return <div>Hello, World! I'm {this.input}</div>;
  }
}
