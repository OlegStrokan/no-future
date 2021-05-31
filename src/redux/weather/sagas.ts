import {call, put, takeEvery} from "redux-saga/effects";
import {currencyDataAPI} from "../../api/currency-api";
import {weatherActions} from "./reducer";
import {weatherDataAPI} from "../../api/weather-api";


export function* getWeatherData(name: any): any {
   try {
       yield put(weatherActions.requestWeatherData())
       const data = yield call(weatherDataAPI.getWeatherData, name.name)
       yield put(weatherActions.requestWeatherDataSuccess(data))
   }
   catch (error) {
       yield put(weatherActions.requestWeatherDataFailed())
   }
}


export function* weatherWatcher(){
    yield takeEvery('FETCHED_WEATHER_DATA', getWeatherData)
}