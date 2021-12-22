import {Dispatch} from "redux";
import {AppStoreType} from "../store/store";
import {AppHandlerType, isLoadAC} from "./AppReducer";
import {apiCards, CardType, ResponseGetCardsType} from "../ApiRequests/apiCards";
import {ThunkDispatch} from "redux-thunk";
import {isPackLoadAC, setPacksPageCount, setPacksPageNumber, sortPackCardsAC} from "./PacksReducer";
import {handleServerError, handleSpinnerEnd, handleSpinnerTimerEnd} from "../../utils/utils";

export const CardsInitState = {
    cards: [] as CardType[],
    cardQuestion:'',
    cardAnswer:'',
    maxCardsCount: 25,
    minCardsCount: 4,
    sortPacksCards:'',
    page:1,
    pageCount: 5,
    cardsTotalCount:0,
    maxGrade: 4.98,
    minGrade: 2.01,
    packId:'',
}
export type CardsInitStateType = typeof CardsInitState
type ActionsType =
  ReturnType<typeof setCardsAC>
  | ReturnType<typeof sortPackCardsAC>
  | ReturnType<typeof setPacksPageCount>
  | ReturnType<typeof setPacksPageNumber>
  | ReturnType<typeof searchQuestionPackAC>
  | ReturnType<typeof searchAnswerPackAC>
  | ReturnType<typeof setPackIdAC>
  | ReturnType<typeof isPackLoadAC>
export const cardsReducer = (state: CardsInitStateType = CardsInitState, action: ActionsType):CardsInitStateType => {
    switch (action.type) {
        case "cards/SET-CARD":
            return {
                ...state,
                ...action.data
            }
        case "Packs/SORT-PACKS":
        case "Packs/SET-PACKS-PAGE-COUNT":
        case "Packs/SET-PACKS-PAGE-NUMBER":
        case "Packs/SEARCH-ANSWER-CARD":
        case "Packs/SEARCH-QUESTION-CARD":
        case "cards/SET-PACK-ID":
            return {
                ...state,
                ...action.payload
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
export const searchAnswerPackAC = (cardAnswer: string) => {
    return {
        type: "Packs/SEARCH-ANSWER-CARD",
        payload:{
            cardAnswer
        }
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
    dispatch(isLoadAC('loading'))
    try {
       const {data} =  await apiCards.getCards(params)
        dispatch(setCardsAC(data))
    } catch (err:any) {
        handleServerError(err)
    }
    finally {
        handleSpinnerEnd(dispatch)
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
export const updateCardTC = (id:string,title:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
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