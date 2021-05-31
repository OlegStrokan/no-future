import {call, put, takeEvery} from "redux-saga/effects";
import {stocksActions} from "./reducer";
import {stocksDataAPI} from "../../api/stocks-api";


export function* getStocksData(name: any): any {
   try {
       yield put(stocksActions.requestStocksData())
       const data = yield call(stocksDataAPI.getStocksData, name.name)
       yield put(stocksActions.requestStocksDataSuccess(data))
   }
   catch (error) {
       yield put(stocksActions.requestStocksDataFailed())
   }
}


export function* stocksWatcher(){
    yield takeEvery('FETCHED_STOCKS_DATA', getStocksData)
}