import {Dispatch} from "redux";
import {apiPacks, PackType, ResponseGetPacksType} from "../ApiRequests/apiPacks";
import {AppHandlerType, isLoadAC, isLoadAuthAC} from "./AppReducer";
import {AppStoreType} from "../store/store";
import {ThunkDispatch} from "redux-thunk";

export const PacksInitState = {
	cardPacks: [] as PackType[],
	cardPacksTotalCount: 0,
	maxPacksCount: 25,
	minPacksCount: 4,
	page: 1,
	pageCount: 5,
	sortPacksCards:'',
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
	| ReturnType<typeof sortPackCardsAC>
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
		case "Packs/WHO-SET-PACKS":
		case "Packs/SEARCH-PACKS":
		case "Packs/SORT-PACKS":
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
	}
	dispatch(isLoadAC('loading'))
	try {
		const {data} = await apiPacks.getPacks(params)
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
		dispatch(setPacksTC())
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
		dispatch(setPacksTC())
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
		dispatch(setPacksTC())
	} catch (err:any) {
		const errorMassage = err.response ? err.response.data.error : 'Check internet connection!'
		alert(errorMassage)
	}
	finally {
		dispatch(isLoadAC('success'))
	}
}