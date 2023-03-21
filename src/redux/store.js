import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducers/CartReducer/reducer";
import AuthReducer from "./reducers/AuthReducer/reducer";
import productsReducer from "./reducers/ProductReducer/reducer";
// persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({
  productsReducer,
  AuthReducer,
  CartReducer,
});
const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;
