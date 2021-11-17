import axios from 'axios';
const BASE_URL = 'http://localhost:3030/'
const API_SERVICE = axios.create({
    baseURL: BASE_URL
})

export { API_SERVICE }
