import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './GivePoints.css';
import axios from 'axios';

export default class GivePoints extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            me: 1,
            sendTo: '',
            pointsSent:''

        }
        this.sendPoints = this.sendPoints.bind(this)
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
        return (
            <div className='App'>
                <h1>Send Points</h1>
                {console.log(this.state)}

                Who Do You Appreciate: <input name='sendTo' type='text' value={this.state.sendTo} onChange={(e) => {
                    this.setState({
                        sendTo: e.target.value
                    })
                }} />

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
