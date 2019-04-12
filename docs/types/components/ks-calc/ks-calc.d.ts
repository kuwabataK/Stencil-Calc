import '../../stencil.core';
export declare class KsCalc {
    /**
     * 外からの入力
     */
    input: string;
    _input: string;
    componentWillLoad(): string;
    private calcText;
    handleChange(event: any): void;
    render(): JSX.Element;
}
