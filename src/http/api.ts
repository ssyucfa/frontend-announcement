import axios from "axios";
import AuthService from "../services/AuthService";

export const API_URL = "http://127.0.0.1:8000"

axios.defaults.withCredentials = true

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL + '/api',
})

api.interceptors.request.use(config => {
    if (config.headers !== undefined) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
})

api.interceptors.response.use(config => {
    return config
}, async (error) => {
    const {response} = error
    const originalRequest = error.config
    if (response?.status === 401 && error.config && !originalRequest?._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.post(`${API_URL}/auth/token/refresh/`, {refresh: localStorage.getItem("token_refresh")})
            localStorage.setItem("token", response.data.access)
            return api.request(originalRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error
} 
)


export default api
