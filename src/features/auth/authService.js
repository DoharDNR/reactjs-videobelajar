import firebaseApi from "../../services/firebaseApi";

export const loginApi = async (payload) => {
  const response = await firebaseApi.post("users.json", payload);
  if (!response.data.success) {
    throw new Error("Login Gagal");
  }
  return response.data;
};

export const getProfilApi = async () => {
  const response = await firebaseApi.get("users.json");
  return response.data;
};
