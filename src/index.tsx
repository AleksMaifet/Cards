import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./components/store/store";

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<React.StrictMode>
				<App/>
			</React.StrictMode>
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);

reportWebVitals();
