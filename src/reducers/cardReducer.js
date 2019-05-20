import { products, card } from "../data-service/data.json";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from "../actions/action-types/card-actions";

const initState = {
  card,
  products
};

const cardReducer = (state = initState, action) => {
  //console.log("hoho", state);
  if (action.type === ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.id);
    let existingItem = state.card.addedItems.find(
      item => action.id === item.id
    );
    if (existingItem) {
      addedItem.quantity += 1;

      return {
        ...state,
        products: state.products,
        card: {
          addedItems: [...state.card.addedItems],
          total: state.card.total + addedItem.price
        }
      };
    } else {
      addedItem.quantity = 1;

      let newTotal = state.card.total + addedItem.price;
      return {
        ...state,
        products: state.products,
        card: {
          addedItems: [...state.card.addedItems, addedItem],
          total: newTotal
        }
      };
    }
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.products.find(item => action.id === item.id);
    console.log(addedItem.quantity);

    if (addedItem.quantity > 1) {
      addedItem.quantity -= 1;
      let newTotal = state.card.total - addedItem.price;
      return {
        ...state,
        products,
        card: {
          addedItems: state.card.addedItems,
          total: newTotal
        }
      };
    }
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.products.find(item => action.id === item.id);
    console.log(addedItem.quantity);
    addedItem.quantity += 1;
    let newTotal = state.card.total + addedItem.price;
    return {
      ...state,

      card: {
        addedItems: state.card.addedItems,
        total: newTotal
      }
    };
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.products.find(item => action.id === item.id);
    let new_items = state.card.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal =
      state.card.total - itemToRemove.price * itemToRemove.quantity;
    itemToRemove.quantity = 0;
    console.log(itemToRemove);
    return {
      ...state,
      products,
      card: {
        addedItems: new_items,
        total: newTotal
      }
    };
  }

  return state;
};

export default cardReducer;
