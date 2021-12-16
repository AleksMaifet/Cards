import {cardsForgotAPI} from "../ApiRequests/apiForgot";
import {Dispatch} from "redux";
import {isLoadAC} from "./AppReducer";

export type initStateType = typeof initState

export const initState = {
	isRecovery: false,
	newPass:false,
	emailRecovery:'',
}


export const forgotReducer = (state = initState, action: ForgotPasswordHandler): initStateType => {
	switch (action.type) {
		case "FORGOT/CHANGE-RECOVERY-STATUS":
		case "FORGOT/CHANGE-NEW-PASSWORD":
			return {
				...state,
				...action.payload
			}
		case "FORGOT/EMAIL-RECOVERY":
			return {
				...state,
				emailRecovery: action.payload.email
			}
		default:
			return state
	}
}


export type ForgotPasswordHandler = ReturnType<typeof forgotPasswordAC> | ReturnType<typeof newPasswordAC> | ReturnType<typeof emailRecoveryAC>

export const forgotPasswordAC = (isRecovery:boolean) => {
	return {
		type:'FORGOT/CHANGE-RECOVERY-STATUS',
		payload:{
			isRecovery
		},
	} as const
}

export const emailRecoveryAC = (email:string) => {
	return {
		type:'FORGOT/EMAIL-RECOVERY',
		payload:{
			email
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
		dispatch(isLoadAC('loading'))
		try {
			const {data: {success}} = await cardsForgotAPI.forgotPassword(email)
			dispatch(forgotPasswordAC(success))
			dispatch(emailRecoveryAC(email))
		} catch (err:any) {
			const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
			alert(errorMassage)
		} finally {
			dispatch(isLoadAC('success'))
		}
	}
}

export const newPasswordTC = (newPass: string, tokenId: string | undefined) => {
	return async (dispatch: Dispatch) => {
		dispatch(isLoadAC('loading'))
		try {
			await cardsForgotAPI.setNewPassword(newPass, tokenId)
			dispatch(newPasswordAC(true))
		} catch (err: any) {
			const errorMassage = err.response ? err.response.data.error : err.messages + ' Check internet connection!'
			alert(errorMassage)
		} finally {
			dispatch(isLoadAC('success'))
		}
	}
}