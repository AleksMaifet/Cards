import React, {ChangeEvent, DetailedHTMLProps, KeyboardEvent,TextareaHTMLAttributes} from 'react'
import s from './SuperTextArea.module.css'

type DefaultAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>,HTMLTextAreaElement>

type SuperTextAreaPropsType = DefaultAreaPropsType & {
	onChangeText?: (value: string) => void
	onEnter?: () => void
	error?: string
	spanClassName?: string
}

const SuperTextArea: React.FC<SuperTextAreaPropsType> = (
	{
		onChange, onChangeText,
		onKeyPress, onEnter,
		error,
		className, spanClassName,

		...restProps
	}
) => {
	const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange
		&& onChange(e)

		onChangeText && onChangeText(e.currentTarget.value)
	}
	const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		onKeyPress && onKeyPress(e);
		onEnter
		&& e.key === 'Enter'
		&& onEnter()
	}
	const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
	const finalInputClassName = `${s.input} ${ error ? s.errorInput : s.superInput} ${className}`

	return (
		<>
			<textarea
				onChange={onChangeCallback}
				onKeyPress={onKeyPressCallback}
				className={finalInputClassName}
				{...restProps}
			/>
			{error && <span className={finalSpanClassName}>{error}</span>}
		</>
	)
}

export default SuperTextArea