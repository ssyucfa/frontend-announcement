import axios, { AxiosResponse } from "axios";
import { AuthenticatedUserInfo, LoginUserInfo, RegisterUserInfo } from "../types/authUser";

const AUTH_API_URL = "http://127.0.0.1:8000/auth"

export const auth_api = axios.create({
    withCredentials: true,
    baseURL: AUTH_API_URL,
})

export default class AuthService {
    static async login(user: LoginUserInfo): Promise<AxiosResponse<AuthenticatedUserInfo>> {
        return auth_api.post<AuthenticatedUserInfo>("/login/", user)
    }

    static async registration(user: RegisterUserInfo): Promise<AxiosResponse<AuthenticatedUserInfo>> {
        return auth_api.post<AuthenticatedUserInfo>("/registration/", user)
    }

    static async logout(): Promise<void> {
        auth_api.post<AuthenticatedUserInfo>("/logout/")
    }
}