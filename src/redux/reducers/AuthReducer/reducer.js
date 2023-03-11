import * as CONSTANTS from "./constant";

const initialState = {
  loading: false,
  error: null,
  isAuth: localStorage.getItem("token") ? true : false,
  user: localStorage.getItem("user"),
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONSTANTS.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload.userMetaData,
      };
    case CONSTANTS.AUTH_FAILED:
      return { ...state, loading: false, error: action.payload };

    case CONSTANTS.AUTH_LOGOUT:
      return { ...state, loading: false, isAuth: false, user: {} };
    default:
      return state;
  }
}
