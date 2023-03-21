import * as CONSTANTS from "./constant";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: CONSTANTS.PRODUCT_LOADING });
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/ebee18cb-838a-440f-bf61-e406587748a2"
    );
    const data = await res.json();
    const products_with_quantity = data.map((product) => ({
      ...product,
      quantity: 0,
    }));

    if (data) {
      dispatch({
        type: CONSTANTS.PRODUCT_FETCH_SUCCESS,
        payload: products_with_quantity,
      });
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.PRODUCT_FETCH_FAILED, payload: error });
  }
};

export const quantityPlus = (product) => async (dispatch) => {
  dispatch({
    type: CONSTANTS.QUANTITY_UPDATE,
    payload: { ...product, quantity: product.quantity + 1 },
  });
};

export const quantityDecrease = (product) => async (dispatch) => {
  dispatch({
    type: CONSTANTS.QUANTITY_UPDATE,
    payload: { ...product, quantity: product.quantity - 1 },
  });
};
