export const PaginationReducerInitState = {
    packs: {
        totalCount: 100,
        pageCount: 4,
        pageNumber: 1,
    },
    cards: {
        totalCount: 100,
        pageCount: 4,
        pageNumber: 1,
    }
}
export type packsAndCardsPaginationType = {
    totalCount: number
    pageCount: number
    pageNumber: number
}
export type PaginationReducerStateType = {
    packs: packsAndCardsPaginationType
    cards: packsAndCardsPaginationType
}
type ActionsType =
    | ReturnType<typeof setPacksTotalCount>
    | ReturnType<typeof setPacksPageCount>
    | ReturnType<typeof setPacksPageNumber>
    | ReturnType<typeof setCardsTotalCount>
    | ReturnType<typeof setCardsPageCount>
    | ReturnType<typeof setCardsPageNumber>

export const paginationReducer = (state: PaginationReducerStateType = PaginationReducerInitState, action: ActionsType) => {
    switch (action.type) {
        case "pagination/SET-PACKS-TOTAL-COUNT":
            return {
                ...state,
                packs: {
                    ...state.packs,
                    totalCount: action.value
                }
            }
        case "pagination/SET-PACKS-PAGE-NUMBER":
            return {
                ...state,
                packs: {
                    ...state.packs,
                    pageNumber: action.value
                }
            }
        case "pagination/SET-PACKS-PAGE-COUNT":
            return {
                ...state,
                packs: {
                    ...state.packs,
                    pageCount: action.value
                }
            }
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
                    ...state.packs,
                    pageNumber: action.value
                }
            }
        case "pagination/SET-CARDS-PAGE-COUNT":
            return {
                ...state,
                cards: {
                    ...state.packs,
                    pageCount: action.value
                }
            }
        default:
            return state;
    }
}

export const setPacksTotalCount = (value: number) => {
    return {
        type: "pagination/SET-PACKS-TOTAL-COUNT",
        value,
    } as const
}
export const setPacksPageCount = (value: number) => {
    return {
        type: "pagination/SET-PACKS-PAGE-COUNT",
        value,
    } as const
}
export const setPacksPageNumber = (value: number) => {
    return {
        type: "pagination/SET-PACKS-PAGE-NUMBER",
        value,
    } as const
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