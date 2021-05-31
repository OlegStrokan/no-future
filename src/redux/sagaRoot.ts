import { all } from "redux-saga/effects";
import {cryptoCurrencyWatcher} from "./cryptoCyrrency/sagas";
import {currencyWatcher} from "./currency/sagas";
import {covidWatcher} from "./covid/sagas";
import {weatherWatcher} from "./weather/sagas";
import {stocksWatcher} from "./stocks/sagas";

export default function* rootSaga() {
    yield all([
        currencyWatcher(),
        cryptoCurrencyWatcher(),
        covidWatcher(),
        weatherWatcher(),
        stocksWatcher(),
    ])
}