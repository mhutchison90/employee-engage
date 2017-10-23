import React, { Component } from "react";
import ReactAutocomplete from 'react-autocomplete';


export default class SearchAutoComplete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: ''
        }
    }
    
    render() {
        return (
            <ReactAutocomplete
                items={this.props.userData}
                shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.name}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                    >
                        {item.name}
                    </div>
                }
                value={this.props.value}
                onChange={e => {
                    this.props.changeHandler(e.target.value)
                }}
                onSelect={value => this.props.handleValue(value)}
            />
        )
    }
}