import axios from "axios";

const $api = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:44382/api/1.0'
})

$api.interceptors.request.use((config) => {
    if (config.headers === undefined) {
        config.headers = {};
    }
    config.headers.Authorization =
        `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default $api;