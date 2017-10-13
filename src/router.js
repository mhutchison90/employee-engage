import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// --IMPORTING COMPONTENTS--
import AddEmployee from './components/AddEmployee/AddEmployee'
import EditEmployee from './components/EditEmployee/EditEmployee'
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
        <Route path='/EditEmployee' component={EditEmployee} />
        <Route path='/AddProduct' component={AddProduct} />
        <Route path='/AllEmployees' component={AllEmployees} />
        <Route path='/AutoCompleteSearch' component={AutoCompleteSearch} />
        <Route path='/Login' component={Login} />
        <Route path='/Logout' component={Logout} />
        <Route path='/Private' component={Private} />
    </Switch>
)