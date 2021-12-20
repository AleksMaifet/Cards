import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registrationReducer} from "../Reducers/RegistrationReducer";
import {forgotReducer} from "../Reducers/ForgotReducer";
import {appReducer} from "../Reducers/AppReducer";
import {loginReducer} from "../Reducers/login-reducer";
import {packsReducer} from "../Reducers/PacksReducer";
import {cardsReducer} from "../Reducers/CardsReducer";

const reducers = combineReducers({
	app: appReducer,
	registration: registrationReducer,
	forgot: forgotReducer,
	login:loginReducer,
	packs: packsReducer,
	cards: cardsReducer,
})

export const store = createStore(reducers,applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore

window.store = store