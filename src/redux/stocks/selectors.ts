import {AppStateType} from "../store";

export const getStocksDataSelector = ((state: AppStateType) => state.stocksPage.stocksData);

