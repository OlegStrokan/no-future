import {call, put, takeEvery} from "redux-saga/effects";
import {covidDataAPI} from "../../api/covid-api";
import {covidActions} from "./reducer";

export function* getTotalCasesData(name: any): any {
   try {
       yield put(covidActions.requestCases())
       const data = yield call(covidDataAPI.getTotalCases, name.name)
       yield put(covidActions.requestTotalCasesSuccess(data))
   }
   catch (error) {
       yield put(covidActions.requestCasesFailed())
   }
}

export function* getTodayCasesData(name: any): any {
    try {
        yield put(covidActions.requestCases())
        const data = yield call(covidDataAPI.getTodayCases, name)
        yield put(covidActions.requestTodayCasesSuccess(data))
    }
    catch (error) {
        yield put(covidActions.requestCasesFailed())
    }
}

export function* covidWatcher(){
    yield takeEvery('FETCHED_TOTAL_CASES', getTotalCasesData)
    yield takeEvery('FETCHED_TODAY_CASES', getTodayCasesData)
}