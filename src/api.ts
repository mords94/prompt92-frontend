import axios from 'axios';

export const BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  }
});

export const simulateApiRequest = (url: String, payLoad = null, time = 1000) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

export default api;
