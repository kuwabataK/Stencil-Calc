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
    handleChange(event) {
        this._input = event.target.value;
    }
    render() {
        return h("div", null,
            h("input", { value: this._input, onChange: (event) => this.handleChange(event) }),
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
    static get style() { return ""; }
}

export { KsCalc };
