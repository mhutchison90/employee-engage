import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import _ from 'lodash';
import GivePoints from '../GivePoints/GivePoints'


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
        axios.get('/api/user/pointhistory/*').then(res => {
            this.setState({
                pointHistory: res.data
            })
        })
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
                    <div className='toggle_GivePoints' onClick={_ => this.toggle_GivePoints('give-Points-drop-down')}>Show Give Points</div>
                <div className='Dashboard-Give-Points-Container'>
                    {/* <div className='thisOne'> */}
                    <div id='give-Points-drop-down'>
                        <div className='give-Points-drop-down-box'>

                        <GivePoints />
                        </div>
                    </div>

                    {/* </div> */}
                </div>
                <div className="Dashboard-History-Container">
                    <div className="Dashboard-Point-Tiles-Container">
                        {this.state.pointHistory.map((points, i) => {
                            return (
                                <div key={i} className='dashboard-point-history-tile'>
                                    <div className='dashboard-tile-header'>
                                        <div className='dashboard-tile-recievers-name'>{points.reciever}</div>

                                    </div>
                                    <div className='dashboard-tile-title'> was recognized by {points.sender} </div>
                                    <div className='dashboard-tile-message'> {points.message} </div>

                                    <div className='dashboard-tile-footer'>
                                        <div className='dashboard-tile-like-button'>Like Button</div>
                                        <div className='dashboard-tile-likes'>Likes: 5 </div>

                                    </div>


                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from Dashboard", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Dashboard);
