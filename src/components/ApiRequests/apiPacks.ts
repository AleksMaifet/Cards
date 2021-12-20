import axios from "axios";

export type ParamsType = {
	page:number
	pageCount:number
	sortPacks:string
	user_id:string
	packName:string
}

export type PackType = {
	cardsCount:number
	created:string
	grade:number
	more_id:string
	name:string
	path:string
	private:boolean
	rating:number
	shots:number
	type:string
	updated:string
	user_id:string
	user_name:string
	_id:string
}

export type ResponseGetPacksType = {
	cardPacks:PackType[]
	cardPacksTotalCount:number
	maxCardsCount:number
	minCardsCount:number
	page:number
	pageCount:number
	token:string
	tokenDeathTime:number
}

const initial = axios.create(
	{
		baseURL:'https://neko-back.herokuapp.com/2.0/cards/pack',
		// baseURL:'http://localhost:7542/2.0/cards/pack',
		withCredentials:true,
	}
)

export const apiPacks = {
	getPacks(params:ParamsType) {
		return initial.get<ResponseGetPacksType>('', {
				params
			}
		)
	},
	postPack(name:string){
		return initial.post('',{
			cardsPack: {
				name,
			}
		},{})
	},
	deletePack(id:string){
		return initial.delete('',{
			params:{
				id
			}
		})
	},
	updatePack(_id:string,name:string){
		return initial.put('',{cardsPack:{_id,name}},{})
	}
}
