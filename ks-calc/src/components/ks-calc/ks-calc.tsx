import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';
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

  /**
   * 内部で持っている入力の状態
   */
  @State() _input: string = "12+4"

  /**
   * 計算結果が変わったときに結果を返すEvent
   * Angularで言うところの '@Output'
   * 
   * @return {number} 計算結果 
   */
  @Event() changeResult: EventEmitter

  /**
   * コンポーネントロード時に、Prop()で渡された値をStateに設定
   */
  componentWillLoad() {
    return this._input = this.input
  }

  /**
   * 入力された文字列から計算結果を返す
   */
  private calcText() {
    return calc(this._input);
  }

  /**
   * inputの中身が変わったときに結果を再計算し、
   * changeResultイベントを発火して呼び出し元に伝える
   * 
   * @param event  
   */
  handleInputChange(event: Event) {
    this._input = event.target["value"]
    this.changeResult.emit(this.calcText())
  }

  render() {
    return <div>
      <input value={this._input} onChange={(event) => this.handleInputChange(event)} />
      <div>{this.calcText()}</div>
    </div>
  }
}
