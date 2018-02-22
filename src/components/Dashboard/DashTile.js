import React, { Component } from 'react';
import './Dashboard.css';
import GivePoints from '../GivePoints/GivePoints'
import axios from 'axios';
import { connect } from 'react-redux';
import { getPointHistory } from '../../ducks/reducer'; 
import dateCreator from '../DateCreator';
import { Link } from 'react-router-dom';
// import TimeAgo from 'react-timeago';


let currentdate = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit" , minute: "2-digit"};
let timestamp = currentdate.toLocaleString('en-US',options)
console.log('michaels',currentdate.toLocaleString('en-US', options))
// (currentdate.getMonth() + 1) + "/"
//     + currentdate.getDate() + "/"
//     + currentdate.getFullYear() + " @ "
//     + currentdate.getHours() + ":"
//     + (currentdate.getMinutes() < 10 ? `0${currentdate.getMinutes()}`: currentdate.getMinutes());

    // console.log('minutes',min)
//     console.log('timestamp',
//     (currentdate.getSeconds() < 10 ? `0${currentdate.getSeconds()}`: currentdate.getSeconds())
// )
console.log('michaels toLocaleString',timestamp)



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

        
        return (
            <div className="dashboard-point-tile">
       
            


{console.log('Point hist props from dashtile:',this.props.pointHistory)
}
                {this.props.pointHistory.map((points, i) => {
                    return (
                        <div key={i} className='dashboard-point-history-tile'>
                            <div className='dashboard-tile-header'>
                                <div className='dashboard-tile-receivers-profile-picture'><Link id='profileLink' to={`/friendprofile/${points.recieverid}`}><img className='dash-tile-profile-picture' src={points.img} alt=''/> </Link></div>
                                <div className='dashboard-tile-receivers-name'><Link id='profileLink' to={`/friendprofile/${points.recieverid}`}>{points.reciever} </Link></div> 
                                {/* <div className='dashboard-tile-when-received'><TimeAgo date={points.timestamp} /></div> */}
                            </div>
                            <div className='dashboard-tile-title'> Recognized by <Link id='profileLink' to={`/friendprofile/${points.senderid}`}>{points.sender}</Link> </div>
                            <div className='dashboard-tile-message'> {points.message} </div>

                            <div className='dashboard-tile-footer'>
                                {/* <div className='dashboard-tile-like-button'>Like Button</div> */}
                                <div className='dashboard-tile-likes'>Likes: {Math.floor((Math.random() + 1 ) * 7)} </div>
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
