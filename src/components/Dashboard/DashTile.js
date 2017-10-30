import React, { Component } from 'react';
import './Dashboard.css';
import GivePoints from '../GivePoints/GivePoints'
import axios from 'axios';
import { connect } from 'react-redux';
import { getPointHistory } from '../../ducks/reducer'; 
import dateCreator from '../DateCreator';
import timeago from 'timeago.js';

class DashTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pointHistory: []
        }
    }

    componentDidMount() {
        this.props.getPointHistory();
        // axios.get('/api/user/pointhistory/*').then(res => {
        //     this.setState({
        //         pointHistory: res.data
        //     })
        // })
    }

    render() {
        var timeagoInstance = timeago();
        timeagoInstance.format(Date.now(),'10/29/2017 - 3:02 am')
        console.log('timeago',Date.now() )
        
        return (
            <div className="dashboard-point-tile">
            {timeago().format(1509005645-Date.now())}
            {/* 10/28/2017 - 4:30 pm */}
            


{console.log('Point hist props from dashtile:',this.props.pointHistory)
}
                {this.props.pointHistory.map((points, i) => {
                    return (
                        <div key={i} className='dashboard-point-history-tile'>
                            <div className='dashboard-tile-header'>
                                <div className='dashboard-tile-receivers-profile-picture'><img className='dash-tile-profile-picture' src={points.img} alt=''/> </div>
                                <div className='dashboard-tile-receivers-name'>{points.reciever}</div>
                                <div className='dashboard-tile-when-received'>{timeago().format(Date.now()-points.timestamp) }</div>
                            </div>
                            <div className='dashboard-tile-title'> Recognized by {points.sender} </div>
                            <div className='dashboard-tile-message'> {points.message} </div>

                            <div className='dashboard-tile-footer'>
                                <div className='dashboard-tile-like-button'>Like Button</div>
                                <div className='dashboard-tile-likes'>Likes: 5 </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        pointHistory: state.pointHistory
    }
}

export default connect(mapStateToProps, {getPointHistory })(DashTile);
