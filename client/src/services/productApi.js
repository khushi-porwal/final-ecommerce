import api from "./api"; // Your axios instance with token

export const fetchProductsByCategory = async (category) => {
  const res = await api.get(`/products?category=${category}`);
  return res.data;
};
