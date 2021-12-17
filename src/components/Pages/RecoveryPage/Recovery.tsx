import React, {useCallback, useState} from 'react'
import {BlockForgot} from "./blockForgot";
import {useDispatch} from "react-redux";
import {forgotPasswordTC} from "../../Reducers/ForgotReducer";

export const Recovery = () => {
	const dispatch = useDispatch()
	const [value,setValue] = useState<string>('')
	const [typeInput,setTypeInput] = useState<'text' | 'password'>('text')

	const submitForgotValueHandler = useCallback(() => {
		dispatch(forgotPasswordTC(value))
		setValue('')
	},[dispatch,value])

	const onKeyPressHandler = () => {
			submitForgotValueHandler()
	}

	const changeVisibility = () => {
		typeInput === 'text' ? setTypeInput('password') : setTypeInput('text')
	}

	return (
		<div>
			<div>
				<BlockForgot typeInput={typeInput} onKeyPressHandler={onKeyPressHandler} submitValueHandler={submitForgotValueHandler} setValue={setValue} inputValue={value}/>
				<span onClick={changeVisibility} style={{cursor:'pointer'}} >change type</span>
			</div>
		</div>
	)
}