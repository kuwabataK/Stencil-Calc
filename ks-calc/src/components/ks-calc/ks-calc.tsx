import { Component, Prop, State } from '@stencil/core';
import { calc } from '../../utils/utils';

@Component({
  tag: 'ks-calc',
  styleUrl: 'ks-calc.css',
  shadow: true
})
export class KsCalc {
  /**
   * 外からの入力
   */
  @Prop() input: string = "12+4"

  @State() _input:string = "12+4"

  componentWillLoad() {
    return this._input = this.input
  }

  private calcText(){
    return calc(this._input);
  }

  handleChange(event) {
    this._input = event.target.value;
  }
  render() {
    return <div>
      <input value={this._input} onChange={(event)=>this.handleChange(event)} />
      <div>{this.calcText()}</div>
    </div>
  }
}
