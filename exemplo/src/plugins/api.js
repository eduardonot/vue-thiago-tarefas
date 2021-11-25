import axios from 'axios';

const BASE_URL = "http://localhost:3030/"
const token = localStorage.getItem('token')

const API_SERVICE = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Authorization': token || ''
    }

})

// TODO:  interceptor request para usar o token
// TODO:  interceptor response para armazenar o token


export { API_SERVICE }
