// Import Card from '../Card/Card.js';
import Component from '../Component.js';
import Header from '../Header/Header.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'div');
    this.#children = [new Header('Mi título', this.element, 'main-header')];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
    this.element.className = 'container';
  }
}
