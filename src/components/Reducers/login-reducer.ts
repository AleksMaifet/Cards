import {Dispatch} from "redux";
import {apiLogin} from "../ApiRequests/apiLogin";

type initialStateType = {
    isAuth: boolean
    _id: string | null;
    email: string | null;
    name: string | null;
    avatar?: string | null;

}
const initialState = {
    isAuth: false,
    _id: null,
    email: null,
    name: null,
    avatar: null,
}
type ActionsType = setUserDataType | setLogoutType
export const loginReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case'login-reducer/SET-USER-DATA': {
            return {...state, ...action.data}
        }
        case 'login-reducer/LOGOUT': {
            return {...state, ...action.data}
        }
        default:
            return state
    }
}

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
type setLogoutType = ReturnType<typeof setLogout>
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {

    apiLogin.setLogin(email, password, rememberMe).then((res) => {
        debugger
        const data = {
            isAuth: true,
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            avatar: (res.data.avatar ? res.data.avatar : null),
        }
        dispatch(setUserData(data))
    }).catch((err) => console.log(err))
}
export const logoutTC = () => (dispatch: Dispatch) => {
    apiLogin.logout().then(() => {
            dispatch(setLogout())
        }
    ).catch((err) => console.log(err))
}