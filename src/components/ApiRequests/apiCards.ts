import axios from "axios";

export type CardType = {
	answer:string
	cardsPack_id: string
	comments: string
	created: string
	grade: number
	question: string
	rating: number
	shots: number
	type: string
	updated: string
	user_id: string
	__v: number
	_id: string
}

export type ResponseGetCardsType = {
	cards:CardType[]
	cardsTotalCount:number
	maxGrade:number
	minGrade:number
	packUserId:string
	page:number
	pageCount:number
	token:string
	tokenDeathTime:number
}


const initial = axios.create(
	{
		baseURL:'https://neko-back.herokuapp.com/2.0/cards/card',
		// baseURL:'http://localhost:7542/2.0/cards/pack',
		withCredentials:true,
	}
)

export const apiCards = {
	getCards(	params:{}){
		return initial.get<ResponseGetCardsType>('',{
			params
		})
	},
	postCard(card:{}){
		return initial.post('',{
			card
		},{})
	},
	deleteCard(id:string){
		return initial.delete('',{
			params:{
				id
			}
		})
	},
	updateCard(_id:string,question:string){
		return initial.put('',{
			card:{
				_id,
				question
			}},{})
	}
}