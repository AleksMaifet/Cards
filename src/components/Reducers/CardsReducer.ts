import {Dispatch} from "redux";
import {AppStoreType} from "../store/store";
import {AppHandlerType, isLoadAC} from "./AppReducer";
import {apiCards, CardType, ResponseGetCardsType} from "../ApiRequests/apiCards";
import {ThunkDispatch} from "redux-thunk";
import {setPacksPageCount, setPacksPageNumber, sortPackCardsAC} from "./PacksReducer";

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
}
export type CardsInitStateType = typeof CardsInitState
type ActionsType =
  ReturnType<typeof setCardsAC>
  | ReturnType<typeof sortPackCardsAC>
  | ReturnType<typeof setPacksPageCount>
  | ReturnType<typeof setPacksPageNumber>
  | ReturnType<typeof searchQuestionPackAC>
  | ReturnType<typeof searchAnswerPackAC>
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
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
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

export const setCardTC = (packId:string) => async (dispatch: Dispatch,getState:() => AppStoreType) => {
    const cardsData = getState().cards
    const params = {
        cardsPack_id:packId,
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
        const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
        alert(errorMassage)
    }
    finally {
        dispatch(isLoadAC('success'))
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
    dispatch(isLoadAC('loading'))
    try {
        await apiCards.postCard(params)
        dispatch(setCardTC(packId))
    } catch (err:any) {
        const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
        alert(errorMassage)
    }
    finally {
        dispatch(isLoadAC('success'))
    }
}

export const deleteCardTC = (id:string,packId:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
    dispatch(isLoadAC('loading'))
    try {
        await apiCards.deleteCard(id)
        dispatch(setCardTC(packId))
    } catch (err:any) {
        const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
        alert(errorMassage)
    }
    finally {
        dispatch(isLoadAC('success'))
    }
}
export const updateCardTC = (id:string,title:string,packId:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
    dispatch(isLoadAC('loading'))
    try {
        await apiCards.updateCard(id,title)
        dispatch(setCardTC(packId))
    } catch (err:any) {
        const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
        alert(errorMassage)
    }
    finally {
        dispatch(isLoadAC('success'))
    }
}
