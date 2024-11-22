import axios from "axios";


let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
};

const instance = axios.create({
  headers,
  withCredentials: false,
});

export default instance;
