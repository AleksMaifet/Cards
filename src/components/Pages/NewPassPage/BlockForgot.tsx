import React, {FormEvent} from 'react'
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import s from './ForgotPass.module.css'
import c from '../../../styleComponents/App.module.css'
import eye from '../../../images/Shape.svg'
import {typeInputType} from "./ForgotPass";

type BlockForgotType = {
	inputValue: string
	setValue: (value: string) => void
	submitValueHandler: (e: FormEvent<HTMLFormElement>) => void
	typeInput?: typeInputType
	changeVisibility:() => void
}


export const BlockForgot = ({...props}: BlockForgotType) => {
	const {
		inputValue,
		setValue,
		submitValueHandler,
		typeInput,
		changeVisibility,
	} = props

	return (
		<div className={c.container}>
			<div className={s.forgotBlock}>
				<div className={s.blockCenter}>
					<h3 className={s.forgotTitle}>
						Create new password
					</h3>
				</div>
				<div>
					<form onSubmit={submitValueHandler}>
						<div className={s.forgotInputBlock}>
							<SuperInputText placeholder={'Password'} typeInput={typeInput}
															onChange={(e) => setValue(e.currentTarget.value)}
															value={inputValue}/>
							<div onClick={changeVisibility} className={s.forgotImageBlock}>
								<img src={eye}/>
							</div>
						</div>
						<div className={s.blockCenter}>
						</div>
						<div className={s.blockCenter}>
							<p className={s.forgotText}>
								Create new password and we will send you further instructions to email
							</p>
						</div>
						<SuperButton>Send Instructions</SuperButton>
					</form>
				</div>
			</div>
		</div>
	)
}
