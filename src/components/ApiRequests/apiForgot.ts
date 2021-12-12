import axios from "axios";



const initial = axios.create(
	{
		baseURL:'https://neko-back.herokuapp.com/2.0',
		withCredentials: true
	}
)


export const apiLogin={
	setLogin(email:string,password:string){
		return initial.post('auth/login',{email:email,password:password,rememberMe:false})


	},
	logout(){
		return initial.delete('auth/me')
	}
}

//hello
//hello2