export const SortByReducerInitState = {
    packs: {
        cardsAmount: 0,
        lastUpdate: 0,
        createdBy: 0,
    },
    cards: {
        lastUpdate: 0,
        grade: 0,
    }
}
export type sortPacksType = {
    cardsAmount: number
    lastUpdate: number
    createdBy: number
}
export type sortCardsType = {
    lastUpdate: number
    grade: number
}

export type SortByInitStateType = {
    packs: sortPacksType
    cards: sortCardsType
}

type ActionsType = ReturnType<typeof sortPackCardsAmountAC>
    | ReturnType<typeof sortPackLastUpdateAC>
    | ReturnType<typeof sortPackCreatedByAC>
    | ReturnType<typeof sortCardsLastUpdateAC>
    | ReturnType<typeof sortCardsGradeAC>

export const sortByReducer = (state: SortByInitStateType = SortByReducerInitState, action: ActionsType) => {
    switch (action.type) {
        case "sortBy/CHANGE-PACK-CARDS-AMOUNT":
            return {
                ...state,
                packs: {
                    ...state.packs,
                    cardsAmount: action.rate
                }
            }
        case "sortBy/CHANGE-PACK-LAST-UPDATE":
            return {
                ...state,
                packs: {
                    ...state.packs,
                    lastUpdate: action.rate
                }
            }
        case "sortBy/CHANGE-PACK-CREATED-BY":
            return {
                ...state,
                packs: {
                    ...state.packs,
                    createdBy: action.rate
                }
            }
        case "sortBy/CHANGE-CARDS-LAST-UPDATE":
            return {
                ...state,
                cards: {
                    ...state.cards,
                    lastUpdate: action.rate
                }
            }
        case "sortBy/CHANGE-CARDS-GRADE":
            return {
                ...state,
                cards: {
                    ...state.cards,
                    grade: action.rate
                }
            }
        default:
            return state
    }
}

export const sortPackCardsAmountAC = (rate: number) => {
    return {
        type: "sortBy/CHANGE-PACK-CARDS-AMOUNT",
        rate,
    } as const
}
export const sortPackLastUpdateAC = (rate: number) => {
    return {
        type: "sortBy/CHANGE-PACK-LAST-UPDATE",
        rate,
    } as const
}
export const sortPackCreatedByAC = (rate: number) => {
    return {
        type: "sortBy/CHANGE-PACK-CREATED-BY",
        rate,
    } as const
}
export const sortCardsLastUpdateAC = (rate: number) => {
    return {
        type: "sortBy/CHANGE-CARDS-LAST-UPDATE",
        rate,
    } as const
}
export const sortCardsGradeAC = (rate: number) => {
    return {
        type: "sortBy/CHANGE-CARDS-GRADE",
        rate,
    } as const
}
