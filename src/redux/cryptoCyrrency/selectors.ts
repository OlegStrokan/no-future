import {AppStateType} from "../store";


export const getCryptoCurrencyDataSelector = ((state: AppStateType) => state.cryptoCurrencyPage.cryptoCurrencyData)