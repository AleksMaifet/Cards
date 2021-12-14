import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStoreType} from "../../store/store";

type PrivateRouterType = {
	children: JSX.Element
}

export const NewPasswordPrivetRoute = ({children, ...rest}: PrivateRouterType) => {
	const isNewPass = useSelector<AppStoreType, boolean>(state => state.forgot.newPass)

	if (isNewPass) {
		return <Navigate to='/login'/>
	}
	return children
}