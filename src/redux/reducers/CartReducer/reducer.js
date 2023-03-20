import * as CONSTANTS from "./constant";

const initialState = {
  cartItems: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.ADD_TO_CART:
      if (action.payload.quantity !== 1) {
        const newCartItems = state.cartItems.map((item) =>
          item.id !== action.payload.id ? item : action.payload
        );
        return { cartItems: newCartItems };
      } else return { cartItems: [...state.cartItems, action.payload] };

    case CONSTANTS.REMOVE_FROM_CART:
      if (action.payload.quantity !== 0) {
        const newCartItems = state.cartItems.map((item) =>
          item.id !== action.payload.id ? item : action.payload
        );
        return { cartItems: newCartItems };
      } else
        return {
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
    default:
      return state;
  }
}
