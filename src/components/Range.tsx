import React, {useCallback, useEffect, useState} from "react";
import s from "./Pages/PacksPage/Packs.module.css";
import SuperDoubleRange from "./superComponents/c8-SuperDoubleRange/SuperDoubleRange";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import SuperButton from "./superComponents/c2-SuperButton/SuperButton";
import {setCardsCountAC, setPacksTC} from "./Reducers/PacksReducer";


export const Range = () => {
	const dispatch = useDispatch()
	const maxServer = useSelector<AppStoreType, number>(state => state.packs.maxCardsCount)
	const minServer = useSelector<AppStoreType, number>(state => state.packs.minCardsCount)
	const[minvalue,setMinValue] = useState<number>(0)
	const[maxvalue,setMaxValue] = useState<number>(0)


	useEffect(() => {
		setMinValue(minServer)
		setMaxValue(maxServer)
	},[minServer,maxServer])


	const onChangeRange = useCallback( () => {
		dispatch(setCardsCountAC(maxvalue,minvalue))
	},[dispatch,maxvalue,minvalue])

		return (
			<div className={s.settings}>
				<SuperDoubleRange min={minServer}
													max={maxServer}
													value={[minvalue, maxvalue]}
													onLeftChangeRange={setMinValue}
													onRightChangeRange={setMaxValue}
				/>
				<div>
					<SuperButton onClick={onChangeRange}>Search</SuperButton>
				</div>
			</div>
		)
}