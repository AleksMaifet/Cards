import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../Pages/ErrorPage/Error404";
import {ForgotPass} from "../Pages/NewPassPage/ForgotPass";
import {LoginContainer} from '../Pages/LoginPage/LoginContainer';
import {Profile} from "../Pages/ProfilePage/Profile";
import {Recovery} from "../Pages/RecoveryPage/Recovery";
import {RegistrationContainer} from "../Pages/RegistPage/RegistContainer";
import {ForgotPrivetRoute} from "./PrivetRoutes/ForgotPrivetRoute";
import {NewPasswordPrivetRoute} from "./PrivetRoutes/NewPasswordPrivetRoute";
import {CheckMail} from "../Pages/CheckMailPage/CheckMail";
import {CheckMailPrivetRoute} from "./PrivetRoutes/CheckMailPrivetRoute";
import {Packs} from "../Pages/PacksPage/PacksContainer";
import {Cards} from "../Pages/CardsPage/CardsContainer";


export const PATH = {
	LOGINPAGE: '/login',
	NEWPASSPAGE: '/set-new-password/:tokenId',
	PROFILEPAGE: '/profile',
	RECOVERYPAGE: '/recovery',
	REGISTRATIONPAGE: '/regist',
	CHECKMAIL: '/check-mail',
	PACKS: '/packs',
	CARDS: '/cards'
}

export const RoutesBlock = () => {
	return (
		<div>
			<Routes>
				<Route path={'/'} element={<Navigate to={PATH.LOGINPAGE}/>}/>
				<Route path={PATH.NEWPASSPAGE} element={
					<NewPasswordPrivetRoute>
						<ForgotPass/>
					</NewPasswordPrivetRoute>
				}/>
				<Route path={PATH.LOGINPAGE} element={<LoginContainer/>}/>
				<Route path={PATH.PROFILEPAGE} element={<Profile/>}/>
				<Route path={PATH.REGISTRATIONPAGE} element={<RegistrationContainer/>}/>
				<Route path={PATH.PACKS} element={<Packs/>}/>
				<Route path={PATH.CARDS} element={<Cards/>}/>
				<Route path={PATH.CHECKMAIL} element={
					<CheckMailPrivetRoute>
						<CheckMail/>
					</CheckMailPrivetRoute>
				}/>
				<Route path={PATH.RECOVERYPAGE} element={
					<ForgotPrivetRoute>
						<Recovery/>
					</ForgotPrivetRoute>
				}/>
				<Route path={'*'} element={<Error404/>}/>
			</Routes>
		</div>
	)
}
