export const SearchByInitState = {
    searchByPacks: "",
    searchByCards: "",
}
export type SearchByInitStateType = typeof SearchByInitState
type ActionsType = ReturnType<typeof searchByPacksAC> | ReturnType<typeof searchByCardsAC>
export const searchByReducer = (state: SearchByInitStateType = SearchByInitState, action: ActionsType) => {
    switch (action.type) {
        case "searchBy/SEARCH-PACKS":
            return {...state, searchByPacks: action.text}
        case "searchBy/SEARCH-CARDS":
            return {...state, searchByCards: action.text}
        default:
            return state
    }
}
export const searchByPacksAC = (text: string) => {
    return {
        type: "searchBy/SEARCH-PACKS",
        text,
    } as const
}
export const searchByCardsAC = (text: string) => {
    return {
        type: "searchBy/SEARCH-CARDS",
        text,
    } as const
}
