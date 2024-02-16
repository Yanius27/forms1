import PopOver from './components/Popover';
import Button from './components/Button';
import createBootStarpElements from './components/BootPopover';
import * as bootstrap from 'bootstrap';

export default class App {
  constructor() {
    this.button = new Button();
    this.button2 = new Button();
    this.popOver = new PopOver();
    this.#drawElement(this.button.element, this.button2.element);
    this.#initBootStrap();
    this.timeoutId;
    this.listener();
  }

  #drawElement(element1, element2) {
    document.body.appendChild(element1);
    document.body.appendChild(element2);
    createBootStarpElements();
  }

  #initBootStrap() {
    const popoverTriggerEl = document.querySelector('[data-bs-toggle="popover"]')
    new bootstrap.Popover(popoverTriggerEl);
  }

  listener() {
    document.querySelectorAll('.normalButton').forEach((el) => {
      el.addEventListener('click', (e) => {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        el.appendChild(this.popOver.element);
        this.popOver.fixPosition(el, this.popOver.element);
        this.timeoutId = setTimeout(() => {
          this.popOver.element.remove();
        }, 5000);
      });
    })
  }
}