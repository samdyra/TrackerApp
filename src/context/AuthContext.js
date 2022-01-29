import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { ...state, token: action.payload };
    case "add_error":
      return { errorMessage: "", errorMessage: action.payload }; //error message is === empty string to handle UX where => signup with invalid value, then signup again.
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: signup, payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({ type: "add_error", payload: "something went wrong!" });
      console.log(err);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
