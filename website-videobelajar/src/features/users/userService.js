import firebaseApi from "../../services/firebaseApi";

export const fetchUsersApi = async () => {
  const response = await firebaseApi.get("/users.json");
  console.log("usersServices", response);
  return response.data;
};

export const createUserApi = async (payload) => {
  const response = await firebaseApi.post("/users.json", payload);
  return response.data;
};
