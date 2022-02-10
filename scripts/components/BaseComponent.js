class BaseComponent extends HTMLElement {
  constructor() {
    super();
  }

  setState(newState) {
    if (this._state !== newState) {
      this._state = newState;
      this._render();
    }
  }
  
  _render() {
    throw new Error("You have to implement the method render!");
  }
}

export default BaseComponent;
