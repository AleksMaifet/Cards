import React, {FormEvent, useCallback, useState} from "react";
import s from "../../PacksPage/Packs.module.css";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {searchAnswerPackAC, searchQuestionPackAC} from "../../../Reducers/CardsReducer";

type SearchCartsContainerType = {
	disable:boolean
	searchAnswer:string
	searchQuestion:string
}

export const SearchCartsContainer = ({...props}:SearchCartsContainerType) => {
	const {disable,searchAnswer,searchQuestion} = props
	const dispatch = useDispatch()
	const [searchValueQuestion, setSearchValueQuestion] = useState<string>('')
	const [searchValueAnswer, setSearchValueAnswer] = useState<string>('')
	const onSearchQuestion = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if(!searchValueQuestion.length && !searchValueAnswer.length){
			dispatch(searchQuestionPackAC(''))
		}
		dispatch(searchQuestionPackAC(searchValueQuestion))
		setSearchValueQuestion('')
	}, [dispatch, searchValueQuestion,searchValueAnswer])
	const onSearchAnswer = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if(!searchValueQuestion.length && !searchValueAnswer.length){
			dispatch(searchQuestionPackAC(''))
		}
		dispatch(searchAnswerPackAC(searchValueAnswer))
		setSearchValueAnswer('')
	}, [dispatch, searchValueAnswer,searchValueQuestion])
	return (
		<div>
			<div>
				<form onSubmit={onSearchQuestion} className={s.divSearchBlock}>
					<SuperInputText disabled={disable} placeholder='Search Question' value={searchValueQuestion} onChangeText={setSearchValueQuestion}/>
					<SuperButton illuminated={!!searchQuestion}>Search</SuperButton>
				</form>
			</div>
			<div>
				<form onSubmit={onSearchAnswer} className={s.divSearchBlock}>
					<SuperInputText disabled={disable} placeholder='Search Answer' value={searchValueAnswer} onChangeText={setSearchValueAnswer}/>
					<SuperButton illuminated={!!searchAnswer.length}>Search</SuperButton>
				</form>
			</div>
		</div>
	)
}