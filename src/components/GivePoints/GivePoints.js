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
const menuStyle= {}

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

    // handleWordCount = event => {
    //     const charCount = this.state.message.length;
        
    //     const charLeft = 140 - charCount;
    //     this.setState({ chars_left: charLeft});
    // }

    render() {

        return (
            <div className='Give-Points-Container'>
                <div className='give-points-drop-down-content' >
                <div className='give-points-drop-down-header'>Send Points</div>
                <div className='send-points-to-name'>
                <div className='give-points-field-name'>Who Do You Appreciate:  </div>
                {this.state.usersList.length ? <SearchAutoComplete
                    userData={this.state.usersList}
                    changeHandler={this.changeHandler}
                    handleValue={this.handleValue}
                    value={this.state.value}
                />
                    : null}
                    </div>

                <div className='number-of-points'>
                <div className='give-points-field-name'>How Many Points To Send: </div>
                    <input className='num-pts-send' name='pointsSent' type='number' value={this.state.pointsSent} onChange={(e) => {
                        this.setState({
                            pointsSent: e.target.value
                        })
                    }} />
                </div>
                <div className='give-points-message'>
                <div className='give-points-field-name'>Message: </div>
                    <textarea 
                    className='send-points-textarea'
                    name='message' 
                    type='text' 
                    maxlength='200'
                    value={this.state.message} 
                    onChange={(e) => {
                       this.setState({
                            message: e.target.value
                        })
                    }} />

                    <div className='Message-Char-Remaining-Container'>
                    <div className='message-char-remaining'>
                    remaining: {200-this.state.message.length}
                    </div>
                    </div>
                </div>

                <div className='give-points-send-button'>
                    {this.state.sent === '' ? <button onClick={this.sendPoints}>Send!</button> : this.state.sent}
                </div>
                </div>

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
