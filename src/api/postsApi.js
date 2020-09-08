import axios from "axios";
import { baseUrl } from "../config";

const token = localStorage.getItem("token");

export function getPosts() {
  return axios(`${baseUrl}/posts`, {
    headers: {
      "X-Token": localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  }).then((data) => data.data.data);
}

export function getPost(id) {
  return axios(`${baseUrl}/posts/${id}`, {
    headers: {
      "X-Token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((data) => data.data.data)
    .catch((error) => error);
}

export function getPostsSort(order) {
  return axios(`${baseUrl}/posts?orderBy=${order}`, {
    headers: {
      "X-Token": token,
    },
  })
    .then((data) => data.data.data)
    .catch((error) => error);
}

export function getPagePosts(page) {
  return axios(`${baseUrl}/posts?page=${page}`, {
    headers: {
      "X-Token": token,
    },
    responseType: "json",
  })
    .then((data) => data.data.data)
    .catch((error) => error);
}

export function addTimePost(time, id) {
  return axios(`${baseUrl}/time/${id}`, {
    method: "PUT",
    headers: {
      "X-Token": token,
    },
    data: JSON.stringify({ time }),
  })
    .then((data) => console.log(data))
    .catch((error) => error);
}
