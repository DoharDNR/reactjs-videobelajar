// export const resData = { message: "tidak ada respond" };

// const Create = (data) => {
//   if (localStorage.getItem("email")) {
//     return (resData.message = "Akun Sudah Ada, Silahkan Login!!!");
//   }

//   console.log("data masuk ke server", data);
//   localStorage.setItem("email", data.email);
//   localStorage.setItem("nama", data.fullname);
//   localStorage.setItem("password", data.password);
//   resData.message = "Register Berhasil !!!";
// };

// const Read = {
//   login: {
//     email: localStorage.getItem("email"),
//     fullname: localStorage.getItem("nama"),
//     password: localStorage.getItem("password"),
//   },
// };

// export { Create, Read };

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
export const AUTH_URL = import.meta.env.VITE_API_AUTH;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const post = async (url, body) => {
  try {
    const { data } = await axiosInstance.post(url, body);
    return data;
  } catch (err) {
    console.error("Error", err);
    throw err;
  }
};

export const get = async (url) => {
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (err) {
    console.error("Error", err);
    throw err;
  }
};

export const put = async (url, body) => {
  try {
    const { data } = await axiosInstance.put(url, body);
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export default axiosInstance;
