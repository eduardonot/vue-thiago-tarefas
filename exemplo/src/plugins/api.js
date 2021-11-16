import axios from 'axios';
const BASE_URL = 'https://ws.apicep.com/cep/'
const API_SERVICE = axios.create({
    baseURL: BASE_URL
})

export { API_SERVICE }
