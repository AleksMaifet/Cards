import React, {FormEvent, useCallback, useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {newPasswordTC} from "../../Reducers/ForgotReducer";
import {BlockForgot} from "./BlockForgot";

export type useParamsType = {
	tokenId:string | undefined
}
export type typeInputType = 'text' | 'password';

export const ForgotPass = () => {
	const dispatch = useDispatch()
	const [value,setValue] = useState<string>('')
	const {tokenId}:useParamsType = useParams()
	const [typeInput,setTypeInput] = useState<typeInputType>('password')

	const submitForgotValueHandler = useCallback((e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(newPasswordTC(value,tokenId))
		setValue('')
	},[dispatch,value,tokenId])

	const changeVisibility = () => {
		typeInput === 'text' ? setTypeInput('password') : setTypeInput('text')
	}

	return (
		<div>
			<BlockForgot changeVisibility={changeVisibility} typeInput={typeInput} submitValueHandler={submitForgotValueHandler} setValue={setValue} inputValue={value}/>
		</div>
	)
}
