import {AppStateType} from "../store";

export const getWeatherDataSelector = ((state: AppStateType) => state.weatherPage.weatherData);
export const getPlacesSelector = ((state: AppStateType) => state.weatherPage.places);
export const getActivePlaceSelector = ((state: AppStateType) => state.weatherPage.activePlace);
