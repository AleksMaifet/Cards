import React from "react";
import s from './Rating.module.css'
import {RatingFunction} from "./RatingFunction";

type ControlRatingType = {
	rate:number
	setRate:(rate:number) => void
}

export const ControlRating = React.memo(({rate,setRate}: ControlRatingType) => {
	return (
		<div className={s.ControlRating_result}>
			{RatingFunction(5).map((el,i) => <Star key={i} selected={rate > el} setRate={setRate} value={el+1}/>)}
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