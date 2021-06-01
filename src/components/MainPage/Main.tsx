import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {currencyActions} from "../../redux/currency/reducer";
import {cryptoCurrencyActions} from "../../redux/cryptoCyrrency/reducer";
import {covidActions} from "../../redux/covid/reducer";
import {weatherActions} from "../../redux/weather/reducer";
import {stocksActions} from "../../redux/stocks/reducer";

const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
    },
    link: {
        color: '#323232',
    },
    image: {
        width: '100px',
        height: '100px',
        marginRight: '10px',
    },
    wrapper: {
        width: '90vw',
        display: 'flex',
        margin: '25px auto',
        justifyContent: 'center',

    }
}))

export const Main = () => {
    const dispatch = useDispatch()

    const classes = useStyles({});
    return (
        <Grid container spacing={3} className={classes.wrapper}>
            <Grid item  xl={3} md={4} sm={6} xs={12}>
                <Paper className={classes.paper}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" className={classes.image} />
                    <div>
                        <Typography variant="h6"><Link to={'/cryptocurrency'} className={classes.link}>Cryptocurrency</Link></Typography>
                        <Typography variant="subtitle1">This is subtitle</Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item  xl={3} md={4} sm={6} xs={12}>
                {/*<button onClick={() => dispatch(cryptoCurrencyActions.fetchedCryptoCurrencyData('bitcoin'))}>onclick</button>
                <button onClick={() => dispatch(currencyActions.fetchedCurrencyData())}>onclick</button>
                <button onClick={() => dispatch(covidActions.fetchedTodayCasesData('USA'))}>onclick</button>
                <button onClick={() => dispatch(covidActions.fetchedTotalCasesData('USA'))}>onclick</button>
                <button onClick={() => dispatch(weatherActions.fetchedWeatherData('Kiev'))}>onclick</button>
                <button onClick={() => dispatch(stocksActions.fetchedStocksData('IBM'))}>onclick</button>*/}
                <Paper className={classes.paper}>
                    <img src="https://images.vexels.com/media/users/3/157332/isolated/preview/9c1a0590528c68138bc08d9df0942f9d-dollar-currency-icon-by-vexels.png" className={classes.image} />
                    <div>
                        <Typography variant="h6"><Link to={'/currency'} className={classes.link}>Currency</Link></Typography>
                        <Typography variant="subtitle1">This is subtitle</Typography>
                    </div>
                </Paper>
            </Grid>
        <Grid item  xl={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
                <img src="https://purepng.com/public/uploads/large/purepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png" className={classes.image} />
                <div>
                    <Typography variant="h6"><Link to={'/weather'} className={classes.link}>Weather</Link></Typography>
                    <Typography variant="subtitle1">This is subtitle</Typography>
                </div>
            </Paper>
        </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
                <Paper className={classes.paper}>
                    <img src="https://www.pat.nhs.uk/Coronavirus/images/Covid%2019%20Icon.png" className={classes.image} />
                    <div>
                        <Typography variant="h6"><Link to={'/covid19'} className={classes.link}>Covid19</Link></Typography>
                        <Typography variant="subtitle1">This is subtitle</Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item  xl={3} md={4} sm={6} xs={12}>
                <Paper className={classes.paper}>
                    <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Stock-512.png" className={classes.image} />
                    <div>
                        <Typography variant="h6"> <Link to={'/stocks'} className={classes.link}>Stocks</Link></Typography>
                        <Typography variant="subtitle1">This is subtitle</Typography>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

