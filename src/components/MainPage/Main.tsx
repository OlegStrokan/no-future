import React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {currencyActions} from "../../redux/currency/reducer";
import {cryptoCurrencyActions} from "../../redux/cryptoCyrrency/reducer";
import {covidActions} from "../../redux/covid/reducer";
import {weatherActions} from "../../redux/weather/reducer";
import {stocksActions} from "../../redux/stocks/reducer";

const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: '300px',
    }
}))

export const Main = () => {
    const dispatch = useDispatch()

    const classes = useStyles({});
    return (
        <Grid container spacing={3}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <button onClick={() => dispatch(cryptoCurrencyActions.fetchedCryptoCurrencyData('bitcoin'))}>onclick</button>
                <button onClick={() => dispatch(currencyActions.fetchedCurrencyData())}>onclick</button>
                <button onClick={() => dispatch(covidActions.fetchedCasesData('USA'))}>onclick</button>
                <button onClick={() => dispatch(weatherActions.fetchedWeatherData('Kiev'))}>onclick</button>
                <button onClick={() => dispatch(stocksActions.fetchedStocksData('IBM'))}>onclick</button>
                <Paper className={classes.paper}><Link to={'/currency'}>Currency</Link></Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Paper className={classes.paper}><Link to={'/weather'}>Weather</Link></Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Paper className={classes.paper}><Link to={'/cryptocurrency'}>CryptoCurrency</Link></Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Paper className={classes.paper}><Link to={'/covid19'}>Covid19</Link></Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Paper className={classes.paper}><Link to={'/stocks'}>Stocks</Link></Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Paper className={classes.paper}><Link to={'/nothing'}>Nothing</Link></Paper>
            </Grid>
        </Grid>
    );
};

