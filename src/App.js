import React, { Component } from 'react';
import './App.css';
import router from './router';
import Nav from './components/Nav/Nav';
import { withRouter } from 'react-router-dom'
import SideBar from './components/SideBar/SideBar'

class App extends Component {
  render() {
    return (
      <div className='App-Container'>
        <div className='Nav-Container'>
          <Nav />
        </div>



        <div className='Body-Container'>

          <div className='Left-Body-Container'>
            
          {/* <div className='Left-Side-Bar-Container'> */}
      <SideBar/>

          {/* </div> */}
          </div>
          <div className='Center-Body-Container'>
            
          {router}
          </div>
          <div className='Right-Body-Container'>
            
          <div className='Right-Side-Bar-Container'>

          </div>
          </div>

        </div>

      </div>


    );
  }
}

export default withRouter(App);
