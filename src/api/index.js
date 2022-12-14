import HttpService from "../services/services";

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

export const getProductsByPage = async (page) => {
  const res = await HttpService.get(`products?_page=${page}&_limit=5`);
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