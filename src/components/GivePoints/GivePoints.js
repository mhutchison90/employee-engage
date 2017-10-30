import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './GivePoints.css';
import axios from 'axios';
import SearchAutoComplete from './SearchAutoComplete';
import { getListOfEmployees, getPointHistory } from '../../ducks/reducer'
import { connect } from 'react-redux';
import dateCreator from '../DateCreator';

const pointBalanceDisplay = 0;
const allowanceBalanceDisplay = 0;


class GivePoints extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            me: '',
            sendTo: '',
            pointsSent: '',
            message: '',
            value: '',
            targetValue: '',
            usersList: [],
            employeeList: [],
            pointbalance: '',
            allowancebalance: '',
            sent: '',
            pointHistory: [],
            timestamp: Date.now(),
            menuStyle:{},
            wrapperStyle:{}
            }
        this.sendPoints = this.sendPoints.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.handleValue = this.handleValue.bind(this)
    }

    // componentDidMount() {
    //     this.props.getListOfEmployees();
    // }

    componentDidMount() {
        getListOfEmployees();
        axios.get('/api/list/users').then(res => {
            // console.log('res.data: ',res.data)
            // console.log('res.data.id: ',res.data)
            this.setState({
                usersList: res.data,
                pointbalance: this.props.user.pointbalance,
                me: this.props.user.employeeid,
                allowancebalance: this.props.user.allowancebalance,
            })
        });

    }
    changeHandler(e) {
        this.setState({
            value: e
        })
    }

    handleValue(value, id) {

        this.setState({
            value: value,
            sendTo: id
        })
    }

    sendPoints() {
        const { me, sendTo, pointsSent, message, timestamp } = this.state
        axios.put('/api/sendpoints', { me, sendTo, pointsSent, message, timestamp }).then(res => {
            this.setState({
                user: res.data,
                allowancebalance: this.state.allowancebalance -= this.state.pointsSent,
                sent: 'Points Sent!'
            })
        }).then(_ => {
            this.props.getPointHistory();
        })
    }


    render() {
        this.state.menuStyle={
            borderRadius: '9px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: '#bbbb5d',
            padding: '2px 0',
            fontSize: '90%',
            position: 'fixed',
            overflow: 'auto',
            maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
          }
          this.state.wrapperStyle={
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }
        return (
            <div className='Give-Points-Container'>
                <h1>Send Points</h1>
                {/* {console.log(this.state)} */}
                <div className='send-points-to-name'>
                <div className='give-points-field-name'>Who Do You Appreciate:  </div>
               {/* <div className=''></div> */}
                {this.state.usersList.length ? <SearchAutoComplete
                    userData={this.state.usersList}
                    changeHandler={this.changeHandler}
                    handleValue={this.handleValue}
                    value={this.state.value}
                    wrapperStyle={this.state.wrapperStyle}
                    menuStyle={this.state.menuStyle}
                />
                    : null}
                    </div>

                <div className='number-of-points'>
                <div className='give-points-field-name'></div>
                    How Many Points To Send: <input name='pointsSent' placeholder='number required' type='text' value={this.state.pointsSent} onChange={(e) => {
                        this.setState({
                            pointsSent: e.target.value
                        })
                    }} />
                </div>
                <div className='give-points-message'>
                <div className='give-points-field-name'></div>
                    Message: <textarea name='message' type='text' value={this.state.message} onChange={(e) => {
                        this.setState({
                            message: e.target.value
                        })
                    }} />
                </div>

                <div className='give-points-send-button'>
                    {this.state.sent === '' ? <button onClick={this.sendPoints}>Send Points!</button> : this.state.sent}
                </div>

<div className='give-points-field-name'></div>

            </div>
        );
    };
};

function mapStateToProps(state) {
    console.log("state from givePoints", state)
    return {
        employeeList: state.employeeList,
        user: state.user,
        pointHistory: state.pointHistory
    }
}

export default connect(mapStateToProps, { getListOfEmployees, getPointHistory })(GivePoints);
