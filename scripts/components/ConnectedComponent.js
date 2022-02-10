import store from "../store/store.js";
import BaseComponent from "./BaseComponent.js";

class ConnectedComponent extends BaseComponent {
  constructor() {
    super();
    this._listener = this._listener.bind(this);
  }
  
  _listener (oldState, newState) {
    const oldStateChunk = this._mapStateToProps(oldState);
    const newStateChunk = this._mapStateToProps(newState);
    if (oldStateChunk !== newStateChunk) {
      this.setState(newStateChunk);
    }
  }
  
  connectedCallback() {
    store.subscribe(this._listener);
    this._state = this._mapStateToProps(store.getState())
  }
  
  disconnectedCallback() {
    store.unsubscribe(this._listener);
  }

  _mapStateToProps(state){
    throw new Error("You have to implement the method mapStateToProps!");  
  }
}

export default ConnectedComponent;
