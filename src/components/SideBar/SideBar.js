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

        
        if (this.props.user.id) {
        return (
            <div className='Side-Bar-Container'>
                <div className='Sidebar-Balances-Container'>
                    <div className='Balance-Container-Box'>
                         You Can Give:
                     <div className='side-bar-balance'>{this.props.user.allowancebalance}</div>
                    </div>
                    <div className='Balance-Container-Box'> 
                        You Can Spend:
                         <div className='side-bar-balance'>{this.props.user.pointbalance}</div>
                    </div>
                </div>
                {/* <div><GivePoints/></div> */}

            </div>
        );
    }else{
        return(
            <div className='Side-Bar-Container'></div>
        )
    }
    };
};

function mapStateToProps(state) {
    // console.log("State from SideBar", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SideBar);
