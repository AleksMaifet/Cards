import axios from "axios";


export type PacksType = {
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
	cardPacks:PacksType[]
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
	getPacks(page: number, pageCount: number, ratelastUpdate: number, user_id: string, packName: string) {
		const sortPacks = {
			update: `${ratelastUpdate}updated`,
			// amount:`${ratecardsAmount}cardsCount`,
		}
		return initial.get<ResponseGetPacksType>('', {
			params:{
					page,
					pageCount,
					sortPacks: sortPacks.update,
					user_id,
					packName,
				}
		})
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
