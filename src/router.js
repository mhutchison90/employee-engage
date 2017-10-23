import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// --IMPORTING COMPONTENTS--
import Home from './components/Home/Home'
import AddEmployee from './components/AddEmployee/AddEmployee'
import GivePoints from './components/GivePoints/GivePoints'
import EditEmployee from './components/EditEmployee/EditEmployee'
import AddProduct from './components/AddProduct/AddProduct'
import AllEmployees from './components/AllEmployees/AllEmployees'
import AutoCompleteSearch from './components/AutoCompleteSearch/AutoCompleteSearch'
import Login from './components/Login/Login'
import Logout from './components/Login/Login'
import Private from './components/Private/Private'
import Shop from './components/Shop/Shop'
import Profile from './components/Profile/Profile'
import Balances from './components/Balances/Balances'
import Details from './components/Details/Details'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/AddEmployee' component={AddEmployee} />
        <Route path='/EditEmployee' component={EditEmployee} />
        <Route path='/GivePoints' component={GivePoints} />
        <Route path='/AddProduct' component={AddProduct} />
        <Route path='/AllEmployees' component={AllEmployees} />
        <Route path='/AutoCompleteSearch' component={AutoCompleteSearch} />
        <Route path='/Login' component={Login} />
        <Route path='/Logout' component={Logout} />
        <Route path='/Private' component={Private} />
        <Route path='/Shop' component={Shop} />
        <Route path='/Balances' component={Balances} />
        <Route path="/details/:productid" component={Details} /> 
        </Switch>
)