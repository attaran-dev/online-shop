import HttpService from "../services/services";
import { useNavigate } from "react-router-dom";


export const getUsers = async () => {
  const res = await HttpService.get("users");
  return res.data;
};

export const getUser = async (id) => {
  const res = await HttpService.get(`users/${id}`);
  return res.data;
};

export const getProducts = async () => {
    const res = await HttpService.get("products");
    return res.data;
}

export const getProduct = async (id) => {
    const res = await HttpService.get(`products/${id}`);
    return res.data;
}

export const getOrders = async () => {
    const res = await HttpService.get("orders");
    return res.data;
}

export const getOrder = async (id) => {
    const res = await HttpService.get(`orders/${id}`);
    return res.data;
}

export const getOrdersByPage = async (page, filter) => {
  const res = await HttpService.get(`orders?${filter}&_page=${page}&_limit=5`);
  return res.data;
}

export const getProductsByPage = async (page, limit) => {
  const res = await HttpService.get(`products?_page=${page}&_limit=${limit}`);
  return res.data;
}

export const getPricesByPage = async (page) => {
  const res = await HttpService.get(`stock-price?_page=${page}&_limit=5`);
  return res.data;
}

export const getDelivered = async () => {
  const res = await HttpService.get(`orders?isDelivered=true`);
  return res.data;
}

export const getNotDelivered = async () => {
  const res = await HttpService.get(`orders?isDelivered=false`);
  return res.data;
}

export const getProductsByfilter = async (filter, value, limit) => {
  const res = await HttpService.get(`products?${filter}=${value}&_limit=${limit}`);
  return res.data;
}

export const postProductToCart = async (userId, productData) => {
  const res = await HttpService.patch(`users/${userId}`, productData);
  return res.data;
}

export const deleteProduct = async(productId)=>{
  const res = await HttpService.delete(`products/${productId}`);
  return res.data;
}

export const editProduct = async (productId, productData) => {
  const res = await HttpService.patch(`products/${productId}`, productData);
  return res.data;
}

export const addProduct = async (productData) => {
  const res = await HttpService.post(`products/${productData}`);
  return res.data;
}

// export const getCart = async (userId) => {
// const res = await HttpService.get(`users/${userId}`);
// return res.data;
// }

export const changeCart = async (userId, productId)=>{
const res = await HttpService.post(`users/${userId}`);
return res.data;
}

export const addOrder = async (order) => {
  const res = await HttpService.post(`orders/`, order );
  return res.data;
}

export const changeOrder = async (orderId, data) => {
  const res = await HttpService.patch(`orders/${orderId}`, data );
  return res.data;
}

export const login = async (user) => {
  const res = await HttpService.post(`auth/login`, user )

  return res.data.token;
}

export const postImage = async (image) => {
const {req, res} = await HttpService.post(`upload/`, image);
console.log(req);
console.log(res);
return {req,res};
}