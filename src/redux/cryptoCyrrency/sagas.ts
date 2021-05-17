import {call, put, takeEvery} from "redux-saga/effects";
import {cryptoCurrencyDataAPI} from "../../api/cryptoCurrency-api";
import {cryptoCurrencyActions} from "./reducer";

export function* getCryptoCurrencyData(name: any): any {
   try {
       yield put(cryptoCurrencyActions.requestCryptoCurrencyData())
       const data = yield call(cryptoCurrencyDataAPI.getCryptoCurrencyData, name.name)
       yield put(cryptoCurrencyActions.requestCryptoCurrencyDataSuccess(data))
   }
   catch (error) {
       yield put(cryptoCurrencyActions.requestCryptoCurrencyDataFailed())
   }
}

export function* cryptoCurrencyWatcher(){
    yield takeEvery('FETCHED_CRYPTO_CURRENCY_DATA', getCryptoCurrencyData)
}