import axios from "axios";
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const setTokenToAxios = (token) => {
  axios.defaults.headers.common["authorization"] =
    token || localStorage["auth-token"] || "";
};

setTokenToAxios();

const userSignup = async (data) => {
  await axios.post(`${process.env.REACT_APP_HOMEURL}/users`,data)
  .then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
};

const userLogin = (data) => {
  return async (dispatch) => {
    console.log("first: ",process.env.REACT_APP_HOMEURL);
    let res = await axios.post(`${process.env.REACT_APP_HOMEURL}/users/login`, data);
    //store the token in the local
    localStorage.setItem("auth-token", res.data.token);
    setTokenToAxios(res.data.token);
    dispatch({
        type: "FETCH_CURRENT_USER_SUCCESS",
        payload: res.data.user,
      });
      return true;
  };
};

const identifyUser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_CURRENT_USER_START" });

      let user = await axios.get(`${process.env.REACT_APP_HOMEURL}/users`);

      dispatch({
        type: "FETCH_CURRENT_USER_SUCCESS",
        payload: user.data.user,
      });
    } catch (error) {}
  };
};

export { userSignup, userLogin, identifyUser };
