import {NavLink} from "react-router-dom";
import {PATH} from "../../RoutesBlock/RoutesBlock";
import React from "react";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../superComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import s from './Login.module.css'
import c from '../../../styleComponents/App.module.css'


type LoginPropsType = {
	onChangeEmail: (e: React.FormEvent<HTMLInputElement>) => void
	changeChecked: () => void
	onChangePassword: (e: React.FormEvent<HTMLInputElement>) => void
	login: () => void
	password: string
	email: string
	checked: boolean
}
export const Login = (props: LoginPropsType) => {

	return (
		<div className={c.container}>
			<div className={s.loginBlock}>
				<div className={s.blockCenter}>
					<h3 className={s.loginTitle}>
						Sign in
					</h3>
				</div>
				<div>
					<SuperInputText placeholder={'Email'}
													onChange={props.onChangeEmail}
													value={props.email}
					/>
				</div>
				<div className={s.loginInputsBlock}>
					<SuperInputText placeholder={'Password'}
													onChange={props.onChangePassword}
													value={props.password}
					/>
				</div>

				<div className={s.blockCheck}>
					Remember me
					<SuperCheckbox type={"checkbox"}
												 defaultChecked={props.checked}
												 onClick={props.changeChecked}
					/>
				</div>
				<div className={s.blockForgotPass}>
					<NavLink to={PATH.RECOVERYPAGE}>Forgot password</NavLink>
				</div>
				<SuperButton onClick={props.login}>Login</SuperButton>
				<div className={s.blockCenter}>
					<p className={s.loginText}>
						Don’t have an account?
					</p>
				</div>
				<div>
					<NavLink to={PATH.REGISTRATIONPAGE}>Sign Up</NavLink>
				</div>
			</div>
		</div>)
}