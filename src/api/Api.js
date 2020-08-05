import axios from 'axios';

const Api = axios.create({
    baseURL: "http://localhost:3004/api/",
    timeout: 10000
});

Api.interceptors.request.use(config => {
    config.headers.authorization = localStorage.getItem('token');
    return config;
}, error => Promise.reject(error));


export default Api