import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Reemplaza con tu URL base
});

export default api;
