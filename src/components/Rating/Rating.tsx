import React from "react";
import s from './Rating.module.css'
import {RatingFunction} from "./RatingFunction";


type RatingType = {
	ratingValue: number
}


export const Rating = React.memo((props: RatingType) => {
	return (
		<div className={s.rating_result}>
			{
				RatingFunction(5).map((el,i) => <Star key={i} selected={props.ratingValue > el}/>)
			}
		</div>
	)
})

type StarType = {
	selected: boolean
}

export const Star = React.memo((props: StarType) => {
	const starRating = props.selected ? s.span_active : ''
	return (
		<span className={starRating}/>
	)
})