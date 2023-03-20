import * as CONSTANTS from "./constant";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONSTANTS.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case CONSTANTS.PRODUCT_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONSTANTS.QUANTITY_UPDATE:
      const productsWithNewQuantity = state.products.map((product) =>
        product.id !== action.payload.id ? product : action.payload
      );

      return {
        ...state,
        products: productsWithNewQuantity,
      };

    default:
      return state;
  }
}
