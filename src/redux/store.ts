import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {currencyReducer} from "./currency/reducer";
import {currencyWatcher} from "./currency/sagas";
import {cryptoCurrencyReducer} from "./cryptoCyrrency/reducer";
import rootSaga from "./sagaRoot";
import {covidReducer} from "./covid/reducer";
import {weatherReducer} from "./weather/reducer";
import {stocksReducer} from "./stocks/reducer";

const rootReducer = combineReducers({
    currencyPage: currencyReducer,
    cryptoCurrencyPage: cryptoCurrencyReducer,
    covidPage: covidReducer,
    weatherPage: weatherReducer,
    stocksPage: stocksReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const sagaMiddleware = createSagaMiddleware()

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store