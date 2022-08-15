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