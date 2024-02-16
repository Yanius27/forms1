export default class Button {
  constructor() {
    this._element;
    this.#createElement();
  }

  #createElement() {
    const button = document.createElement('button');
    button.classList.add('normalButton');
    button.textContent = 'Click to toggle popover';
    button.setAttribute('type', 'button');
    this._element = button;
  }

  get element() {
    return this._element;
  }
}