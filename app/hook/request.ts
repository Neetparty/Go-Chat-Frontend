/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, CancelTokenSource } from "axios"
import { session } from "./session";

const source: CancelTokenSource = axios.CancelToken.source();

type UseRequest<T> = {
    error: any;
    data: T | null;
}

export async function request<T>(url: string, options: AxiosRequestConfig ): Promise<UseRequest<T>> {
    
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_APP_SERVER,
        withCredentials: true,
        cancelToken: source.token,
    })

    const token: string = localStorage.getItem('token') as string
    const refresher: string = localStorage.getItem('refresher') as string

    api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`
        config.headers["Content-Type"] = "application/json"
        config.headers.Accept = "application/json"
        return config
    })

    api.interceptors.response.use((res) => {
        return res
    }, async (error) => {
        const originalRequest = error.config
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true
            return session(token, refresher, (result: any) => {
                originalRequest.headers.Authorization = `Bearer ${ result && result.accessToken}`
                return api(originalRequest)
            })
        }
        return Promise.reject(error)
    })

    try {
        const res = await api<T>(url, options)
        return {
            error: null,
            data: res.data,
        }
    } catch (err: any) {
        return {
            error: err?.response?.data?.message || "Something Went Wronge Try Again Later", 
            data: err?.response?.data?.data
        }        
    }
}

