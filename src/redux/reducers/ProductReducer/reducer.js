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

    default:
      return state;
  }
}
