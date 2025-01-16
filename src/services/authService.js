import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
const register = (userData) => axios.post(`${API_URL}/register`, userData);

export default { login, register };
