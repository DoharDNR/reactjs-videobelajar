import axios from "axios";

const firebaseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    auth: import.meta.env.VITE_API_AUTH,
  },
});

export default firebaseApi;
