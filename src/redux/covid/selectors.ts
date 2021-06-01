import {AppStateType} from "../store";


export const getTodayCasesDataSelector = ((state: AppStateType) => state.covidPage.todayCasesData)
export const getTotalCasesDataSelector = ((state: AppStateType) => state.covidPage.totalCasesData)