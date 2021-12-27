import React, {useEffect, useState} from "react";
import s from "../Packs.module.css";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import {searchByPacksAC, setPacksPageNumber} from "../../../Reducers/PacksReducer";
import {useDispatch} from "react-redux";
import {useDebounce} from "../../../../customHook/useDebounce";


export const SearchContainer = React.memo(() => {
	const dispatch = useDispatch()
	const [searchValue,setSearchValue] = useState<string>('')
	const debounceValue = useDebounce(searchValue,600)

	useEffect(() => {
		dispatch(searchByPacksAC(debounceValue))
		return () =>	{
			dispatch(setPacksPageNumber(1))
		}
	},[debounceValue,dispatch])



	return (
		<>
			<div className={s.divSearchBlock}>
				<SuperInputText placeholder='Search' value={searchValue} onChangeText={setSearchValue}/>
			</div>
		</>
	)
})