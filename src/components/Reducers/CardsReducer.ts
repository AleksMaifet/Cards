export type cardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: number
    __v: number
    _id: string
}
export const CardsInitState = {
    cards: [
        {
            answer: "no answer", question: "no question", cardsPack_id: "someID",
            grade: 4.98, rating: 0, shots: 1, type: "card", user_id: "143234",
            created: "2020", updated: 2020, __v: 0, _id: "some ID1"
        },
        {
            answer: "no answer", question: "no question", cardsPack_id: "someID",
            grade: 4.98, rating: 0, shots: 1, type: "card", user_id: "143234",
            created: "2020", updated: 2020, __v: 0, _id: "some ID2"
        },
        {
            answer: "no answer", question: "no question", cardsPack_id: "someID",
            grade: 4.98, rating: 0, shots: 1, type: "card", user_id: "143234",
            created: "2020", updated: 2020, __v: 0, _id: "someID3"
        },
    ],
    cardsTotalCount: 3,
    maxGrade: 4.98,
    minGrade: 2.01,
    page: 1,
    pageCount: 4,
    packUserId: "some pack user ID"
}
export type CardsInitStateType = typeof CardsInitState
type ActionsType = ReturnType<typeof addCardAC> | ReturnType<typeof deleteCardAC>
export const cardsReducer = (state: CardsInitStateType = CardsInitState, action: ActionsType) => {
    switch (action.type) {
        case "cards/ADD-CARD":
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        answer: "no answer", question: "no question", cardsPack_id: "someID",
                        grade: 4.98, rating: 0, shots: 1, type: "card", user_id: "143234",
                        created: "2020", updated: 2020, __v: 0, _id: "some ID" + new Date().toString()
                    },
                ]
            }
        case "cards/DELETE-CARD":
            return {
                ...state,
                cards: state.cards.filter(item => item._id != action.id)
            }

        default:
            return state;
    }
}
export const addCardAC = () => {
    return {
        type: "cards/ADD-CARD",
    } as const
}
export const deleteCardAC = (id: string) => {
    return {
        type: "cards/DELETE-CARD",
        id,
    } as const
}