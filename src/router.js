import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter,Switch } from 'react-router-dom';
import Counter from './containers/Counter/Counter';

import Login from './components/Login/Login';


const routes = () =>(
    <BrowserRouter>
    <Switch>
        
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Counter} />
    </Switch>
    </BrowserRouter>
);

export default routes;
