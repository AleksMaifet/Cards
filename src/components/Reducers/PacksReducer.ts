import {Dispatch} from "redux";
import {apiPacks, PackType, ResponseGetPacksType} from "../ApiRequests/apiPacks";
import {AppHandlerType, isLoadAC, IsLoadType} from "./AppReducer";
import {AppStoreType} from "../store/store";
import {ThunkDispatch} from "redux-thunk";
import {handleServerError, handleSpinnerEnd, handleSpinnerTimerEnd} from "../../utils/utils";

export const PacksInitState = {
	cardPacks: [] as PackType[],
	cardPacksTotalCount: 0,
	maxCardsCount: 0,
	minCardsCount: 0,
	maxCardsCountUser: 0,
	minCardsCountUser: 0,
	page: 1,
	pageCount: 5,
	sortPacksCards:'',
	whoisCard:'',
	searchByPacks:'',
	newPack:'',
	isPackLoad:'idle' as IsLoadType,
}
type PacksInitStateType = typeof PacksInitState
export type ActionsType =
	| ReturnType<typeof deletePackAC>
	| ReturnType<typeof setPackAC>
	| ReturnType<typeof setPacksPageCount>
	| ReturnType<typeof setPacksPageNumber>
	| ReturnType<typeof sortPackCardsAC>
	| ReturnType<typeof changeWhoisCardAC>
	| ReturnType<typeof searchByPacksAC>
	| ReturnType<typeof isPackLoadAC>
	| ReturnType<typeof setCardsCountAC>


export const packsReducer = (state = PacksInitState, action: ActionsType): PacksInitStateType => {
	switch (action.type) {
		case "Packs/SET-PACK":
			return {
				...state,
				...action.data
			}
		case "Packs/SET-PACKS-PAGE-NUMBER":
		case "Packs/SET-PACKS-PAGE-COUNT":
		case "Packs/WHO-SET-PACKS":
		case "Packs/SEARCH-PACKS":
		case "Packs/SORT-PACKS":
		case "Packs/IS-PACK-LOAD":
		case "Packs/SET-CARDS-COUNT":
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
export const setCardsCountAC = (maxCardsCountUser: number,minCardsCountUser:number) => {
	return {
		type: "Packs/SET-CARDS-COUNT",
		payload:{
			maxCardsCountUser,
			minCardsCountUser,
		}
	} as const
}
export const sortPackCardsAC = (sortPacksCards: string) => {
	return {
		type: "Packs/SORT-PACKS",
		payload: {
			sortPacksCards
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
export const isPackLoadAC = (isPackLoad: IsLoadType) => {
	return {
		type: "Packs/IS-PACK-LOAD",
		payload: {
			isPackLoad
		},
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

export const setPacksTC = () => async (dispatch: Dispatch,getState:() => AppStoreType) => {
	const packsData = getState().packs
	const params = {
		page:packsData.page,
		pageCount:packsData.pageCount,
		sortPacks:packsData.sortPacksCards,
		user_id:packsData.whoisCard,
		packName:packsData.searchByPacks,
		min:packsData.minCardsCountUser,
		max:packsData.maxCardsCountUser,
	}
	dispatch(isPackLoadAC('loading'))
	try {
		const {data} = await apiPacks.getPacks(params)
		dispatch(setPackAC(data))
	} catch (err:any) {
		handleServerError(err)
	} finally {
		handleSpinnerTimerEnd(dispatch)
	}
}

export const addPackTC = (newPackTitle:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
	dispatch(isPackLoadAC('loading'))
	try {
		await apiPacks.postPack(newPackTitle)
		dispatch(setPacksTC())
	} catch (err:any) {
		handleServerError(err)
	}
	finally {
		handleSpinnerTimerEnd(dispatch)
	}
}

export const deletePackTC = (id:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
	dispatch(isPackLoadAC('loading'))
	try {
		await apiPacks.deletePack(id)
		dispatch(setPacksTC())
	}
	catch (err:any) {
		handleServerError(err)
	}
	finally {
		handleSpinnerTimerEnd(dispatch)
	}
}

export const updatePackTC = (id:string,title:string) => async (dispatch: ThunkDispatch<AppStoreType, void, ActionsType | AppHandlerType>) => {
	dispatch(isPackLoadAC('loading'))
	try {
		await apiPacks.updatePack(id,title)
		dispatch(setPacksTC())
	}
	catch (err:any) {
	handleServerError(err)
	}
	finally {
		handleSpinnerTimerEnd(dispatch)
	}
}