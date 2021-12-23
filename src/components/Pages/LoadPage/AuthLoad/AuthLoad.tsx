import React from "react";
import s from './AuthLoad.module.css'
import Load from './../../../../images/Load.gif'


export const AuthLoad = () => {
	return (
		<div className={s.wrapperLoading}>
			<div className={s.imgContainer}>
				<img className={s.img} src={Load}/>
			</div>
		</div>
	)
}