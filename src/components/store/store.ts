import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "../Reducers/AppReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
	app: appReducer,
})

export const store = createStore(reducers,applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore

window.store = store