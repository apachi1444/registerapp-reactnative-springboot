import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";

export const login =
  (email, password, msg, setmsg, setEmail, setPass, navigation) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8080/api/getClient",
      { email, password },
      config
    );

    if (data != "") {
      setmsg("Login Done With Succes");
      console.log("this is the data of the login system ", data);
      setEmail("");
      setPass("");
      setTimeout(() => {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
        });
        navigation.navigate("profile");
        setmsg("");
      }, 1600);
    } else {
      setmsg("Invalid username or password");
      setTimeout(() => {
        setmsg("");
      }, 1500);
      setEmail("");
      setPass("");
      dispatch({
        type: USER_LOGIN_FAIL,
      });
    }
  };

export const logout = (navigation) => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  setTimeout(() => {
    navigation.navigate("login-in");
  }, 1000);
};

export const register =
  (name, lastname, email, password, setmsg, navigation) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:8080/api/add",
        { name, lastname, email, password },
        config
      );
      if (data != "") {
        setmsg(data);
        if (data == "Registration Done With Succes !") {
          setTimeout(() => {
            dispatch({
              type: USER_REGISTER_SUCCESS,
              payload: { name, lastname, email, password },
            });
            navigation.goBack("login-in");
            setmsg("");
          }, 1500);
        } else
          setTimeout(() => {
            setmsg("");
          }, 1500);
      }
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateProfile =
  (user, msg, setmsg, navigation) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();
    const id = userInfo.id;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(user);
    const { data } = await axios.put(
      `http://localhost:8080/api/updateProfile/${id}`,
      user,
      config
    );

    if (data != "") {
      setmsg("Update Done With Succes");
      setTimeout(() => {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
        });
        navigation.goBack();
        setmsg("");
      }, 1600);
    } else {
      setmsg("Error While Updating");
      setTimeout(() => {
        setmsg("");
      }, 1500);
    }
  };

export const updatePassword =
  (user, msg, setmsg, navigation) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();
    const id = userInfo.id;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `http://localhost:8080/api/updatePassword/${id}`,
      user,
      config
    );
    console.log("this is the data coming from the api " + data.password);
    if (data != "") {
      setmsg("Update Done With Succes");
      setTimeout(() => {
        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: data,
        });
        navigation.popToTop();
        setmsg("");
      }, 1600);
    } else {
      setmsg("Error While Updating");
      setTimeout(() => {
        setmsg("");
      }, 1500);
    }
  };
