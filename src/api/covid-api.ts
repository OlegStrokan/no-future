import axios from "axios";
import {CurrencyType} from "../types/currency-types";


export const covidDataAPI = {
    getTotalCases(name: string) {
        return axios.get(`https://gateway.nubentos.com:443/nubentos.com/ncovapi/2.0.0/cases?=country=${name}`,{
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer 7ce716e5-d334-319f-b67e-57a5c57f1f6d'
            }
        })
            .then(response => response.data)
    },
    getTodayCases(name: string) {
        return axios.get(`https://gateway.nubentos.com:443/nubentos.com/ncovapi/2.0.0/Todaycases?=country=${name}`,{
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer 7ce716e5-d334-319f-b67e-57a5c57f1f6d'
            }
        })
            .then(response => response.data)
    }
}
