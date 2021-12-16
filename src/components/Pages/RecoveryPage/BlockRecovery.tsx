import React, {FormEvent} from 'react'
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import s from './Recovery.module.css'
import c from '../../../styleComponents/App.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../RoutesBlock/RoutesBlock";


type BlockForgotType = {
	inputValue: string
	setValue: (value: string) => void
	submitValueHandler: (e: FormEvent<HTMLFormElement>) => void
	typeInput?: 'text' | 'password'
}


export const BlockRecovery = ({...props}: BlockForgotType) => {
	const {
		inputValue,
		setValue,
		submitValueHandler,
		typeInput,
	} = props

	return (
		<div className={c.container}>
			<div className={s.recoveryBlock}>
				<div className={s.blockCenter}>
					<h3 className={s.recoveryTitle}>
						Forgot your password?
					</h3>
				</div>
				<form onSubmit={submitValueHandler}>
					<SuperInputText placeholder={'Email'} typeInput={typeInput}
													onChange={(e) => setValue(e.currentTarget.value)}
													value={inputValue}/>
					<div className={s.blockCenter}>
						<p className={s.recoveryUpperText}>
							Enter your email address and we will send you further instructions
						</p>
					</div>
					<SuperButton>Send Instructions</SuperButton>
				</form>
				<div className={s.blockCenter}>
					<p className={s.recoveryLowerText}>
						Did you remember your password?
					</p>
				</div>
				<div>
					<NavLink to={PATH.LOGINPAGE}>Try logging in</NavLink>
				</div>
			</div>
		</div>
	)
}
