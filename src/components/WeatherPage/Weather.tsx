import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrencyDataSelector} from "../../redux/currency/selectors";
import {getWeatherDataSelector} from "../../redux/weather/selectors";

export const Weather = () => {
    const weatherData = useSelector(getWeatherDataSelector)

    const dispatch = useDispatch()

    return (
        <div>
            weather
        </div>
    );
};

