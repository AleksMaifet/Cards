import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {forgotReducer} from "../Reducers/ForgotReducer";
import {appReducer} from "../Reducers/AppReducer";

const reducers = combineReducers({
	app:appReducer,
	forgot: forgotReducer,
})

export const store = createStore(reducers,applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore

window.store = store