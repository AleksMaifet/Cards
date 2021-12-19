export const PaginationReducerInitState = {
    cards: {
        totalCount: 100,
        pageCount: 5,
        pageNumber: 1,
    }
}
export type packsAndCardsPaginationType = {
    totalCount: number
    pageCount: number
    pageNumber: number
}
export type PaginationReducerStateType = {
    cards: packsAndCardsPaginationType
}
type ActionsType =
    | ReturnType<typeof setCardsTotalCount>
    | ReturnType<typeof setCardsPageCount>
    | ReturnType<typeof setCardsPageNumber>

export const paginationReducer = (state: PaginationReducerStateType = PaginationReducerInitState, action: ActionsType) => {
    switch (action.type) {
        case "pagination/SET-CARDS-TOTAL-COUNT":
            return {
                ...state,
                cards: {
                    ...state.cards,
                    totalCount: action.value
                }
            }
        case "pagination/SET-CARDS-PAGE-NUMBER":
            return {
                ...state,
                cards: {
                    ...state.cards,
                    pageNumber: action.value
                }
            }
        case "pagination/SET-CARDS-PAGE-COUNT":
            return {
                ...state,
                cards: {
                    ...state.cards,
                    pageCount: action.value
                }
            }
        default:
            return state;
    }
}

export const setCardsTotalCount = (value: number) => {
    return {
        type: "pagination/SET-CARDS-TOTAL-COUNT",
        value,
    } as const
}
export const setCardsPageCount = (value: number) => {
    return {
        type: "pagination/SET-CARDS-PAGE-COUNT",
        value,
    } as const
}
export const setCardsPageNumber = (value: number) => {
    return {
        type: "pagination/SET-CARDS-PAGE-NUMBER",
        value,
    } as const
}