import { uuid } from "../utils/uuid";

export class userModel {
  constructor(name) {
    this.name = name;
    this.id = uuid();
  }
  get id() {
    return this.id;
  }
}
