import React, {useCallback, useState} from 'react'
import {BlockForgot} from "../RecoveryPage/blockForgot";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {newPasswordTC} from "../../Reducers/ForgotReducer";

export type useParamsType = {
	tokenId:string | undefined
}

export const ForgotPass = () => {
	const dispatch = useDispatch()
	const [value,setValue] = useState<string>('')
	const {tokenId}:useParamsType = useParams()
	const [typeInput,setTypeInput] = useState<'text' | 'password'>('password')

	const submitForgotValueHandler = useCallback(() => {
		dispatch(newPasswordTC(value,tokenId))
		setValue('')
	},[dispatch,value,tokenId])

	const onKeyPressHandler = () => {
			submitForgotValueHandler()
	}
	return (
		<div>
			<BlockForgot typeInput={typeInput} onKeyPressHandler={onKeyPressHandler} submitValueHandler={submitForgotValueHandler} setValue={setValue} inputValue={value}/>
		</div>
	)
}
