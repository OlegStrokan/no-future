import {CurrencyType} from "../../types/currency-types";
import {InferActionsTypes} from "../store";

const initialState = {
    cryptoCurrencyData: null as CurrencyType | null,
    loading: false,
    error: false,
}

type InitialStateType = typeof initialState
export type ActionsTypes = InferActionsTypes<typeof currencyActions>

export const currencyReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
switch (action.type) {
    case 'REQUEST_CURRENCY_DATA': {
        return {...state, loading: true}
    }
    case 'REQUEST_CURRENCY_DATA_SUCCESS': {
        return {...state, cryptoCurrencyData: action.cryptoCurrencyData,  loading: false,
            error: false,}
    }
    case 'REQUEST_CURRENCY_DATA_FAILED': {
        return {...state, loading: false, error: true, }
    }
    default: return state
}
}

export const currencyActions = {
    requestCurrencyData: ( ) => ({type: 'REQUEST_CURRENCY_DATA'} as const),
    requestCurrencyDataSuccess: (cryptoCurrencyData: any ) => ({type: 'REQUEST_CURRENCY_DATA_SUCCESS', cryptoCurrencyData: cryptoCurrencyData} as const),
    requestCurrencyDataFailed: ( ) => ({type: 'REQUEST_CURRENCY_DATA_FAILED'} as const),
    fetchedCurrencyData: ( ) => ({type: 'FETCHED_CURRENCY_DATA'} as const),
}

