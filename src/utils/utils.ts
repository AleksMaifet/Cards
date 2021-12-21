import {Dispatch} from "redux";
import {ActionsType, isPackLoadAC} from "../components/Reducers/PacksReducer";
import {AppHandlerType, isLoadAC} from "../components/Reducers/AppReducer";


export const handleServerError = (err:any) => {
	const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
	alert(errorMassage)
}
export const handleSpinnerTimerEnd = (dispatch: Dispatch<ActionsType>) => {
		setTimeout(() => {
		return dispatch(isPackLoadAC('success'))
	}, 1000)
}
export const handleSpinnerEnd = (dispatch: Dispatch<AppHandlerType>) => {
	dispatch(isLoadAC('success'))
}
