export type initStateType = typeof initState

export const initState = {
	isLoad: false
}


export const appReducer = (state = initState, action: AppHandlerType): initStateType => {
	switch (action.type) {
		case "APP/IS-LOAD":
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

export type AppHandlerType = ReturnType<typeof isLoadAC>


export const isLoadAC = (isLoad: boolean) => {
	return {
		type: 'APP/IS-LOAD',
		payload: {
			isLoad,
		}
	} as const
}