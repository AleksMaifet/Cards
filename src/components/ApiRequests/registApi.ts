import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    //for github pages
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    //for local use
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})
export const registerUser = (email: string, password: string) => {
    return instance.post("auth/register", {email, password})
}