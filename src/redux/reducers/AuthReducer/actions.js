import * as CONSTANTS from "./constant";
import { magic } from "../../../magic-sdk/magic-sdk";

export const Login = (email) => async (dispatch) => {
  dispatch({ type: CONSTANTS.AUTH_LOADING });
  try {
    await magic.auth.loginWithMagicLink({ email });
    const userMetaData = await magic.user.getMetadata();
    const Token = await magic.user.getIdToken();
    localStorage.setItem("token", Token);
    localStorage.setItem("user", JSON.stringify(userMetaData));
    dispatch({
      type: CONSTANTS.AUTH_SUCCESS,
      payload: { userMetaData, Token },
    });
  } catch (error) {
    dispatch({ type: CONSTANTS.AUTH_FAILED, payload: error });
  }
};

export const Logout = () => async (dispatch) => {
  dispatch({ type: CONSTANTS.AUTH_LOADING });
  try {
    await magic.user.logout();

    localStorage.clear();
    dispatch({
      type: CONSTANTS.AUTH_LOGOUT,
    });
  } catch (error) {
    dispatch({ type: CONSTANTS.AUTH_FAILED, payload: error });
  }
};
