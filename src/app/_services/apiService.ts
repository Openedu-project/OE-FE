import axios, { AxiosInstance }  from "axios";

export const api : AxiosInstance = axios.create({ // create a axios instance
    baseURL: "http://localhost:8088",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
    timeout: 30000,
});
