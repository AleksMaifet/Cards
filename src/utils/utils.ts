import {Dispatch} from "redux";
import {ActionsType, isPackLoadAC} from "../components/Reducers/PacksReducer";
import {AppHandlerType, isErrorAC} from "../components/Reducers/AppReducer";


export const handleServerError = (err:any,dispatch: Dispatch<AppHandlerType>) => {
	const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
	dispatch(isErrorAC(errorMassage))
}
export const handleSpinnerTimerEnd = (dispatch: Dispatch<ActionsType>) => {
	setTimeout(() => {
	dispatch(isPackLoadAC('success'))
	}, 2000)
}

