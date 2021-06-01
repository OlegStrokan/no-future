import {WeatherData} from "../../types/weather-types";
import {InferActionsTypes} from "../store";

const initialState = {
    weatherData: null as WeatherData | null,
    places: ['London','Prague'] as Array<string>,
    activePlace: 0,
    loading: false,
    error: false,

}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof weatherActions>

export const weatherReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'REQUEST_WEATHER_DATA': {
            return {...state,  loading: true, error: false}
        }
        case 'SET_WEATHER_DATA': {
            return { ...state, weatherData: action.weatherData, loading: false, error: false}
        }
        case 'SET_ACTIVE_PLACE': {
            return { ...state, activePlace: action.activePlace,  loading: false, error: false}
        }
        case 'SET_NEW_PLACE': {
            return {...state, places: [...state.places, action.newPlace], loading: false, error: false}
        }
        case 'REQUEST_WEATHER_DATA_FAILED': {
            return {...state,  loading: false, error: true}
        }
        default: return state
    }
}


export const weatherActions = {
    requestWeatherData: ( ) => ({type: 'REQUEST_WEATHER_DATA'} as const),
    requestWeatherDataSuccess: (weatherData: WeatherData) => ({type: 'SET_WEATHER_DATA', weatherData} as const),
    requestSetActivePlaceSuccess: (activePlace: number) => ({type: 'SET_ACTIVE_PLACE', activePlace} as const),
    requestSetNewPlaceSuccess: (newPlace: string) => ({type: 'SET_NEW_PLACE', newPlace} as const),
    requestWeatherDataFailed: ( ) => ({type: 'REQUEST_WEATHER_DATA_FAILED'} as const),
    fetchedWeatherData: ( name: string ) => ({type: 'FETCHED_WEATHER_DATA', name} as const),
}

