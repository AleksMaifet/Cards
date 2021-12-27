import {Dispatch} from "redux";
import {AppStoreType} from "../store/store";
import {AppHandlerType, isLoadAC} from "./AppReducer";
import {apiCards, CardType, ResponseGetCardsType} from "../ApiRequests/apiCards";
import {ThunkDispatch} from "redux-thunk";
import {isPackLoadAC, setPacksPageCount,sortPackCardsAC} from "./PacksReducer";
import {handleServerError, handleSpinnerTimerEnd} from "../../utils/utils";
import {setGrade} from "../ApiRequests/apiGrade";

export const CardsInitState = {
    cards: [] as CardType[],
    cardQuestion:'',
    cardAnswer:'',
    maxCardsCount: 0,
    minCardsCount: 0,
    sortPacksCards:'',
    page:1,
    pageCount: 10,
    cardsTotalCount:0,
    maxGrade: 0,
    minGrade: 0,
    packId:'',
}
export type CardsInitStateType = typeof CardsInitState
type ActionsType =
  ReturnType<typeof setCardsAC>
  | ReturnType<typeof sortPackCardsAC>
  | ReturnType<typeof setPacksPageCount>
  | ReturnType<typeof searchQuestionPackAC>
  | ReturnType<typeof searchAnswerPackAC>
  | ReturnType<typeof setPackIdAC>
  | ReturnType<typeof isPackLoadAC>
  | ReturnType<typeof setCardsPageNumber>
  | ReturnType<typeof updateGradeAC>
export const cardsReducer = (state: CardsInitStateType = CardsInitState, action: ActionsType):CardsInitStateType => {
    switch (action.type) {
        case "cards/SET-CARD":
            return {
                ...state,
                ...action.data
            }
        case "Packs/SORT-PACKS":
        case "Packs/SET-PACKS-PAGE-COUNT":
        case "Packs/SEARCH-ANSWER-CARD":
        case "Packs/SEARCH-QUESTION-CARD":
        case "cards/SET-PACK-ID":
        case "Packs/SET-CARDS-PAGE-NUMBER":
            return {
                ...state,
                ...action.payload
            }
        case "cards/UPDATE-GRADE":
            return {
                ...state,
                cards: state.cards.map(card => card._id === action.card_id ? {...card, grade: +action.grade} : card)
            }
        default:
            return state;
    }
}

export const setPackIdAC = (packId:string) => {
    return {
        type: "cards/SET-PACK-ID",
        payload:{
            packId
        },
    } as const
}

export const setCardsAC = (data:ResponseGetCardsType) => {
    return {
        type: "cards/SET-CARD",
        data,
    } as const
}
export const searchQuestionPackAC = (cardQuestion: string) => {
    return {
        type: "Packs/SEARCH-QUESTION-CARD",
        payload:{
            cardQuestion
        }
    } as const
}
export const setCardsPageNumber = (page: number) => {
    return {
        type: "Packs/SET-CARDS-PAGE-NUMBER",
        payload: {
            page
        },
    } as const
}
export const searchAnswerPackAC = (cardAnswer: string) => {
    return {
        type: "Packs/SEARCH-ANSWER-CARD",
        payload:{
            cardAnswer
        }
    } as const
}
export const updateGradeAC = (grade: string, card_id: string) => {
    return {
        type: 'cards/UPDATE-GRADE',
        grade,
        card_id
    } as const
}
export const setCardTC = () => async (dispatch: Dispatch,getState:() => AppStoreType) => {
    const cardsData = getState().cards
    const params = {
        cardsPack_id:cardsData.packId,
        sortCards:cardsData.sortPacksCards,
        page:cardsData.page,
        pageCount:cardsData.pageCount,
        cardAnswer:cardsData.cardAnswer,
        cardQuestion:cardsData.cardQuestion,
    }
    dispatch(isPackLoadAC('loading'))
    try {
       const {data} =  await apiCards.getCards(params)
        dispatch(setCardsAC(data))
    } catch (err:any) {
        handleServerError(err)
    }
    finally {
        handleSpinnerTimerEnd(dispatch)
    }
}

export const addPackTC = (packId:string,question:string,answer:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>,getState:() => AppStoreType) => {
    const cardsData = getState().cards
    const params = {
        cardsPack_id:packId,
        question,
        answer,
        pageCount:cardsData.pageCount
    }
    dispatch(isPackLoadAC('loading'))
    try {
        await apiCards.postCard(params)
        dispatch(setCardTC())
    } catch (err:any) {
        handleServerError(err)
    }
    finally {
        handleSpinnerTimerEnd(dispatch)
    }
}

export const deleteCardTC = (id:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
    dispatch(isPackLoadAC('loading'))
    try {
        await apiCards.deleteCard(id)
        dispatch(setCardTC())
    } catch (err:any) {
        handleServerError(err)
    }
    finally {
        handleSpinnerTimerEnd(dispatch)
    }
}
export const updateCardTC = (_id:string,question:string,answer:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
    const params = {
        _id,
        question,
        answer
    }
    dispatch(isPackLoadAC('loading'))
    try {
        await apiCards.updateCard(id,title)
        dispatch(setCardTC())
    } catch (err:any) {
        handleServerError(err)
    }
    finally {
        handleSpinnerTimerEnd(dispatch)
    }
}
export const updateGradeTC = (grade: string, card_id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(isLoadAC('loading'))
        setGrade(grade, card_id)
            .then(res => {
                dispatch(updateGradeAC(grade, card_id))

            })
            .catch(err => {
                const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
                alert(errorMassage)
            })
            .finally(()=>  dispatch(isLoadAC('success')))
    }
}
