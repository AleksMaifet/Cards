import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registrationReducer} from "../Reducers/RegistrationReducer";
import {forgotReducer} from "../Reducers/ForgotReducer";
import {appReducer} from "../Reducers/AppReducer";
import {loginReducer} from "../Reducers/login-reducer";

const reducers = combineReducers({
	app: appReducer,
	registration: registrationReducer,
	forgot: forgotReducer,
	login:loginReducer,
})

export const store = createStore(reducers,applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore

window.store = store