import React, {useState} from 'react'
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../RoutesBlock/RoutesBlock";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Reducers/login-reducer";
import {AppStoreType} from "../../store/store";


export const Login = () => {
	const loginState=useSelector((state:AppStoreType)=>state.login)
	const dispatch=useDispatch()
	const [login,setLogin]=useState('akayuda93@gmail.com')
	const [password,setPassword]=useState('qwerty12')
	const onChangeLogin=(e:any)=>{
		setLogin(e.currentTarget.value)
	}
		const onChangePassword=(e:any)=>{
		setPassword(e.currentTarget.value)
	}

if (loginState.isAuth){
	return <Navigate to={PATH.PROFILEPAGE}/>

}
return (
		<div>
			<div>
				<div>it-incubator</div>
				<div>Sign in</div>
				<div><input onChange={onChangeLogin} value={login}/></div>
				<div><input onChange={onChangePassword} value={password}/></div>
				<div>forgot Password</div>
				<div><button onClick={()=>{dispatch(loginTC(login,password))}}>login</button></div>
				<div><NavLink to={PATH.REGISTRATIONPAGE}>Sign Up</NavLink></div>
			</div>

		</div>
	)
}


