import React from "react";
import s from "././Load.module.css"
import {useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {IsLoadType} from "../../Reducers/AppReducer";


export const Load = () => {
	const isLoad = useSelector<AppStoreType, IsLoadType>(state => state.app.isLoad)
	return (
		<div className={s.nendovebKubscuponBlock}>
			{isLoad === 'loading' &&
			<div className={s.nendovebKubscupon}>
				<div className={s.kacekagenProtsem}>
				</div>
			</div>}
		</div>
	)
}