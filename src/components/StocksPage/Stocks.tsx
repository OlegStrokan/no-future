import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrencyDataSelector} from "../../redux/currency/selectors";
import {getStocksDataSelector} from "../../redux/stocks/selectors";


export const Stocks = () => {
    const stocksData = useSelector(getStocksDataSelector)

    const dispatch = useDispatch()

    return (
        <div>
            stocks
        </div>
    );
};
