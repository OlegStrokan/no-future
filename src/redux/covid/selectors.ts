import {AppStateType} from "../store";


export const getTodayCasesDataSelector = ((state: AppStateType) => state.covidPage.todayCases)
export const getTotalCasesDataSelector = ((state: AppStateType) => state.covidPage.totalCases)