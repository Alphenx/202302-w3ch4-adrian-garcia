import Component from '../Component.js';

export default class Header extends Component {
  #title: string;
  constructor(
    title: string,
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'header', cssClasses);
    this.#title = title;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `<h1 class="main-title">${this.#title}</h1>`;
  }
}
