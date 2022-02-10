import { getDirname } from "../../utils/path.js";
import ConnectedComponent from "../ConnectedComponent.js";

const __dirname = getDirname(import.meta.url);

let template = document.createElement("template");
template.innerHTML = /*html*/ `
    <style>
        @import url("styles/reset.css");
        @import url("${__dirname}/ListComponent.css");
    </style>
    <div class="container">
      <div class="card list-container">
      </div>
    </div>
`;

class ListComponent extends ConnectedComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this._shadow = this.attachShadow({ mode: "closed" });
    this._shadow.appendChild(template.content.cloneNode(true));
    this._render();
  }
  _mapStateToProps(state){    
    return state.shoppingLists;
  }

  _onListItemClick(item){
    const container = this._shadow.querySelector('.container');
    const secondCard = container.querySelector("ul.card")
    console.log(secondCard);
    if(secondCard) container.removeChild(secondCard);
    const ul = document.createElement("ul");
    ul.classList.add("card","second-list");
    item.items.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item.name;
      ul.appendChild(li);
    });
    container.appendChild(ul);
    this._shadow.querySelector('.container').appendChild(ul);
  }

  async _render() {
    const listContainer = this._shadow.querySelector(".list-container");
    listContainer.innerHTML = "";
    
    for (const item of this._state) {
      const listItem = document.createElement("list-item");
      await listContainer.appendChild(listItem);
      const attachedItem = listContainer.querySelector('list-item:last-of-type');
      attachedItem.onClick(this._onListItemClick.bind(this,item));
      attachedItem.setState(item);
    }
  }
}

export const registerListComponent = () =>
  customElements.define("list-component", ListComponent);
