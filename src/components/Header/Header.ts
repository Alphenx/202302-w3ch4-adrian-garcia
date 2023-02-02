import Component from '../Component.js';

export default class Header extends Component {
  #title: string;
  #subtitle: string;
  constructor(
    title: string,
    subtitle: string,
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'header', cssClasses);
    this.#title = title;
    this.#subtitle = subtitle;
  }

  render(): void {
    super.render();
    this.element.textContent = this.#title;
    this.element.textContent = this.#subtitle;
  }
}
