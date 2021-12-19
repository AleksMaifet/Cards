import React, {FormEvent, useCallback, useState} from "react";
import s from "../Packs.module.css";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import {searchByPacksAC} from "../../../Reducers/PacksReducer";
import {useDispatch} from "react-redux";

type SearchContainerType = {
	myPacks:(text:string) => void
	allPacks:(text:string) => void
	whoisCard:string
}

export const SearchContainer = ({...props}:SearchContainerType) => {
	const {myPacks,allPacks,whoisCard} = props
	const dispatch = useDispatch()
	const [searchValue,setSearchValue] = useState<string>('')
	const onSearchChange = useCallback((e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(searchByPacksAC(searchValue))
	}, [dispatch,searchValue])

	const myPacksHandler = () => {
		myPacks(searchValue)
	}
	const allPacksHandler = () => {
		allPacks(searchValue)
	}

	return (
		<>
			<div>
				<SuperButton
					illuminated={whoisCard.length !== 0} onClick={myPacksHandler}>My</SuperButton>
				<SuperButton
					illuminated={whoisCard.length === 0} onClick={allPacksHandler}>All</SuperButton>
			</div>
			<form onSubmit={onSearchChange} className={s.divSearchBlock}>
				<SuperInputText placeholder='Search' value={searchValue} onChangeText={setSearchValue}/>
				<SuperButton>Search</SuperButton>
			</form>
		</>
	)
}