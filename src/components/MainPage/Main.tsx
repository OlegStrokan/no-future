import React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getCryptoCurrencyDataSelector} from "../../redux/cryptoCyrrency/selectors";
import {getCurrencyDataSelector} from "../../redux/currency/selectors";
import {currencyActions} from "../../redux/currency/reducer";
import {cryptoCurrencyActions} from "../../redux/cryptoCyrrency/reducer";
import {covidActions} from "../../redux/covid/reducer";

const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: '300px',
    }
}))

export const Main = () => {

    const cryptoCurrencyData = useSelector(getCryptoCurrencyDataSelector)
    const currencyData = useSelector(getCurrencyDataSelector)
    const dispatch = useDispatch()

    const classes = useStyles({});
    return (
        <Grid container spacing={3}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <button onClick={() => dispatch(cryptoCurrencyActions.fetchedCryptoCurrencyData('bitcoin'))}>onclick</button>
                <button onClick={() => dispatch(currencyActions.fetchedCurrencyData())}>onclick</button>
                <button onClick={() => dispatch(covidActions.fetchedCasesData('USA'))}>onclick</button>
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

