import React from "react";
import {useSelector} from "react-redux";
import {Navigate,useLocation} from "react-router-dom";
import {AppStoreType} from "../../store/store";
import {PATH} from "../RoutesBlock";

type PrivateRouterType = {
	children: JSX.Element
}

export const InitializationPrivateRoute = ({children, ...rest}: PrivateRouterType) => {
	const location = useLocation()
	const isAuth = useSelector((state: AppStoreType) => state.login.isAuth)

	if (!isAuth) {
		return <Navigate to={PATH.LOGINPAGE} state={{from: location}}/>
	}
	return children
}
