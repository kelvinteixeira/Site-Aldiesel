import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-aldisel.herokuapp.com'
});

