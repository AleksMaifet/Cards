import React from "react";
import s from './Rating.module.css'


type RatingType = {
	ratingValue: number
}


export const Rating = React.memo((props: RatingType) => {
	return (
		<div className={s.rating_result}>
			<Star selected={props.ratingValue > 0}/>
			<Star selected={props.ratingValue > 1}/>
			<Star selected={props.ratingValue > 2}/>
			<Star selected={props.ratingValue > 3}/>
			<Star selected={props.ratingValue > 4}/>
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