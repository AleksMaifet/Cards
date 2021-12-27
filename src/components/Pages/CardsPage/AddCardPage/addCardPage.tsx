import React, {useState} from "react";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './addCardPage.module.css'
import {useDispatch} from "react-redux";
import {addPackTC} from "../../../Reducers/CardsReducer";
import {Modal} from "../../../../modals/Modal";
import SuperTextArea from "../../../superComponents/TextAreaComponent/TextAreaComponent";

type AddCardPageType = {
	packId:string | undefined
	disable:boolean
}

export const AddCardPage = ({...props}:AddCardPageType) => {
	const {packId,disable} = props
	const dispatch = useDispatch()
	const [active,setActive] = useState<boolean>(false)
	const [question, setQuestion] = useState<string>('')
	const [answer, setAnswer] = useState<string>('')
	const onAddPackModule = () => {
		setActive(true)
	}
	const onCloseCardModule = () => {
		setActive(false)
	}
	const addCardHandler = () => {
		packId && dispatch(addPackTC(packId,question,answer))
		setQuestion('')
		setAnswer('')
	}


	return (
		<div>
			<SuperButton onClick={onAddPackModule}>Add card</SuperButton>
			<Modal active={active} setActive={setActive}>
				<div className={s.addPackBlockWrapper}>
					<div>
						<h3>Add new card</h3>
					</div>
					<div>
						<div>
							<SuperInputText placeholder='Question' onChangeText={setQuestion} value={question}/>
						</div>
						<div className={s.addPackBlockTextArea}>
							<SuperTextArea placeholder='Answer' onChangeText={setAnswer} value={answer}/>
						</div>
					</div>
					<div>
						<SuperButton onClick={onCloseCardModule}>Cansel</SuperButton>
						<SuperButton disabled={disable} onClick={addCardHandler}>Save</SuperButton>
					</div>
				</div>
			</Modal>
		</div>
	)
}


