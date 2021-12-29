import {Dispatch} from "redux";
import {apiLogin, apiUpdate, ResponseLoginType} from "../ApiRequests/apiLogin";
import {isErrorAC, isLoadAC, isLoadAuthAC} from "./AppReducer";


type initialStateType = {
    error: string
    isAuth: boolean
    _id: string | null;
    email: string | null;
    name: string | null;
    avatar?: string | null;

}
const initialState = {
    error: '',
    isAuth: false,
    _id: null,
    email: null,
    name: null,
    avatar: null,
}
type ActionsType = setUserDataType | setLogoutType | updateUserACType | setErrorType
export const loginReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'login-reducer/SET-USER-DATA':
        case 'login-reducer/LOGOUT':
        case 'login-reducer/UPDATE-USER':
            return {
                ...state,
                ...action.data
            }
        case "login-reducer/SET-ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export const setError = (error: string) => {
    return {
        type: 'login-reducer/SET-ERROR',
        error
    } as const

}
type setErrorType = ReturnType<typeof setError>


export const setUserData = (data: initialStateType) => {
    return {
        type: 'login-reducer/SET-USER-DATA',
        data
    } as const
}
type setUserDataType = ReturnType<typeof setUserData>
const setLogout = () => {
    return {
        type: 'login-reducer/LOGOUT',
        data: {
            isAuth: false,
            _id: null,
            email: null,
            name: null,
            avatar: null,
        }
    } as const
}
type updateUserACType = ReturnType<typeof updateUserAC>
export const updateUserAC = (data: ResponseLoginType) => {
    return {
        type: 'login-reducer/UPDATE-USER',
        data
    } as const
}

export const authMeTC = () => (dispatch: Dispatch) => {
    apiLogin.me().then((res) => {
        const data = {
            error: '',
            isAuth: true,
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            avatar: (res.data.avatar ? res.data.avatar : null),
        }
        dispatch(setUserData(data))
    }).catch((err) => console.log(err))
        .finally(() => dispatch(isLoadAuthAC(false)))
}

type setLogoutType = ReturnType<typeof setLogout>
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(isLoadAC('loading'))
    apiLogin.setLogin(email.toLowerCase(), password, rememberMe).then((res) => {
        const data = {
            error: '',
            isAuth: true,
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            avatar: (res.data.avatar ? res.data.avatar : null),
        }
        dispatch(setUserData(data))
    }).catch((err) => {
        dispatch(setError(err.response.data.error))
        dispatch(isErrorAC(err.response.data.error))
    })
        .finally(() => dispatch(isLoadAC('success')))
}

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(isLoadAC('loading'))
    apiLogin.logout().then(() => {
            dispatch(setLogout())
        }
    ).catch((err) => dispatch(isErrorAC(err)))
        .finally(() => dispatch(isLoadAC('success')))
}

export const updateAvatarTC = (avatar: string | ArrayBuffer | null) => async (dispatch: Dispatch) => {
    dispatch(isLoadAC('loading'))
    try {
        const {data: {updatedUser}} = await apiUpdate.me(avatar)
        dispatch(updateUserAC(updatedUser))
    } catch (err: any) {
        const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
        dispatch(isErrorAC(errorMassage))
    } finally {
        dispatch(isLoadAC('success'))
    }
}
