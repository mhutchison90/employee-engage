import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login'
import Private from './components/Private/Private'
import Logout from './components/Logout/Logout'

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
          <Route component={ Login } path='/' exact/>
          <Route component={ Private } path='/private'/>
          <Route component={ Logout } path='/Logout'/>
          </div>
        </HashRouter>
    );
  }
}

export default App;

