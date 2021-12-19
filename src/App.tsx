import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {RoutesBlock} from "./components/RoutesBlock/RoutesBlock";
import {Load} from "./components/Pages/LoadPage/Load";
import {useDispatch} from "react-redux";
import {authMeTC} from './components/Reducers/login-reducer';

export const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(authMeTC())
		},[dispatch])
	return (
		<div className="App">
			<Header/>
			<Load/>
			<RoutesBlock/>
		</div>
	);
}

