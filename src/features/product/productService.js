import firebaseApi from "../../services/firebaseApi";

export const fetchProductApi = async () => {
  const response = await firebaseApi.get("/product.json");
  return response.data;
};
