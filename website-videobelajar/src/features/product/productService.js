import firebaseApi from "../../services/firebaseApi";

export const fetchProductApi = async () => {
  const response = await firebaseApi.get("/product.json");
  console.log("productServices", response);
  return response.data;
};
