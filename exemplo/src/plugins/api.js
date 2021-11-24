import axios from 'axios';
const BASE_URL = 'http://localhost:3030/'
const API_SERVICE = axios.create({
    baseURL: BASE_URL
})

// TODO:  interceptor request para usar o token
// TODO:  interceptor response para armazenar o token

export { API_SERVICE }
