import React, {useEffect, useState} from "react";
import s from './PopUp.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../components/store/store";
import {isErrorAC} from "../../components/Reducers/AppReducer";


export const PopUp = () => {
	const dispatch = useDispatch()
	const error = useSelector<AppStoreType, string>(state => state.app.isError)
	const [active, setActive] = useState<boolean>(false)

	useEffect(() => {
		if (error.length) {
			setActive(true)
			setTimeout(() => {
				dispatch(isErrorAC(''))
			}, 3000)
			return
		}
		setActive(false)
	}, [dispatch, error])

	const changePopUpBlock = active ? s.popUpBlockActive : s.popUpBlock
	const changePopUpMode = active ? s.popUpWrapperActive : s.popUpWrapper

	return (
		<div className={changePopUpBlock}>
			<div className={changePopUpMode}>
				<h2>
					{error}
				</h2>
			</div>
		</div>
	)
}
