import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './SideBar.css';
import axios from 'axios';
import { connect } from 'react-redux';
import GivePoints from '../GivePoints/GivePoints'

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            // pointbalance:'',
            // allowancebalance:''
        }
    }

    // componentDidMount() {
    //     this.toggle_showPointHistory('Point-History-Container')
    // }

    render() {

        return (
            <div className='Side-Bar-Container'>
                
                <div className='you-can-give-sidebar'> You Can Give: {this.props.user.allowancebalance} </div>
                <div className='you-can-spend-sidebar'> You Can Spend: {this.props.user.pointbalance} </div>
                <div><GivePoints/></div>
                
            </div>
        );
    };
};

function mapStateToProps(state) {
    console.log("State from SideBar", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SideBar);
