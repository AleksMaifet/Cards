import {Dispatch} from "redux";
import {apiLogin, apiUpdate, ResponseLoginType} from "../ApiRequests/apiLogin";
import {isLoadAC} from "./AppReducer";

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
type ActionsType = setUserDataType | setLogoutType | updateUserACType
export const loginReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case'login-reducer/SET-USER-DATA': {
			return {...state, ...action.data}
		}
		case 'login-reducer/LOGOUT': {
			return {...state, ...action.data}
		}
		case "login-reducer/UPDATE-USER":
			return {...state,
			...action.updatedData}
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
type updateUserACType = ReturnType<typeof updateUserAC>
export const updateUserAC = (updatedData:ResponseLoginType) => {
	return {
		type: 'login-reducer/UPDATE-USER',
		updatedData
	} as const
}

type setLogoutType = ReturnType<typeof setLogout>
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
	dispatch(isLoadAC('loading'))
	apiLogin.setLogin(email, password, rememberMe).then((res) => {
		const data = {
			isAuth: true,
			_id: res.data._id,
			email: res.data.email,
			name: res.data.name,
			avatar: (res.data.avatar ? res.data.avatar : null),
		}
		dispatch(setUserData(data))
	}).catch((err) => console.log(err))
		.finally(() => dispatch(isLoadAC('success')))
}
export const logoutTC = () => (dispatch: Dispatch) => {
	dispatch(isLoadAC('loading'))
	apiLogin.logout().then(() => {
			dispatch(setLogout())
		}
	).catch((err) => console.log(err))
		.finally(() => dispatch(isLoadAC('success')))
}

export const updateAvatarTC = (avatar:string | ArrayBuffer | null) => async (dispatch: Dispatch) => {
	dispatch(isLoadAC('loading'))
	const {data:{updatedUser}} = await apiUpdate.me(avatar)
	dispatch(updateUserAC(updatedUser))
		dispatch(isLoadAC('success'))
}