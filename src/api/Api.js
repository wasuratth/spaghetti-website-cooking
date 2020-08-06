import axios from 'axios';

console.log("ENV" , process.env.NODE_ENV); 

const Api = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER || "http://spaghetti-api.topwork.asia/api/" ,
    timeout: 10000
});

Api.interceptors.request.use(config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}, error => Promise.reject(error));


export default Api