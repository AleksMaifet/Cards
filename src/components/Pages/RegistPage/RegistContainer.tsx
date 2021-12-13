import React, {ChangeEvent, useState} from 'react'
import {registerUser} from "../../ApiRequests/registApi";
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
		// registerUser(email, password)
		// 	.then((res) => {
		// 		console.log(res)
		// 	})
		// 	.catch(err => console.log(err))
	}
	if (registrationState.isRegistered){
		return <Navigate to={"/login"}/>
	}
	return (
		<div>
			{/*<div>RegistrationPage*/}
			{/*	<input onChange={changeEmail} value={email}/>*/}
			{/*	<input onChange={changePassword} value={password} type={password}/>*/}
			{/*	<div><button onClick={fetchData}>Register!</button></div>*/}
			{/*	<span>{registrationState.error}</span>*/}
			{/*</div>*/}
			<Registration changeEmail={changeEmail} changePassword={changePassword}
						  fetchData={fetchData} email={email}
						  password={password} error={registrationState.error}/>
		</div>
	)
}
