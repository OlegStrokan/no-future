
import axios from "axios";
import {CryptoCurrencyType} from "../types/cryptoCurrency-types";

export const cryptoCurrencyDataAPI = {
    getCryptoCurrencyData(name: string) {
        return axios.get<CryptoCurrencyType>(`https://api.coingecko.com/api/v3/coins/${name}`)
            .then(response => response.data)
    }
}
