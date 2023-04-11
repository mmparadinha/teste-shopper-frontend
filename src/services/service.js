import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_BASE_URL;

function getAllProducts() {
  const promise = axios.get(`${URL_BASE}/products`);
  return promise;
}

function postOrder(order) {
  console.log(order);
  const promise = axios.post(`${URL_BASE}/order`, order);
  return promise;
}

export {
  getAllProducts,
  postOrder
};
