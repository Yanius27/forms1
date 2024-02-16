export default class PopOver {
  constructor() {
    this._element;
    this.#createElement();
  }

  #createElement() {
    const popOver = document.createElement('div');
    popOver.classList.add('popOver');

    const popOverTitleSpan = document.createElement('span'); 
    popOverTitleSpan.classList.add('popOver_title');
    popOverTitleSpan.textContent = 'Popover title';
    popOver.appendChild(popOverTitleSpan);

    const popOverMessageSpan = document.createElement('span'); 
    popOverMessageSpan.classList.add('popOver_message');
    popOverMessageSpan.textContent = 'And here\'s some amazing content. It\'s very engaging. Right?';
    popOver.appendChild(popOverMessageSpan);

    this._element = popOver;
  }

  fixPosition(currentElement, popupElement) {
    const { left, top } = currentElement.getBoundingClientRect();
    popupElement.style.bottom = top - 75 + 'px';
    popupElement.style.left = -25 + 'px';
  }

  get element() {
    return this._element;
  }
}