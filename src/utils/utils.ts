import {Dispatch} from "redux";
import {ActionsType, isPackLoadAC} from "../components/Reducers/PacksReducer";


export const handleServerError = (err:any) => {
	const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
	alert(errorMassage)
}
export const handleSpinnerTimerEnd = (dispatch: Dispatch<ActionsType>) => {
	setTimeout(() => {
		return dispatch(isPackLoadAC('success'))
	}, 1000)
}

