import React, {useState} from "react";
import s from "../Packs.module.css";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import {searchByPacksAC} from "../../../Reducers/PacksReducer";
import {useDispatch} from "react-redux";
import {useDebounce} from "../../../../customHook/useDebounce";


export const SearchContainer = React.memo(() => {
	const dispatch = useDispatch()
	const [searchValue,setSearchValue] = useState<string>('')
	const debounceValue = useDebounce(searchValue,600)
	dispatch(searchByPacksAC(debounceValue))


	return (
		<>
			<div className={s.divSearchBlock}>
				<SuperInputText placeholder='Search' value={searchValue} onChangeText={setSearchValue}/>
			</div>
		</>
	)
})