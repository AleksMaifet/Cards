import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {RoutesBlock} from "./components/RoutesBlock/RoutesBlock";
import {Load} from "./components/Pages/LoadPage/Load";
import {useDispatch, useSelector} from "react-redux";
import {authMeTC} from './components/Reducers/login-reducer';
import {AppStoreType} from "./components/store/store";
import {PopUp} from "./modals/Pop-Up/PopUp";

export const App = () => {
	const dispatch = useDispatch()
	const isAuthLoad = useSelector((state: AppStoreType) => state.app.isLoadAuth)

	useEffect(() => {
		dispatch(authMeTC())
	}, [dispatch])

	if (isAuthLoad) {
		return <Load/>
	}

	return (
		<div className="App">
			<Header/>
			<Load/>
			<PopUp/>
			<RoutesBlock/>
		</div>
	);
}

