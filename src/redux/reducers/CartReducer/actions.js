import { quantityDecrease, quantityPlus } from "../ProductReducer/actions";
import * as CONSTANTS from "./constant";

export const addToCart = (product) => (dispatch) => {
  dispatch(quantityPlus(product));
  dispatch({
    type: CONSTANTS.ADD_TO_CART,
    payload: { ...product, quantity: product.quantity + 1 },
  });
};

export const removeFromCart = (product) => (dispatch) => {
  dispatch(quantityDecrease(product));
  if (product.quantity === 0) {
    dispatch({
      type: CONSTANTS.REMOVE_FROM_CART,
      payload: product,
    });
  } else {
    dispatch({
      type: CONSTANTS.REMOVE_FROM_CART,
      payload: { ...product, quantity: product.quantity - 1 },
    });
  }
};
