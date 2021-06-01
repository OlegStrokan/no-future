import React from 'react';
import { Route } from 'react-router-dom';
import {Documentation} from "./components/Documentation/Documentation";
import {Currency} from "./components/CurrencyPage/Currency";
import {Main} from "./components/MainPage/Main";
import {Card, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: theme.typography.fontFamily
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
    }
}))

function App() {
    const classes = useStyles({});
  return (
    <div className={classes.root}>
        <Card className={classes.header}><Typography variant="h4">This is header</Typography></Card>
        <Route exact path='/'
               render={() => <Documentation/>}/>
        <Route path='/main'
               render={() => <Main/>}/>
        <Route path='/currency'
               render={() => <Currency/>}/>
    </div>
  );
}

export default App;
