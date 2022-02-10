import { ShoppingListItemModel } from "../models/shoppingListItemModel.js";
import { ShoppingListModel } from "../models/shoppingListModel.js";

const initialState = {
  shoppingLists: [
    new ShoppingListModel("list 1", [], [new ShoppingListItemModel("Cheese"),new ShoppingListItemModel("Yogurt")]),
    new ShoppingListModel("list 2", [], [new ShoppingListItemModel("Bread"),new ShoppingListItemModel("Butter")]),
  ],
  users: [],
};

export const ActionTypes = {
  ADD_USER: "ADD_USER",
  ADD_SHOPPING_LIST: "ADD_SHOPPING_LIST",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_USER: {
      return {
        ...state.shoppingLists,
        users: [...state.uses, action.data],
      };
      break;
    }
    case ActionTypes.ADD_SHOPPING_LIST: {
      return {
        shoppingLists: [...state.shoppingLists, action.data],
        users: state.uses,
      };
      break;
    }

    default:
      break;
  }
  return state;
}
