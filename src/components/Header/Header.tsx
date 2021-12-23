import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../RoutesBlock/RoutesBlock";


export const Header = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<div style={{margin: '20px'}}>
				<NavLink to={PATH.PROFILEPAGE}>Profile</NavLink>
			</div>
			<div style={{margin: '20px'}}>
				<NavLink to={PATH.PACKS}>Packs</NavLink>
			</div>
		</div>
	)
}
