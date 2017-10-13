import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// --IMPORTING COMPONTENTS--
import AddEmployee from './components/AddEmployee/AddEmployee'
import AddProduct from './components/AddProduct/AddProduct'
import AllEmployees from './components/AllEmployees/AllEmployees'
import AutoCompleteSearch from './components/AutoCompleteSearch/AutoCompleteSearch'
import Login from './components/Login/Login'
import Logout from './components/Login/Login'
import Private from './components/Private/Private'


export default (
    <Switch>
        <Route exact path='/'  />
        <Route path='/AddEmployee' component={AddEmployee} />
        <Route path='/AddProduct' component={AddProduct} />
        <Route path='/AllEmployees' component={AddEmployee} />
        <Route path='/AutoCompleteSearch' component={AutoCompleteSearch} />
        <Route path='/Login' component={Login} />
        <Route path='/Logout' component={Logout} />
        <Route path='/Private' component={Private} />
    </Switch>
)