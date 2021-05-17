
import axios from "axios";

export const cryptoCurrencyDataAPI = {
    getCryptoCurrencyData(name: string) {
        return axios.get(`https://api.coingecko.com/api/v3/coins/${name}`)
            .then(response => response.data)
    }
}
