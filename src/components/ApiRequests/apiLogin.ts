import axios, {AxiosResponse} from "axios";
export type ResponseLoginType = {
    avatar?: string;
    created: Date
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: Date
    verified: boolean
    __v: number
    _id: string
}
type ResponseUpdateType = {
    token:string
    tokenDeathTime:number
    updatedUser:ResponseLoginType
}
type ResponseDeleteMeType = {
    info: string;
    error: string;
}
const initial = axios.create(
    {
        baseURL: 'https://neko-back.herokuapp.com/2.0',
        // baseURL:'http://localhost:7542/2.0/',
        withCredentials: true
    }
)

export const apiLogin = {
    setLogin(email: string, password: string, rememberMe: boolean) {
        return initial.post<ResponseLoginType, AxiosResponse<ResponseLoginType>>('auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe
        })


    },
    logout() {
        return initial.delete<ResponseDeleteMeType>('auth/me')
    },
    me() {
        return initial.post<ResponseLoginType>('auth/me')
    },
}

export const apiUpdate = {
    me(avatar:string | ArrayBuffer | null){
        return initial.put<ResponseUpdateType>('auth/me',{avatar:avatar},{})
    }
}

