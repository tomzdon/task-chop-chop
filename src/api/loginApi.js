import axios from "axios";
import { baseUrl } from "../config";

export function loginUser(username, password) {
  return axios(`${baseUrl}/auth`, {
    method: "POST",
    data: JSON.stringify({ username, password }),
  })
    .then((data) => localStorage.setItem("token", data.data.data.token))
    .catch((error) => error);
}
