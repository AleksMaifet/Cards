export type initStateType = typeof initState

export const initState = {}


export const appReducer = (state = initState , action: any): initStateType => {
	switch (action.type) {
		case '':
		default:
			return state
	}
}