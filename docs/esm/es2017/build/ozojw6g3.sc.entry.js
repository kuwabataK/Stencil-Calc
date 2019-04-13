import { h } from '../mycomponent.core.js';

import { a as calc } from './chunk-a9a7a476.js';

class KsCalc {
    constructor() {
        this.input = "12+4";
        this._input = "12+4";
    }
    componentWillLoad() {
        return this._input = this.input;
    }
    calcText() {
        return calc(this._input);
    }
    handleInputChange(event) {
        this._input = event.target["value"];
        this.changeResult.emit(this.calcText());
    }
    render() {
        return h("div", null,
            h("input", { value: this._input, onChange: (event) => this.handleInputChange(event) }),
            h("div", null, this.calcText()));
    }
    static get is() { return "ks-calc"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_input": {
            "state": true
        },
        "input": {
            "type": String,
            "attr": "input"
        }
    }; }
    static get events() { return [{
            "name": "changeResult",
            "method": "changeResult",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ""; }
}

export { KsCalc };
