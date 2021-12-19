import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registrationReducer} from "../Reducers/RegistrationReducer";
import {forgotReducer} from "../Reducers/ForgotReducer";
import {appReducer} from "../Reducers/AppReducer";
import {loginReducer} from "../Reducers/login-reducer";
import {packsReducer} from "../Reducers/PacksReducer";
import {cardsReducer} from "../Reducers/CardsReducer";
import {searchByReducer} from "../Reducers/SearchByReducer";
import {sortByReducer} from "../Reducers/SortByReducer";
import {paginationReducer} from "../Reducers/PaginationReducer";
import {rangeReducer} from "../Reducers/RangeReducer";

const reducers = combineReducers({
	app: appReducer,
	registration: registrationReducer,
	forgot: forgotReducer,
	login:loginReducer,
	packs: packsReducer,
	cards: cardsReducer,
	searchBy: searchByReducer,
	sortBy: sortByReducer,
	pagination: paginationReducer,
	range: rangeReducer,
})

export const store = createStore(reducers,applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore

window.store = store