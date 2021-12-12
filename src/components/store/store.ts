import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "../Reducers/AppReducer";
import thunk from "redux-thunk";
import {loginReducer} from "../Reducers/login-reducer";

const reducers = combineReducers({
	app: appReducer,
	login:loginReducer
})

export const store = createStore(reducers,applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore

window.store = store