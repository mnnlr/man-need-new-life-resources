import axios from 'axios';

axios.defaults.withCredentials = true;

const customAxios = axios.create({
  baseURL:'http://localhost:7000',
  headers:{'Content-Type':'application/json'},
  withCredentials: true,
});

export default customAxios;
