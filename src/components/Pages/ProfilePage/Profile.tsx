import React, {ChangeEvent} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {logoutTC, updateAvatarTC} from "../../Reducers/login-reducer";
import s from './Profile.module.css'

export type filesType = {
	lastModified: number
	name: string
	size: number
	type: string
	webkitRelativePath: string
}


export const Profile = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector((state: AppStoreType) => state.login.isAuth)
	const isAvatar = useSelector((state: AppStoreType) => state.login.avatar)
	const UpdateAvatar = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files
		if (file !== null) {
			const reader = new FileReader();
			reader.onload = ev => {
				if (ev.target !== null) {
					dispatch(updateAvatarTC(ev.target.result))
				}
			}
			reader.readAsDataURL(file[0])
		}

	}
	const logout = () => {
		dispatch(logoutTC())
	}
	return (
		<div>
			<div style={{display:'flex',justifyContent:'center'}}>
				<div>ProfilePage</div>
				{isAuth && <button onClick={logout}>logout</button>}
			</div>
			<div>
				<label className={s.customFileUpload}>
					<input className={s.customInput} type={'file'} onChange={UpdateAvatar}/>
					Upload
				</label>
			</div>
			<div style={{height: '200px'}}>
				<img src={isAvatar !== null ? isAvatar : ''}/>
			</div>
		</div>
	)
}
