import axios from "axios";
import {CurrencyType} from "../types/currency-types";

export const currencyDataAPI = {
    getCurrencyData() {
        return axios.get<CurrencyType>(`https://www.cbr-xml-daily.ru/daily_json.js`)
            .then(response => response.data)
    }
}
