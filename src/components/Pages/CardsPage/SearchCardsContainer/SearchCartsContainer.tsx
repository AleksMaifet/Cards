import React, {useState} from "react";
import s from "../../PacksPage/Packs.module.css";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import {useDispatch} from "react-redux";
import {searchAnswerPackAC, searchQuestionPackAC} from "../../../Reducers/CardsReducer";
import {useDebounce} from "../../../../customHook/useDebounce";


export const SearchCartsContainer = () => {
	const dispatch = useDispatch()
	const [searchValueQuestion, setSearchValueQuestion] = useState<string>('')
	const [searchValueAnswer, setSearchValueAnswer] = useState<string>('')

	const question = useDebounce(searchValueQuestion,600)
	dispatch(searchQuestionPackAC(question))

	const answer = useDebounce(searchValueAnswer,600)
	dispatch(searchAnswerPackAC(answer))


	return (
		<>
			<div className={s.divSearchBlock}>
				<SuperInputText placeholder='Search Question' value={searchValueQuestion}
												onChangeText={setSearchValueQuestion}
				/>
			</div>
			<div className={s.divSearchBlock}>
				<SuperInputText placeholder='Search Answer' value={searchValueAnswer}
												onChangeText={setSearchValueAnswer}
				/>
			</div>
		</>
	)
}