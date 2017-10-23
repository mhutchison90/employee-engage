import React, { Component } from 'react';
import './App.css';
import router from './router';
import Nav from './components/Nav/Nav';
import { withRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className='App-Container'>
        <div className='Nav-Container'>
          <Nav />
        </div>
        <div className='Body-Container'>
        {router}
        </div>
      </div>


    );
  }
}

export default withRouter(App);
