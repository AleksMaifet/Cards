import React, {ChangeEvent, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {initRegistStateType, registrationTC} from "../../Reducers/RegistrationReducer";
import {Navigate} from "react-router-dom";
import {Registration} from "./Registration/Registration";

export const RegistrationContainer = () => {
	const registrationState = useSelector<AppStoreType, initRegistStateType>(state => state.registration)
	const dispatch = useDispatch()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value)
	}
	const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value)
	}
	const fetchData = () => {
		dispatch(registrationTC(email, password))
	}
	if (registrationState.isRegistered){
		return <Navigate to={"/login"}/>
	}
	return (
		<div>
			<Registration changeEmail={changeEmail} changePassword={changePassword}
						  fetchData={fetchData} email={email}
						  password={password} error={registrationState.error}/>
		</div>
	)
}
