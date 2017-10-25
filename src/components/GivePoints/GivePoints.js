import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './GivePoints.css';
import axios from 'axios';
import SearchAutoComplete from './SearchAutoComplete';
import { getListOfEmployees } from '../../ducks/reducer'
import { connect } from 'react-redux';

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
            value: '',
            targetValue: '',
            usersList: [],
            employeeList: [],
            pointbalance:'',
            allowancebalance:'',
            sent:'',           
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
            const { me, sendTo, pointsSent } = this.state
            axios.put('/api/sendpoints', { me, sendTo, pointsSent }).then(res => {
                this.setState({
                    user: res.data,
                    allowancebalance: this.state.allowancebalance-=this.state.pointsSent,
                    sent: 'Points Sent!'
                })
            })
    }


    render() {

        return (
            <div className='App'>
                <h1>Send Points</h1>
                {/* {console.log(this.state)} */}

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
                    {this.state.sent===''?<button onClick={this.sendPoints}>Send Points!</button>: this.state.sent}
                    
                </div>
                <p>pointbalance:{this.state.pointbalance}</p>
                <p>allowancebalance:{this.state.allowancebalance}</p>





            </div>
        );
    };
};

function mapStateToProps(state) {
    console.log("state from givePoints", state)    
    return {
        employeeList: state.employeeList,
        user: state.user
    }
}

export default connect(mapStateToProps, { getListOfEmployees })(GivePoints);
