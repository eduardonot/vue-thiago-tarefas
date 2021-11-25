import axios from 'axios';

const BASE_URL = "http://localhost:3030/"
const token = localStorage.getItem('token')

const API_SERVICE = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Authorization': token || ''
    },

})
API_SERVICE.interceptors.request.use((config) =>{
    const accessToken = localStorage.getItem('token')
    if(accessToken){
        config.headers['Authorization'] = accessToken
    }
    return(config)
}, function (error) {
    return Promise.reject(error)    
})

API_SERVICE.interceptors.response.use( (config) => {
    if(config.config.headers.Authorization !== localStorage.getItem('token')){
        config.config.headers.Authorization = localStorage.getItem('token')
    }
    return(config)
}, function (error) {
    return Promise.reject(error)    
})

// TODO:  interceptor request para usar o token
// TODO:  interceptor response para armazenar o token


export { API_SERVICE }
