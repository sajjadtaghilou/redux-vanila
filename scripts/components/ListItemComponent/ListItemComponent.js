import { getDirname } from "../../utils/path.js";
import BaseComponent from "../BaseComponent.js";

const __dirname = getDirname(import.meta.url);

let template = document.createElement("template");
template.innerHTML = /*html*/ `
     <style>
        @import url("styles/reset.css");
        @import url("${__dirname}/ListItemComponent.css");
    </style>
    <div class="list-item-container">
        <p class="list-item-container__name"></p>
    </div>
`;

class ListItemComponent extends BaseComponent {
  connectedCallback() {
    this._shadow = this.attachShadow({ mode: "closed" });
    this._shadow.appendChild(template.content.cloneNode(true));
    this._render();
  }

  _clickHandler;
  onClick(fn){
    this._clickHandler = fn;
  }

  _render() {
    if(!this._state) return;
    const listContainerName = this._shadow.querySelector(
      ".list-item-container__name"
    );
    listContainerName.innerHTML = this._state.name;
    if(this._clickHandler) {
      this._shadow.getRootNode().addEventListener("click",this._clickHandler);
    }
  }
}

export const registerListItemComponent = () =>
  customElements.define("list-item", ListItemComponent);
