export const SearchByInitState = {
    searchByCards: "",
}
export type SearchByInitStateType = typeof SearchByInitState
type ActionsType = ReturnType<typeof searchByCardsAC>
export const searchByReducer = (state: SearchByInitStateType = SearchByInitState, action: ActionsType) => {
    switch (action.type) {
        case "searchBy/SEARCH-CARDS":
            return {...state, searchByCards: action.text}
        default:
            return state
    }
}

export const searchByCardsAC = (text: string) => {
    return {
        type: "searchBy/SEARCH-CARDS",
        text,
    } as const
}
