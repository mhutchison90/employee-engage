import React, { Component } from "react";
import ReactAutocomplete from 'react-autocomplete';


export default class SearchAutoComplete extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInput: ''
        }
    }

render() {
    return (
        <ReactAutocomplete
            items={this.props.userData}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, highlighted) =>
                <div
                    key={item.id}
                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                >
                    {item.label}
                </div>
            }
            value={this.props.value}
            onChange={e => {
                console.log(e.target.value)
                this.props.changeHandler(e.target.value)}}
            onSelect={value => this.props.handleValue(value)}
        />
    )
}}