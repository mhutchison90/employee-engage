import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { getUserInfo, getPointHistory } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import _ from 'lodash';
import GivePoints from '../GivePoints/GivePoints';
import DashTile from './DashTile'


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            transactions: [],
            pointHistory: [],
            showGivePoints: true
        }
    }

    componentDidMount() {
        this.toggle_GivePoints('give-Points-drop-down');
        this.props.getUserInfo();
        this.props.getPointHistory();
        // axios.get('/api/user/pointhistory/*').then(res => {
        //     this.setState({
        //         pointHistory: res.data
        //     })
        // })
    }

    toggle_GivePoints(element_id) {
        var element = document.getElementById(element_id);
        // element.style.display = (element.style.display != 'none' ? 'none' : 'block');
        if (this.state.showGivePoints === false) {
            element.style.display = (element.style.display = 'block');
            this.setState({
                showGivePoints: true
            })
        } else {
            element.style.display = (element.style.display = 'none');
            this.setState({
                showGivePoints: false
            })
        }
    }

    render() {
        // console.log('TransactionArr: ',transactionArr)
        const user = this.props.user;

        return (
            <div className='Dashboard-Body-Container'>
                <div className='toggle_GivePoints' onClick={_ => this.toggle_GivePoints('give-Points-drop-down')}>Send Points</div>
                <div className='Dashboard-Give-Points-Container'>
                    <div className='give-Points-drop-down-box'>
                        <div id='give-Points-drop-down'>
                            <GivePoints />
                        </div>
                    </div>
                </div>
                <div className="Dashboard-History-Container">
                    <div className="Dashboard-Point-Tiles-Container">
                        <DashTile/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from Dashboard", state)
    return {
        user: state.user,
        pointHistory: state.pointHistory
    }
}

export default connect(mapStateToProps, { getUserInfo, getPointHistory })(Dashboard);
