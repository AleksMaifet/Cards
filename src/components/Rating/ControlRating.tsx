import React from "react";
import s from './Rating.module.css'

type ControlRatingType = {
	rate:number
	setRate:(rate:number) => void
}

export const ControlRating = React.memo(({rate,setRate}: ControlRatingType) => {
	return (
		<div className={s.ControlRating_result}>
			<Star selected={rate > 0} setRate={setRate} value={1}/>
			<Star selected={rate > 1} setRate={setRate} value={2}/>
			<Star selected={rate > 2} setRate={setRate} value={3}/>
			<Star selected={rate > 3} setRate={setRate} value={4}/>
			<Star selected={rate > 4} setRate={setRate} value={5}/>
		</div>
	)
})

type StarType = {
	selected: boolean
	setRate: (rate: number) => void
	value: number
}

export const Star = React.memo((props: StarType) => {
	const starRating = props.selected ? s.span_active : ''
	const changeStarValue = () => {
		props.setRate(props.value)
	}
	return (
		<span onClick={changeStarValue} className={starRating}/>
	)
})