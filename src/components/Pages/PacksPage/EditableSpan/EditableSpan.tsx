import React, {useState, ChangeEvent, KeyboardEvent} from "react";

type EditableSpanType = {
	spanTitle: string
	callback: (spanTitle: string,packId:string) => void
	packId:string
	isMyTitle?:boolean
}

export const EditableSpan = React.memo(({spanTitle, ...props}: EditableSpanType) => {
	const [title, setTitle] = useState('')
	const [changeTitle, setChangeTitle] = useState(false)
	const changeHandler = () => {
		setChangeTitle(true)
		setTitle(spanTitle)
	}
	const changeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
	setTitle(e.currentTarget.value)
	}
	const activeChangeMode = () => {
		props.callback(props.packId,title)
		setChangeTitle(false)
	}
	const changeInputEnter = (e:KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			activeChangeMode()
		}
	}
	return (
		changeTitle && props.isMyTitle
			? <input value={title} onChange={changeInputHandler} onBlur={activeChangeMode} onKeyPress={changeInputEnter} autoFocus/>
			: <span onDoubleClick={changeHandler}>{spanTitle}</span>
	)
})