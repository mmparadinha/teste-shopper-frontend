import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_BASE_URL;

function getAllProducts() {
  const promise = axios.get(`${URL_BASE}/products`);
  return promise;
}

function getCart() {
  const promise = axios.get(`${URL_BASE}/cart`);
  return promise;
}

export {
  getAllProducts,
  getCart
};
