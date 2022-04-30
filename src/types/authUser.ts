import { UserInfo } from "./user"

export interface LoginUserInfo {
    username: string
    password: string
}

export interface RegisterUserInfo {
    username: string
    password1: string
    password2: string
}

export interface AuthenticatedUserInfo {
    access_token: string
    refresh_token: string
    user: UserInfo
}