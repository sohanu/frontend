import {
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_FAIL,
  ADD_ITEM_TO_CART_SUCCESS,
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,

  CLEAR_ALL,

  CLEAR_ALL_FAIL,

  CLEAR_ALL_SUCCESS,

  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART_FAIL,
  REMOVE_ITEM_FROM_CART_SUCCESS,
} from "../const/cartconstant";

export const addCartListReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { cart: [] };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        cart: action.payload,
      };

    case ADD_ITEM_TO_CART_FAIL:
      return { error: action.payload };

    case REMOVE_ITEM_FROM_CART:
      return { cart: state.cart };

    case REMOVE_ITEM_FROM_CART_SUCCESS:
      return { cart: state.cart.filter((item) => item.name !== action.payload) };

    case REMOVE_ITEM_FROM_CART_FAIL:
      return { error: action.payload };

    case CART_LIST_REQUEST:
      return {
        cart: [],
      };

    case CART_LIST_SUCCESS:
      return { cart: action.payload };

    case CART_LIST_FAIL:
      return { error: action.payload };
    case CLEAR_ALL:
      return {
        cart: []
      }
    case CLEAR_ALL_SUCCESS:
      return {
        cart: action.payload
      }
    case CLEAR_ALL_FAIL:
      return {
        err: action.payload
      }

    default:
      return state;
  }
};
