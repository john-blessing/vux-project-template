import axios from 'axios'

var api = axios.create({
    baseURL: '/',
    withCredentials: true,
    timeout: 5000,
});
