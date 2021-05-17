import axios from "axios";
import {CurrencyType} from "../types/currency-types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://gateway.nubentos.com:443/nubentos.com/ncovapi/2.0.0/',
    headers: {
        "content-type": "application/json",
        "charset": "utf-8",
    },
})


export const covidDataAPI = {
    getTotalCases(name: string) {
        debugger
        return instance.get(`cases?=country=${name}?Authorization=7ce716e5-d334-319f-b67e-57a5c57f1f6d`)
            .then(response => response.data)
    },
    getTodayCases(name: string) {
        return axios.get(`todayCases?=country=${name}`)
            .then(response => response.data)
    }
}
