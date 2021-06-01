import axios from "axios";
import {CurrencyType} from "../types/currency-types";


export const stocksDataAPI = {
    getStocksData(name: string) {
        return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${name}&apikey=U78RYD97Z0LYVL4Q`)
    },
}
