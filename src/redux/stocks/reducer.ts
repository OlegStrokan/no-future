import {InferActionsTypes} from "../store";

const initialState = {
    stocksData: null,
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof stocksActions>

export const stocksReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'REQUEST_STOCKS_DATA': {
            return { ...state, }
        }
        case 'SET_STOCKS_DATA': {
            return { ...state, }
        }
        case 'REQUEST_STOCKS_DATA_FAILED': {
            return {...state, }
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

