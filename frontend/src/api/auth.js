import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const register = (credentials) => axios.post(`${API_URL}/register`, credentials);
export const getProfile = (token) => axios.get(`${API_URL}/profile`, { headers: { Authorization: `Bearer ${token}` } });