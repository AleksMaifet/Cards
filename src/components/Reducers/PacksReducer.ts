export type packType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
}
export const PacksInitState = {
    cardPacks: [
        {
            _id: "someID1", user_id: "someUserID", name: "no Name", path: "/del", cardsCount: 25,
            grade: 0, shots: 0, rating: 0, type: "pack", created: "2020", updated: "2020",
            __v: 0
        },
        {
            _id: "someID2", user_id: "someUserID", name: "no Name", path: "/del", cardsCount: 25,
            grade: 0, shots: 0, rating: 0, type: "pack", created: "2020", updated: "2020",
            __v: 0
        },
        {
            _id: "someID3", user_id: "someUserID", name: "no Name", path: "/del", cardsCount: 25,
            grade: 0, shots: 0, rating: 0, type: "pack", created: "2020", updated: "2020",
            __v: 0
        },
    ],
    cardPacksTotalCount: 14,
    maxCardsCount: 25,
    minCardsCount: 4,
    page: 1,
    pageCount: 4
}
type PacksInitStateType = typeof PacksInitState
type ActionsType = ReturnType<typeof addPackAC> | ReturnType<typeof deletePackAC>
export const packsReducer = (state: PacksInitStateType = PacksInitState, action: ActionsType) => {
    switch (action.type) {
        case "packs/ADD-PACK":
            return {
                ...state,
                cardPacks: [
                    ...state.cardPacks,
                    {
                        _id: "someID3" + new Date().toString(), user_id: "someUserID", name: "no Name", path: "/del", cardsCount: 25,
                        grade: 0, shots: 0, rating: 0, type: "pack", created: "2020", updated: "2020",
                        __v: 0
                    },
                ]
            }
        case "packs/DELETE-PACK":
            return {
                ...state,
                cardPacks: state.cardPacks.filter(i => i._id != action.id),
            }
        default:
            return state;
    }
}
export const addPackAC = () => {
    return {
        type: "packs/ADD-PACK",
    } as const
}
export const deletePackAC = (id: string) => {
    return {
        type: "packs/DELETE-PACK",
        id,
    } as const
}