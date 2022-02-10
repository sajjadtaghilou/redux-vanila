import { uuid } from "../utils/uuid.js";

export class ShoppingListItemModel {
  constructor(name) {
    this.name = name;
    this._id = uuid();
    this.checked = false;
  }
  toggleChecked() {
    this.checked = !this.checked;
  }
  get id() {
    return this._id;
  }
}
