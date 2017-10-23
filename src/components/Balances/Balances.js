import React, { Component } from 'react';
import axios from 'axios';
import { getEmployeesList } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Balances.css'

class Balances extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            employeeid: 1,
            pointBalance: '',
            allowanceBalance: '',
            employeeInfo: {}
        }
    }

    componentDidMount() {
        // console.log(this.props.getEmployeesList)
        this.props.getEmployeesList()
    }

    render() {
        console.log("employeesList state", this.props.employeesList)
        const employees = this.props.employeesList;
        return (
            employees.map((balances, i) => {
                return (
                    <div>
                        <div key={i} onClick={() => this.props.getEmployeesList(getEmployeesList[i].employeeid)}>Click Here</div>
                        <p>{balances.firstname}</p>
                        <p>{balances.pointBalance}</p>
                        <p>{balances.allowanceBalance}</p>
                    </div>
                )
            })

        )


    }
}
function mapStateToProps(state) {
    // console.log("state from Balances", state)    
    if (!state) return {};
    return { employeesList: state.employeesList };
}

export default connect(mapStateToProps, { getEmployeesList: getEmployeesList })(Balances);



