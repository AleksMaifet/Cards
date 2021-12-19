export const rangeReducerInitState = {
    minServer: 0,
    maxServer: 24,
    minUser: 0,
    maxUser: 24
}
export type rangeReducerStateType = typeof rangeReducerInitState
type ActionsType =
    ReturnType<typeof setMaxServerValue> |
    ReturnType<typeof setMinServerValue> |
    ReturnType<typeof setMaxUserValue> |
    ReturnType<typeof setMinUserValue>

export const rangeReducer = (state: rangeReducerStateType = rangeReducerInitState, action: ActionsType) => {
    switch(action.type){
        case "range/SET-MIN-SERVER-VALUE":
            return {...state, minServer: action.value}
        case "range/SET-MAX-SERVER-VALUE":
            return {...state, maxServer: action.value}
        case "range/SET-MIN-USER-VALUE":
            return {...state, minUser: action.value}
        case "range/SET-MAX-USER-VALUE":
            return {...state, maxUser: action.value}
        default:
            return state;
    }
}
export const setMinServerValue = (value: number) => {
    return {
        type: "range/SET-MIN-SERVER-VALUE",
        value
    } as const
}
export const setMaxServerValue = (value: number) => {
    return {
        type: "range/SET-MAX-SERVER-VALUE",
        value
    } as const
}
export const setMinUserValue = (value: number) => {
    return {
        type: "range/SET-MIN-USER-VALUE",
        value
    } as const
}
export const setMaxUserValue = (value: number) => {
    return {
        type: "range/SET-MAX-USER-VALUE",
        value
    } as const
}