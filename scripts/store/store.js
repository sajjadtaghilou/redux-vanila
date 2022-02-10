import reducer from "./reducer.js";

class Store {
  _state = {};
  _reducer = null;
  constructor(reducer) {
    this._reducer = reducer;
    this._state = reducer(undefined, { key: "@@INITIAL_ACTION", data: null });
  }

  _subscribers = [];
  subscribe(listener) {
    this._subscribers.push(listener);
  }
  unsubscribe(listener) {
    this._subscribers = this._subscribers.filter(
      (subscriber) => subscriber !== listener
    );
  }

  dispatch(action) {
    const oldState = this._state;
    this._state = this._reducer(this._state, action);
    this._subscribers.forEach((subscriber) =>
      subscriber(oldState, this._state)
    );
  }

  getState() {
    return this._state;
  }
}

const store = new Store(reducer);

export default store;
