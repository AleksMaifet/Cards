import {Dispatch} from "redux";
import {registerUser} from "../ApiRequests/registApi";

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
            return {...state, error: "Email or password are invailid. Please, try registration again"}
        default:
            return state
    }
}
export const setRegisteredSuccessfull = () => {
    return {
        type: "registration/SET-REGISTERED-SUCCESSFULL",
    } as const
}
export const setNotRegistered = () => {
    return {
        type: "registration/SET-NOT-REGISTERED"
    } as const
}
export const registrationTC = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        registerUser(email, password)
            .then(res => dispatch(setRegisteredSuccessfull()))
            .catch(err => dispatch(setNotRegistered()))
    }
}