import { h } from '../mycomponent.core.js';

import { b as format } from './chunk-a9a7a476.js';

class MyComponent {
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null,
            "Hello, World! I'm ",
            this.getText());
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        },
        "middle": {
            "type": String,
            "attr": "middle"
        }
    }; }
    static get style() { return ""; }
}

export { MyComponent };
