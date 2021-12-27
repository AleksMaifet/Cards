import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../RoutesBlock/RoutesBlock";
import SuperButton from "../superComponents/c2-SuperButton/SuperButton";
import {logoutTC} from "../Reducers/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../store/store";
import s from '../../styleComponents/App.module.css'
import imageProfile from './../../images/Union (Stroke).svg'
import imagePacks from './../../images/Group 608.svg'


export const Header = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector((state: AppStoreType) => state.login.isAuth)
	const logout = () => {
		dispatch(logoutTC())
	}


	return (
		<div style={{display: 'flex', justifyContent: 'space-around',backgroundColor:'#EBE0E9'}}>
			<div style={{width:'135px'}}/>
			<div style={{display:'flex'}}>
				<div className={s.navLinkWrrape}>
					<NavLink className={({isActive}) => isActive? s.navLinkWrraper_Active : s.navLinkWrraper} to={PATH.PROFILEPAGE}>
						<img style={{width:'20px', height:'20px'}} src={imageProfile}/>Profile
					</NavLink>
				</div>
				<div className={s.navLinkWrrape}>
					<NavLink className={({isActive}) => isActive? s.navLinkWrraper_Active : s.navLinkWrraper} to={PATH.PACKS}>
						<img style={{width:'20px', height:'20px'}} src={imagePacks}/>Packs list
					</NavLink>
				</div>
			</div>
			<div className={s.logOutWrraper}>
				{isAuth && <SuperButton onClick={logout}>logout</SuperButton>}
			</div>
		</div>
	)
}
