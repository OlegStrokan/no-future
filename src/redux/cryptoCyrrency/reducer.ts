import {CurrencyType} from "../../types/currency-types";
import {InferActionsTypes} from "../store";

const initialState = {
    cryptoCurrencyData: null as any | null,
    loading: false,
    error: false,
}

type InitialStateType = typeof initialState
export type ActionsTypes = InferActionsTypes<typeof cryptoCurrencyActions>

export const cryptoCurrencyReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
switch (action.type) {
    case 'REQUEST_CRYPTO_CURRENCY_DATA': {
        return {...state, loading: true}
    }
    case 'REQUEST_CRYPTO_CURRENCY_DATA_SUCCESS': {
        return {...state, cryptoCurrencyData: action.cryptoCurrencyData,  loading: false,
            error: false,}
    }
    case 'REQUEST_CRYPTO_CURRENCY_DATA_FAILED': {
        return {...state, loading: false, error: true, }
    }
    default: return state
}
}

export const cryptoCurrencyActions = {
    requestCryptoCurrencyData: ( ) => ({type: 'REQUEST_CRYPTO_CURRENCY_DATA'} as const),
    requestCryptoCurrencyDataSuccess: ( cryptoCurrencyData: any ) => ({type: 'REQUEST_CRYPTO_CURRENCY_DATA_SUCCESS', cryptoCurrencyData: cryptoCurrencyData} as const),
    requestCryptoCurrencyDataFailed: ( ) => ({type: 'REQUEST_CRYPTO_CURRENCY_DATA_FAILED'} as const),
    fetchedCryptoCurrencyData: ( name: any ) => ({type: 'FETCHED_CRYPTO_CURRENCY_DATA', name} as const),
}

