import axios from 'axios';

import config from '../config.json';

const api = axios.create({
  baseURL: config.BASE_API,
  timeout: 1000,
});

export default api;
