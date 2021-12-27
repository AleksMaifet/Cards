import React from "react";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Range} from "../../DoubleRange/Range";
import {AuthLoad} from "../LoadPage/AuthLoad/AuthLoad";


type SearchContainerType = {
	myPacks:() => void
	allPacks:() => void
	whoisCard:string
	disabled:boolean
}

export const ShowPackBar = ({...props}:SearchContainerType) => {
	const {myPacks,allPacks,whoisCard,disabled} = props

	const myPacksHandler = () => {
		myPacks()
	}
	const allPacksHandler = () => {
		allPacks()
	}


	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ECECF9'}}>
			<div style={{marginBottom: '15px'}}><h3>Show packs cards</h3></div>
			<div>
				<SuperButton disabled={disabled}
										 illuminated={whoisCard.length !== 0} onClick={myPacksHandler}>My</SuperButton>
				<SuperButton disabled={disabled}
										 illuminated={whoisCard.length === 0} onClick={allPacksHandler}>All</SuperButton>
			</div>
			<div style={{marginTop:'30px'}}>
							<div style={{marginBottom: '15px'}}><h3>Number of cards</h3></div>
							<Range disabled={disabled}/>

			</div>
		</div>
	)
}