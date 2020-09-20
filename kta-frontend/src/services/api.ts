import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:60224/api',
});

export default api;
