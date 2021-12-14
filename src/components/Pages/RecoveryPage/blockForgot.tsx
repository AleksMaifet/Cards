import React from 'react'
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";


type BlockForgotType = {
	inputValue:string
	setValue:(value:string) => void
	submitValueHandler:() => void
	onKeyPressHandler:() => void
	typeInput?: 'text' | 'password'
}


export const BlockForgot = ({...props}:BlockForgotType) => {
	const {
		inputValue,
		setValue,
		submitValueHandler,
		onKeyPressHandler,
		typeInput,
	} = props

	return (
		<div>
			<div>
				<SuperInputText typeInput={typeInput} onEnter={onKeyPressHandler}  onChange={(e) => setValue(e.currentTarget.value)} value={inputValue}/>
				<SuperButton onClick={submitValueHandler}/>
			</div>
		</div>
	)
}
