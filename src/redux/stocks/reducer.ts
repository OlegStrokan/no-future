import {InferActionsTypes} from "../store";
import {StocksDataType} from "../../types/stocks-types";

const initialState = {
    stocksData: null as StocksDataType | null,
    loading: false,
    error: false,
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof stocksActions>

export const stocksReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'REQUEST_STOCKS_DATA': {
            return { ...state,  loading: true, error: false}
        }
        case 'SET_STOCKS_DATA': {
            return { ...state, stocksData: action.stocksData, loading: false, error: false}
        }
        case 'REQUEST_STOCKS_DATA_FAILED': {
            return {...state,  loading: false, error: true}
        }
        default: return state
    }
}


export const stocksActions = {
    requestStocksData: ( ) => ({type: 'REQUEST_STOCKS_DATA'} as const),
    requestStocksDataSuccess: (stocksData: any) => ({type: 'SET_STOCKS_DATA', stocksData} as const),
    requestStocksDataFailed: ( ) => ({type: 'REQUEST_STOCKS_DATA_FAILED'} as const),
    fetchedStocksData: ( name: string ) => ({type: 'FETCHED_STOCKS_DATA', name} as const),
}

