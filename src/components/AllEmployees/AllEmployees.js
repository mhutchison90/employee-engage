import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './AllEmployees.css';
import axios from 'axios';


export default class AllEmployees extends Component {
    constructor() {
        super();
        this.state = {
            usersList:[]
        }
    }

    componentDidMount() {
        axios.get('/api/users/').then(res => {
            console.log(res)
            
            this.setState({
                usersList: [res.data]
            })
        })
    }


    render() {
        return (
            <div className='App'>
                Get All Employees!
                {/* {this.setState({usersList: res.data})} */}
               {console.log(this.state.usersList)}
               
            </div> 
        );
    };
};