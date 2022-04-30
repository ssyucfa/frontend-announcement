import { makeAutoObservable } from "mobx";
import AuthService, { auth_api } from "../services/AuthService";
import { LoginUserInfo, RegisterUserInfo } from "../types/authUser";
import { UserInfo } from "../types/user";

export default class Store {
    user = {} as UserInfo
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool 
    }

    setUser(user: UserInfo) {
        this.user = user
    }

    async login(user: LoginUserInfo) {
        try {
            const response = await AuthService.login(user)
            console.log(response)
            localStorage.setItem("token", response.data.access_token)
            localStorage.setItem("token_refresh", response.data.refresh_token)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }

    async registration(user: RegisterUserInfo) {
        try {
            const response = await AuthService.registration(user)
            localStorage.setItem("token", response.data.access_token)
            localStorage.setItem("token_refresh", response.data.refresh_token)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem("token")
            localStorage.removeItem("token_refresh")
            this.setAuth(false)
            this.setUser({} as UserInfo)
        } catch (e) {
            console.log(e)
        }
    }

    async checkAuth() {
        this.isLoading = true
        try {
            const response = await auth_api.post("/token/refresh/", {refresh: localStorage.getItem("token_refresh")})
            localStorage.setItem("token", response.data.access_token)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
            localStorage.removeItem("token")
            localStorage.removeItem("token_refresh")
        } finally {
            this.isLoading = false
        }
    }
} 