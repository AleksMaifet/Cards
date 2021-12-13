import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "../Reducers/AppReducer";
import thunk from "redux-thunk";
import {registrationReducer} from "../Reducers/RegistrationReducer";

const reducers = combineReducers({
	app: appReducer,
	registration: registrationReducer
})

export const store = createStore(reducers,applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore

window.store = store