import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import router from './router';
import Nav from './components/Nav/Nav';
import { withRouter } from 'react-router-dom'
import SideBar from './components/SideBar/SideBar'

class App extends Component {

  componentWillMount() {

    axios.put('/api/reset/user')
      .then(res => {
        console.log('DEMO USER RESET')
      })

  }

  render() {
    console.log('PATH: ',this.props.location.pathname)
    return (
      <div className='App-Container'>
      {this.props.location.pathname === '/' ? 
        <div className='Home-Shadow' ><div className='Home-Screen' >{router}</div></div> : null }

        <div className='Nav-Container'>
          <Nav />
        </div>
        <div className='Body-Container'>
          <div className='Left-Body-Container'>
            <SideBar />
          </div>
          <div className='Center-Body-Container'>
            {router}
          </div>
          <div className='Right-Body-Container'>
            <div className='Right-Side-Bar-Container'>
            </div>
          </div>

        </div>
        {/* {this.props.location.pathname === '/' ? 
        <div className='Home-Screen' >{router}</div> : null } */}
      </div>


    );
  }
}

export default withRouter(App);
