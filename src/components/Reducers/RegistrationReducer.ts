import {Dispatch} from "redux";
import {registerUser} from "../ApiRequests/registApi";
import {isLoadAC} from "./AppReducer";

export type initRegistStateType = typeof initState

export const initState = {
	isRegistered: false,
	error: ""
}
type ActionsType = ReturnType<typeof setRegisteredSuccessfull> | ReturnType<typeof setNotRegistered>

export const registrationReducer = (state = initState , action: ActionsType): initRegistStateType => {
    switch (action.type) {
        case "registration/SET-REGISTERED-SUCCESSFULL":
            return {...state, isRegistered: true}
        case "registration/SET-NOT-REGISTERED":
            return {...state, error: action.error}
        default:
            return state
    }
// >>>>>>>>> Temporary merge branch 2
}
export const setRegisteredSuccessfull = () => {
	return {
		type: "registration/SET-REGISTERED-SUCCESSFULL",
	} as const
}
// <<<<<<<<< Temporary merge branch 1
// export const setNotRegistered = () => {
// 	return {
// 		type: "registration/SET-NOT-REGISTERED"
// 	} as const
// }
// export const registrationTC = (email: string, password: string) => {
// 	return (dispatch: Dispatch) => {
// 		dispatch(isLoadAC(true))
// 		registerUser(email, password)
// 			.then(res => dispatch(setRegisteredSuccessfull()))
// 			.catch(err => dispatch(setNotRegistered()))
// 			.finally(() => dispatch(isLoadAC(false)))
// 	}
// =========
export const setNotRegistered = (error: string) => {
    return {
        type: "registration/SET-NOT-REGISTERED",
        error,
    } as const
}
export const registrationTC = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(isLoadAC('loading'))
        registerUser(email, password)
            .then(res => dispatch(setRegisteredSuccessfull()))
            .catch(err => dispatch(setNotRegistered("Email or password are invailid. Please, try registration again")))
          .finally(() => dispatch(isLoadAC('success')))
    }
}