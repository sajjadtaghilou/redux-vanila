import { uuid } from "../utils/uuid.js";

export class ShoppingListModel {
  items = [];
  constructor(name, users, items) {
    this.name = name;
    this._users = users;
    this.items = items;
    this._id = uuid();
  }
  addUser(user) {
    this._users = [...this.users,user];
  }
  removeUser(userId) {
    this._users = this.users.filter((user) => user.id !== userId);
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);
  }
  get id() {
    return this._id;
  }
  get items(){
    return this.items;
  }
  get users(){
    return this.users;
  }
}
