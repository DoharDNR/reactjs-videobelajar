// export const reqData = { message: "tidak ada request" };
export const resData = { message: "tidak ada respond" };

const Create = (data) => {
  if (localStorage.getItem("email")) {
    return (resData.message = "Akun Sudah Ada, Silahkan Login!!!");
  }

  console.log("data masuk ke server", data);
  localStorage.setItem("email", data.email);
  localStorage.setItem("nama", data.fullname);
  localStorage.setItem("password", data.password);
  resData.message = "Register Berhasil !!!";
};

const Read = {
  login: {
    email: localStorage.getItem("email"),
    fullname: localStorage.getItem("nama"),
    password: localStorage.getItem("password"),
  },
};

// export const tryRegister = (reqData) => {
//   console.log("request masuk", reqData);
// };

export { Create, Read };
