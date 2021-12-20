import React from "react";
import s from './AuthLoad.module.css'


export const AuthLoad = () => {
	return (
		<div className={s.wrapperLoading}>
			<div className={s.loader}>
			</div>
		</div>
	)
}