import React, {FormEvent, useCallback, useState} from 'react'
import {BlockRecovery} from "./BlockRecovery";
import {useDispatch} from "react-redux";
import {forgotPasswordTC} from "../../Reducers/ForgotReducer";

export const Recovery = () => {
	const dispatch = useDispatch()
	const [value,setValue] = useState<string>('')
	const [typeInput,setTypeInput] = useState<'text' | 'password'>('text')

	const submitForgotValueHandler = useCallback((e:FormEvent<HTMLFormElement>) => {
		dispatch(forgotPasswordTC(value))
		e.preventDefault()
		setValue('')
	},[dispatch,value])

	return (
		<div>
			<div>
				<BlockRecovery typeInput={typeInput} submitValueHandler={submitForgotValueHandler} setValue={setValue} inputValue={value}/>
			</div>
		</div>
	)
}