import {AppStateType} from "../store";


export const getCurrencyDataSelector = ((state: AppStateType) => state.currencyPage.cryptoCurrencyData)