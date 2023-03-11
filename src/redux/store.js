import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducers/CartReducer/reducer";
import AuthReducer from "./reducers/AuthReducer/reducer";
import productsReducer from "./reducers/ProductReducer/reducer";
const allReducers = combineReducers({
  productsReducer,
  AuthReducer,
  CartReducer,
});

const store = createStore(allReducers, {}, applyMiddleware(thunk));
export default store;
