import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Modal} from "../../../../modals/Modal";
import SuperTextArea from "../../../superComponents/TextAreaComponent/TextAreaComponent";

type EditableSpanType = {
	answer: string
	callback: (packId:string,question: string,answer:string) => void
	packId:string
	isMyTitle?:boolean
}

export const EditableSpanPage = React.memo(({answer, ...props}: EditableSpanType) => {
	const [title, setTitle] = useState('')
	const [changeTitle, setChangeTitle] = useState(false)
	const changeHandler = () => {
		setChangeTitle(true)
		setTitle(answer)
	}
	const changeInputHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
	setTitle(e.currentTarget.value)
	}
	const activeChangeMode = () => {
		props.isMyTitle &&	props.callback(props.packId,'',title)
		setChangeTitle(false)
	}
	const changeInputEnter = (e:KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			activeChangeMode()
		}
	}

	return (
		changeTitle
			?
			<Modal active={changeTitle} setActive={setChangeTitle}>
				<>
					<SuperTextArea value={title} onChange={changeInputHandler} onBlur={activeChangeMode}
								 onKeyPress={changeInputEnter}
								 autoFocus
					/>
				</>
			</Modal>
			:
			<span onDoubleClick={changeHandler}>{answer}</span>
	)
})