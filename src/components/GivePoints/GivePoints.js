import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './GivePoints.css';
import axios from 'axios';
import SearchAutoComplete from './SearchAutoComplete';
import { getListOfEmployees } from '../../ducks/reducer'
import { connect } from 'react-redux';



class GivePoints extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            me: 1,
            sendTo: '',
            pointsSent:'',
            value: '',
            targetValue: '',
            usersList: [],
            employeeList:[],

        }
        this.sendPoints = this.sendPoints.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.handleValue = this.handleValue.bind(this)
    }

    // componentDidMount() {
    //     this.props.getListOfEmployees();
    // }

    componentDidMount() {
        axios.get('/api/list/users').then(res => {
            // console.log('res.data: ',res.data)
            // console.log('res.data.id: ',res.data)
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

    handleValue(value,id) {

        this.setState({
            value: value,
            sendTo: id
        })
    }

    sendPoints() {
        const { me, sendTo, pointsSent} = this.state
        axios.put('/api/sendpoints', { me, sendTo, pointsSent }).then(res => {
            this.setState({
                user: res.data
            })
        })
    }


    render() {
        console.log("state from GivePoints", this.props)
        
        return (
            <div className='App'>
                <h1>Send Points</h1>
                {console.log(this.state)}

                Who Do You Appreciate: <input name='sendTo' type='text' value={this.state.sendTo} onChange={(e) => {
                    this.setState({
                        sendTo: e.target.value
                    })
                }} />
                                Who Do You Appreciate:  {this.state.usersList.length ? <SearchAutoComplete
                    userData={this.state.usersList}
                    changeHandler={this.changeHandler}
                    handleValue={this.handleValue}
                    value={this.state.value}
                />
                    : null}

                How Many Points To Send: <input name='pointsSent' placeholder='number required' type='text' value={this.state.pointsSent} onChange={(e) => {
                    this.setState({
                        pointsSent: e.target.value
                    })
                }} />

                <div>
                    <button onClick={this.sendPoints}>Send Points!</button>
                </div>




            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        employeeList: state.employeeList
    }
}

export default connect(mapStateToProps,  { getListOfEmployees })(GivePoints);
