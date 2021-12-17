import {cardsForgotAPI} from "../ApiRequests/apiForgot";
import {Dispatch} from "redux";
import {isLoadAC} from "./AppReducer";

export type initStateType = typeof initState

export const initState = {
	isRecovery: false,
	newPass:false,
}


export const forgotReducer = (state = initState, action: ForgotPasswordHandler): initStateType => {
	switch (action.type) {
		case "FORGOT/CHANGE-RECOVERY-STATUS":
		case "FORGOT/CHANGE-NEW-PASSWORD":
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}


export type ForgotPasswordHandler = ReturnType<typeof forgotPasswordAC> | ReturnType<typeof newPasswordAC>

export const forgotPasswordAC = (isRecovery:boolean) => {
	return {
		type:'FORGOT/CHANGE-RECOVERY-STATUS',
		payload:{
			isRecovery
		},
	} as const
}

export const newPasswordAC = (newPass:boolean) => {
	return {
		type:'FORGOT/CHANGE-NEW-PASSWORD',
		payload:{
			newPass
		},
	} as const
}

export const forgotPasswordTC = (email: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(isLoadAC(true))
		try {
			const {data:{success}} = await cardsForgotAPI.forgotPassword(email)
			if(success){
				dispatch(forgotPasswordAC(success))
			}
		}
		catch (e:any){
			alert(e.response.data.error)
		}
		finally {
			dispatch(isLoadAC(false))
		}
	}
}

export const newPasswordTC = (newPass:string,tokenId:string | undefined) => {
	return async (dispatch: Dispatch) => {
		dispatch(isLoadAC(true))
		try {
			const {status} = await cardsForgotAPI.setNewPassword(newPass,tokenId)
			if(status < 400){
				dispatch(newPasswordAC(true))
			}
		}
		catch (e:any){
			alert(e.response.data.error)
		}
		finally {
			dispatch(isLoadAC(false))
		}
	}
}