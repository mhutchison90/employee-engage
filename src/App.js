import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login'
import Private from './components/Private/Private'
import Logout from './components/Logout/Logout'
import AddEmployee from './components/AddEmployee/AddEmployee.js';
import AllEmployees from './components/AllEmployees/AllEmployees';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route component={AllEmployees} path='/' exact />
          <Route component={AddEmployee} path='/addemployee' />
          <Route component={Login} path='/Login' />
          <Route component={Private} path='/private' />
          <Route component={Logout} path='/Logout' />
        </div>
      </HashRouter>

    );
  }
}

export default App;
