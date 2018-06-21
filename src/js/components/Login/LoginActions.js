import axios from "axios";
import { history } from "./../../history";

export const authenticateUser = (username, password) => {
  const getAuth = axios.post("/api/users/login", { username, password })
  return (dispatch, state) => {
    dispatch({
      type: "AUTH_USER",
      payload:
        getAuth
          .then((res) => {
            return res
          })
          .catch((err) => {
            return err
          })
    })
  }
}