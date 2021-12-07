import {combineReducers, createStore} from "redux";
import {appReducer} from "../Reducers/AppReducer";

const reducers = combineReducers({
	app: appReducer,
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore

window.store = store