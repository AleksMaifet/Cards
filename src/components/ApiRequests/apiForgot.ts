import axios from "axios";



const initial = axios.create(
	{
		baseURL:'https://neko-back.herokuapp.com/2.0',
		withCredentials: true
	}
)


export const apiLogin={
	setLogin(email:string,password:string,rememberMe:boolean){
		return initial.post('auth/login',{email:email,password:password,rememberMe:rememberMe})


	},
	logout(){
		return initial.delete('auth/me')
	}
	,
	me(){
		return initial.post('auth/me')
	}
}
