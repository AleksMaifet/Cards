import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../RoutesBlock/RoutesBlock";

export const Header = () => {
	return (
		<div style={{display:'flex',justifyContent:'center'}}>
			<div style={{margin:'20px'}}>
				<NavLink to={PATH.LOGINPAGE}>login</NavLink>
			</div>
			<div style={{margin:'20px'}}>
				<NavLink to={PATH.NEWPASSPAGE}>newPass</NavLink>
			</div>
			<div style={{margin:'20px'}}>
				<NavLink to={PATH.PROFILEPAGE}>profile</NavLink>
			</div>
			<div style={{margin:'20px'}}>
				<NavLink to={PATH.RECOVERYPAGE}>revovery</NavLink>
			</div>
			<div style={{margin:'20px'}}>
				<NavLink to={PATH.REGISTRATIONPAGE}>registration</NavLink>
			</div>
			<div style={{margin:'20px'}}>
				<NavLink to={PATH.TESTPAGE}>test</NavLink>
			</div>
		</div>
	)
}
