import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {RoutesBlock} from "./components/RoutesBlock/RoutesBlock";
import {Load} from "./components/Pages/LoadPage/Load";
import {useSelector} from "react-redux";
import {AppStoreType} from "./components/store/store";

export const App = () => {
	const isLoad = useSelector<AppStoreType, boolean>(state => state.app.isLoad)
	return (
		<div className="App">
			<Header/>
			{isLoad && <Load/>}
			<RoutesBlock/>
		</div>
	);
}

