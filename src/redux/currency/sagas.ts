import {call, put, takeEvery} from "redux-saga/effects";
import {currencyDataAPI} from "../../api/currency-api";
import {currencyActions} from "./reducer";

export function* getCurrencyData(): any {
   try {
       yield put(currencyActions.requestCurrencyData())
       const data = yield call(currencyDataAPI.getCurrencyData)
       yield put(currencyActions.requestCurrencyDataSuccess(data))
   }
   catch (error) {
       yield put(currencyActions.requestCurrencyDataFailed())
   }
}

export function* currencyWatcher(){
    yield takeEvery('FETCHED_CURRENCY_DATA', getCurrencyData)
}