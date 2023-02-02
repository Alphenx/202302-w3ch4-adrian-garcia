import Component from '../Component.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'div');
    this.#children = [];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
