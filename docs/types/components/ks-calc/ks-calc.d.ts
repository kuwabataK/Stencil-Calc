import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class KsCalc {
    /**
     * 外からの入力
     */
    input: string;
    /**
     * 内部で持っている入力の状態
     */
    _input: string;
    /**
     * 計算結果が変わったときに結果を返すEvent
     * Angularで言うところの '@Output'
     *
     * @return {number} 計算結果
     */
    changeResult: EventEmitter;
    /**
     * コンポーネントロード時に、Prop()で渡された値をStateに設定
     */
    componentWillLoad(): string;
    /**
     * 入力された文字列から計算結果を返す
     */
    private calcText;
    /**
     * inputの中身が変わったときに結果を再計算し、
     * changeResultイベントを発火して呼び出し元に伝える
     *
     * @param event
     */
    handleInputChange(event: Event): void;
    render(): JSX.Element;
}
