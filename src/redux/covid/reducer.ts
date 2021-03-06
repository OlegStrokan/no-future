import {InferActionsTypes} from "../store";
import {CovidDataType} from "../../types/covid-types";

const initialState = {
    totalCasesData: null as CovidDataType | null,
    todayCasesData: null as CovidDataType | null,
    loading: false,
    error: false,
}

type InitialStateType = typeof initialState
export type ActionsTypes = InferActionsTypes<typeof covidActions>

export const covidReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
switch (action.type) {
    case 'REQUEST_CASES_DATA': {
        return {...state, loading: true}
    }
    case 'REQUEST_TOTAL_CASES_SUCCESS': {
        return {...state, totalCasesData: action.totalCasesData,  loading: false, error: false,}
    }
    case 'REQUEST_TODAY_CASES_SUCCESS': {
        return {...state, todayCasesData: action.todayCasesData,  loading: false, error: false,}
    }
    case 'REQUEST_CURRENCY_DATA_FAILED': {
        return {...state, loading: false, error: true, }
    }
    default: return state
}
}

export const covidActions = {
    requestCases: ( ) => ({type: 'REQUEST_CASES_DATA'} as const),
    requestTotalCasesSuccess: (totalCases: any ) => ({type: 'REQUEST_TOTAL_CASES_SUCCESS', totalCasesData: totalCases} as const),
    requestTodayCasesSuccess: (todayCases: any ) => ({type: 'REQUEST_TODAY_CASES_SUCCESS', todayCasesData: todayCases} as const),
    requestCasesFailed: ( ) => ({type: 'REQUEST_CURRENCY_DATA_FAILED'} as const),
    fetchedTotalCasesData: ( name: string ) => ({type: 'FETCHED_TOTAL_CASES', name} as const),
    fetchedTodayCasesData: ( name: string ) => ({type: 'FETCHED_TODAY_CASES', name} as const),
}

