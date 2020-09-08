import axios from "axios";
import { baseUrl } from "../config";

const token = localStorage.getItem("token");

export function getAuthorDetail(id) {
  return axios(`${baseUrl}/author/${id}`, {
    headers: {
      "X-Token": token,
    },
  })
    .then((data) => data.data.data)
    .catch((error) => error);
}
