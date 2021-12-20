import React, {useState} from "react";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './addCardPage.module.css'
import {useDispatch} from "react-redux";
import {addPackTC} from "../../../Reducers/CardsReducer";

type AddCardPageType = {
	packId:string | undefined
}

export const AddCardPage = ({...props}:AddCardPageType) => {
	const {packId} = props
	const dispatch = useDispatch()
	const [visibility, setVisibility] = useState<boolean>(false)
	const [question, setQuestion] = useState<string>('')
	const [answer, setAnswer] = useState<string>('')
	const onAddPackModule = () => {
		setVisibility(true)
	}
	const onCloseCardModule = () => {
		setVisibility(false)
	}
	const addCardHandler = () => {
		packId && dispatch(addPackTC(packId,question,answer))
		setQuestion('')
		setAnswer('')
	}



	return (
		<div>
			<SuperButton onClick={onAddPackModule}>Add card</SuperButton>
			{visibility && <div className={s.addPackBlock}>
				<div className={s.addPackBlockWrapper}>
					<div>
						<h3>Add new card</h3>
					</div>
					<div>
						<SuperInputText placeholder='Question' onChangeText={setQuestion} value={question}/>
						<SuperInputText placeholder='Answer' onChangeText={setAnswer} value={answer}/>
					</div>
					<div>
						<SuperButton onClick={onCloseCardModule}>Cansel</SuperButton>
						<SuperButton onClick={addCardHandler}>Save</SuperButton>
					</div>
				</div>
			</div>
			}
		</div>
	)
}


