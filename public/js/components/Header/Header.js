var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Header_title, _Header_subtitle;
import Component from '../Component.js';
export default class Header extends Component {
    constructor(title, subtitle, parentElement, cssClasses = '') {
        super(parentElement, 'header', cssClasses);
        _Header_title.set(this, void 0);
        _Header_subtitle.set(this, void 0);
        __classPrivateFieldSet(this, _Header_title, title, "f");
        __classPrivateFieldSet(this, _Header_subtitle, subtitle, "f");
    }
    render() {
        super.render();
        this.element.textContent = __classPrivateFieldGet(this, _Header_title, "f");
        this.element.textContent = __classPrivateFieldGet(this, _Header_subtitle, "f");
    }
}
_Header_title = new WeakMap(), _Header_subtitle = new WeakMap();
