import React, {ChangeEvent, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {initRegistStateType, registrationTC, setNotRegistered} from "../../Reducers/RegistrationReducer";
import {Navigate} from "react-router-dom";
import {Registration} from "./Registration/Registration";

export const RegistrationContainer = () => {
	const registrationState = useSelector<AppStoreType, initRegistStateType>(state => state.registration)
	const dispatch = useDispatch()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmedPassword, setConfirmedPassword] = useState("")
	const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value)
	}
	const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value)
	}
	const changeConfirmedPassword = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmedPassword(e.currentTarget.value)
	}
	const fetchData = () => {
		if(password !== confirmedPassword){
			dispatch(setNotRegistered("Passowrd confirmation does not match"))
		} else{
			dispatch(registrationTC(email, password))
		}
	}
	if (registrationState.isRegistered){
		return <Navigate to={"/login"}/>
	}
	return (
		<div>
			<Registration changeEmail={changeEmail} changePassword={changePassword} changeConfirmedPassword={changeConfirmedPassword}
						  fetchData={fetchData} email={email}
						  password={password} error={registrationState.error} confirmedPassword={confirmedPassword}/>
		</div>
	)
}
