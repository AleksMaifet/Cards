import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {logoutTC} from "../../Reducers/login-reducer";

export const Profile = () => {
	const isAuth=useSelector((state:AppStoreType)=>state.login.isAuth)
	const dispatch=useDispatch()
	const logout = () => {
		dispatch(logoutTC())
	}
	return (
		<div>
			<div>ProfilePage</div>
			{isAuth&&<button onClick={logout}>logout</button>}
		</div>
	)
}
