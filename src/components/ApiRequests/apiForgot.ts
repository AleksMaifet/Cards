import axios from "axios";


type AxiosForgotPasswordType = {
	success: boolean
}

const initial = axios.create(
	{
		baseURL:'https://neko-back.herokuapp.com/2.0'
	}
)

export const cardsForgotAPI = {
	forgotPassword(email: string) {
		return initial.post<AxiosForgotPasswordType>('auth/forgot', {
			email,
			from: 'AleksMaifet',
			message: `\n<div style=\"background-color: #f7f7f7; border-radius: 12px; font-size: 20px; text-align: center; padding: 15px\">\nTo reset your password,click this link: \n<div><a href='http://localhost:3000/#/set-new-password/$token$'>Please Click</a></div>\n</div>\n`
		}, {})
	},
	setNewPassword(password:string,resetPasswordToken:string|undefined) {
		return initial.post('auth/set-new-password',{
			password,
			resetPasswordToken,
		},{})
	}
}
