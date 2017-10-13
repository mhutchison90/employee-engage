import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './AutoCompleteSearch.css';
import axios from 'axios';


const usersListArray = []

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      usersList: []
    }
  }

  componentDidMount() {
    axios.get('/api/users/').then(res => {
      // console.log(res)

      this.setState({
        usersList: res.data
      })
    })
  }



  render() {
    return (
      <div className='App'>
        <h1>AutoCompleteSearch</h1>
        
      
      </div>
    );
  };
};