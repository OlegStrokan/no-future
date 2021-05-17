import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrencyDataSelector} from "../../redux/currency/selectors";

export const Currency = () => {
    const currencyData = useSelector(getCurrencyDataSelector)

    const dispatch = useDispatch()

    return (
        <div>
            currency
        </div>
    );
};

