export type IsLoadType = 'idle' | 'loading' | 'success';

export type initStateType = {
	isLoad:IsLoadType
}

const initState:initStateType = {
	isLoad: 'idle',
}


export const appReducer = (state = initState, action: AppHandlerType): initStateType => {
	switch (action.type) {
		case "APP/IS-LOAD":
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export type AppHandlerType = ReturnType<typeof isLoadAC>


export const isLoadAC = (isLoad: IsLoadType) => {
	return {
		type: 'APP/IS-LOAD',
		payload: {
			isLoad,
		}
	} as const
}