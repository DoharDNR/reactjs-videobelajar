import firebaseApi from "../../services/firebaseApi";

//Create
export const createUserApi = async (payload) => {
  const response = await firebaseApi.post("/users.json", payload);
  return response.data;
};

//Read
export const fetchUsersApi = async () => {
  const response = await firebaseApi.get("/users.json");
  return response.data;
};

//Update
export const updateUserApi = async ({ id, data }) => {
  const response = await firebaseApi.patch(`/users/${id}.json`, data);
  return response.data;
};

//Delete
export const deleteUserApi = async (id) => {
  await firebaseApi.delete(`/users/${id}.json`);
  return id;
};
