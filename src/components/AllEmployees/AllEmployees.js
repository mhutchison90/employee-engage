import React, { Component } from "react";
import axios from 'axios';

import './AllEmployees.css';
import SearchAutoComplete from './SearchAutoComplete';
import AutoSuggest from './AutoSuggest'

export default class AllEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
            value: '',
            targetValue: '',
            id:''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.handleValue = this.handleValue.bind(this)
    }

    componentDidMount() {
        axios.get('/api/list/users').then(res => {
            // console.log(res)
            this.setState({
                usersList: res.data
            })
        })
    }


    changeHandler(e) {
        this.setState({
            value: e
        })
    }

    handleValue(value) {

        this.setState({
            value: value
        })
    }
    // getId(targetValue) {
    //     console.log('getId: ',targetValue)       
    //     this.setState({
    //         value: targetValue
    //     })
    // }

    render() {
        // console.log('all employees state: ',this.state.value)        
        return (
            <div className='App'>
               <h1>All Employees Search</h1>
                {this.state.usersList.length ? <AutoSuggest
                    userData={this.state.usersList}
                    changeHandler={this.changeHandler}
                    handleValue={this.handleValue}
                    value={this.state.value}
                />
                    : null}
            </div>
        );
    };
};