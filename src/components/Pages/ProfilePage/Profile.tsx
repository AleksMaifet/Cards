import React, {ChangeEvent} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {logoutTC, updateAvatarTC} from "../../Reducers/login-reducer";
import s from './Profile.module.css'
import {Navigate} from "react-router-dom";
import {PATH} from "../../RoutesBlock/RoutesBlock";
import c from "../../../styleComponents/App.module.css";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Rating} from "../../Rating/Rating";

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

	if(!isAuth){
		return <Navigate to={PATH.LOGINPAGE}/>
	}
	return (
		<div className={c.container}>
			<div className={s.profileBlock}>
				<div>
					<label className={s.customFileUpload}>
						<input className={s.customInput} type={'file'} onChange={UpdateAvatar}/>
						Upload
					</label>
				</div>
				<div className={s.imgContainer}>
					<img className={s.img} src={isAvatar !== null ? isAvatar : ''}/>
				</div>
			</div>
		</div>
	)
}