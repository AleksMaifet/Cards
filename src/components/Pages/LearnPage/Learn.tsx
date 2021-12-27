import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {CardType} from "../../ApiRequests/apiCards";
import {setCardTC, setPackIdAC} from "../../Reducers/CardsReducer";
import Carousel, {CarouselItem} from "./Carousel/Carousel";
import {Card} from "./Card/Card";
import SuperRadio from "../../superComponents/c6-SuperRadio/SuperRadio";
import {IsLoadType} from "../../Reducers/AppReducer";
import {AuthLoad} from "../LoadPage/AuthLoad/AuthLoad";


export const Learn = () => {
	const {packId} = useParams<'packId'>()
	const dispatch = useDispatch()
	const isPackLoad =  useSelector<AppStoreType, IsLoadType>(state => state.packs.isPackLoad)
	const [cardsToLearn, setCardsToLearn] = useState<'all' | 'untrained'>('all')
	const onSetCardsToLearn = (value: "all" | 'untrained') => {
		setCardsToLearn(value)
	}
	const [randomCards, setRandomCards] = useState<"yes" | "no">("no")
	const onSetRandomCards = (value: "yes" | "no") => {
		setRandomCards(value)
	}
	useEffect(() => {
		packId && dispatch(setPackIdAC(packId))
		dispatch(setCardTC())
	}, [dispatch, packId])

	let cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards.cards);
	if (cardsToLearn === 'untrained') {
		cards = cards.filter(card => card.grade < 4)
	}
	if (randomCards === "yes") {
		cards = [...cards.sort(() => Math.random() - 0.5)]
	}
	const cardsForRender = cards.map(card => {
		return (
			<CarouselItem key={card._id}>
				<Card question={card.question} answer={card.answer} id={card._id}/>
			</CarouselItem>
		)
	})
	return (
		isPackLoad === 'loading' ?
			<AuthLoad/>
			:
			<div>
				<div>
					Let's train! <SuperRadio onChangeOption={onSetCardsToLearn} options={['all', 'untrained']}
																	 value={cardsToLearn}/>
					<hr></hr>
					Randomize? <SuperRadio onChangeOption={onSetRandomCards} options={['yes', 'no']} value={randomCards}/>
				</div>
				<Carousel>
					{cardsForRender}
				</Carousel>
			</div>
	)
}