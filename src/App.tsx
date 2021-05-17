import React from 'react';
import { Route } from 'react-router-dom';
import {Documentation} from "./components/Documentation/Documentation";
import {Currency} from "./components/CurrencyPage/Currency";
import {Main} from "./components/MainPage/Main";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: theme.typography.fontFamily
    }
}))

function App() {
    const classes = useStyles({});
  return (
    <div className={classes.root}>
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
