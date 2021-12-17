import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStoreType} from "../../store/store";

type PrivateRouterType = {
	children: JSX.Element
}

export const CheckMailPrivetRoute  = ({children, ...rest}: PrivateRouterType) => {
	const isRecovery = useSelector<AppStoreType, boolean>(state => state.forgot.isRecovery)

	if (isRecovery) {
		return children
	}
	return <Navigate to='/recovery'/>
}