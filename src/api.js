import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-aldisel.herokuapp.com'
});

export default api;