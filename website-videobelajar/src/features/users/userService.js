import firebaseApi from "../../services/firebaseApi";

export const fetchUsersApi = async (token) => {
  const response = await firebaseApi.get("/users.json");
  return response.data;
};
