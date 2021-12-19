import {Dispatch} from "redux";
import {apiPacks, PacksType, ResponseGetPacksType} from "../ApiRequests/apiPacks";
import {AppHandlerType, isLoadAC} from "./AppReducer";
import {AppStoreType} from "../store/store";
import {ThunkDispatch} from "redux-thunk";

export const PacksInitState = {
	cardPacks: [] as PacksType[],
	cardPacksTotalCount: 0,
	maxCardsCount: 25,
	minCardsCount: 4,
	page: 1,
	pageCount: 5,
	lastUpdate: 0,
	cardsAmount: 0,
	whoisCard:'',
	searchByPacks:'',
	newPack:'',
}
type PacksInitStateType = typeof PacksInitState
type ActionsType =
	| ReturnType<typeof deletePackAC>
	| ReturnType<typeof setPackAC>
	| ReturnType<typeof setPacksPageCount>
	| ReturnType<typeof setPacksPageNumber>
	| ReturnType<typeof sortPacksLastUpdateAC>
	| ReturnType<typeof sortPackCardsAmountAC>
	| ReturnType<typeof changeWhoisCardAC>
	| ReturnType<typeof searchByPacksAC>


export const packsReducer = (state = PacksInitState, action: ActionsType): PacksInitStateType => {
	switch (action.type) {
		case "Packs/SET-PACK":
			return {
				...state,
				...action.data
			}
		case "Packs/SET-PACKS-PAGE-NUMBER":
		case "Packs/SET-PACKS-PAGE-COUNT":
		case "Packs/CHANGE-PACK-CARDS-AMOUNT":
		case "Packs/CHANGE-PACKS-LAST-UPDATE":
		case "Packs/WHO-SET-PACKS":
		case "Packs/SEARCH-PACKS":
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}

export const setPackAC = (data: ResponseGetPacksType) => {
	return {
		type: "Packs/SET-PACK",
		data,
	} as const
}

export const deletePackAC = (id: string) => {
	return {
		type: "Packs/DELETE-PACK",
		id,
	} as const
}

export const sortPackCardsAmountAC = (cardsAmount: number) => {
	return {
		type: "Packs/CHANGE-PACK-CARDS-AMOUNT",
		payload: {
			cardsAmount
		},
	} as const
}

export const sortPacksLastUpdateAC = (lastUpdate: number) => {
	return {
		type: "Packs/CHANGE-PACKS-LAST-UPDATE",
		payload: {
			lastUpdate
		},
	} as const
}

export const searchByPacksAC = (searchByPacks: string) => {
	return {
		type: "Packs/SEARCH-PACKS",
		payload:{
			searchByPacks
		}
	} as const
}

export const setPacksPageCount = (pageCount: number) => {
	return {
		type: "Packs/SET-PACKS-PAGE-COUNT",
		payload: {
			pageCount,
		}
	} as const
}
export const setPacksPageNumber = (page: number) => {
	return {
		type: "Packs/SET-PACKS-PAGE-NUMBER",
		payload: {
			page
		},
	} as const
}
export const changeWhoisCardAC = (whoisCard: string) => {
	return {
		type: "Packs/WHO-SET-PACKS",
		payload: {
			whoisCard
		},
	} as const
}

export const setCardTC = () => async (dispatch: Dispatch,getState:() => AppStoreType) => {
	const packsData = getState().packs
	dispatch(isLoadAC('loading'))
	try {
		const {data} = await apiPacks.getPacks(
			packsData.page,
			packsData.pageCount,
			packsData.lastUpdate,
			packsData.whoisCard,
			packsData.searchByPacks,
		)
		dispatch(setPackAC(data))
	} catch (err:any) {
      const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
      alert(errorMassage)
	}
	finally {
		dispatch(isLoadAC('success'))
	}
}

export const addPackTC = (newPackTitle:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
	dispatch(isLoadAC('loading'))
	try {
		await apiPacks.postPack(newPackTitle)
		dispatch(setCardTC())
	} catch (err:any) {
		const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
		alert(errorMassage)
	}
	finally {
		dispatch(isLoadAC('success'))
	}
}

export const deletePackTC = (id:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
	dispatch(isLoadAC('loading'))
	try {
		await apiPacks.deletePack(id)
		dispatch(setCardTC())
	} catch (err:any) {
		const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
		alert(errorMassage)
	}
	finally {
		dispatch(isLoadAC('success'))
	}
}

export const updatePackTC = (id:string,title:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
	dispatch(isLoadAC('loading'))
	try {
		await apiPacks.updatePack(id,title)
		dispatch(setCardTC())
	} catch (err:any) {
		const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
		alert(errorMassage)
	}
	finally {
		dispatch(isLoadAC('success'))
	}
}