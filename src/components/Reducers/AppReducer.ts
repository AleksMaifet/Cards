export type IsLoadType = 'idle' | 'loading' | 'success';

export type initStateType = {
	isLoad:IsLoadType
	isLoadAuth: boolean
}

const initState:initStateType = {
	isLoad: 'idle',
	isLoadAuth: true,
}


export const appReducer = (state = initState, action: AppHandlerType): initStateType => {
	switch (action.type) {
		case "APP/IS-LOAD":
			return {
				...state,
				...action.payload,
			}
		case "APP/IS-LOAD-AUTH":
			return {
				...state,
				isLoadAuth:action.isLoad
			}
		default:
			return state
	}
}



export type AppHandlerType = ReturnType<typeof isLoadAC> | ReturnType<typeof isLoadAuthAC>


export const isLoadAC = (isLoad: IsLoadType) => {
	return {
		type: 'APP/IS-LOAD',
		payload: {
			isLoad,
		}
	} as const
}

export const isLoadAuthAC = (isLoad: boolean) => {
	return {
		type: 'APP/IS-LOAD-AUTH',
			isLoad,
	} as const
}