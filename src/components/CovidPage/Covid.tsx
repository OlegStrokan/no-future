import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrencyDataSelector} from "../../redux/currency/selectors";

export const Covid = () => {
    const covidData = useSelector(getCurrencyDataSelector)

    const dispatch = useDispatch()

    return (
        <div>
            covid
        </div>
    );
};

