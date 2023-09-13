import axios from "axios";

export const baseURL = "https://test.eed.eg/api/";

const mainService = axios.create({
  baseURL: baseURL,
  headers: {
    // Authorization: "Token " + localStorage.getItem("token"),
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default mainService;
