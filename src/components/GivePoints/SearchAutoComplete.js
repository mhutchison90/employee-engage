import React, { Component } from "react";
import ReactAutocomplete from 'react-autocomplete';


export default class SearchAutoComplete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            id: ''
        }
    }

    render() {
        // console.log('id from autocomplete ', this.state.id)
        var menuStyle = {
            borderRadius: '9px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            position: 'fixed',
            overflow: 'auto',
            maxHeight: '15%',
            fontWeight: 'bold',
            textAlign: 'center'
        }

        var inputProps = {
            style:{
                display: 'inline-block',
                padding: '12px 20px',
                //   background: 'red',
                width: '350px',
                padding: '12px 20px',
                margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
                fontSize: '100%'
            }
            
        }
        return (
            <div className='ReactAutocomplete-input'>
                <ReactAutocomplete
                    items={this.props.userData}
                    menuStyle={menuStyle}
                    inputProps={inputProps}
                    shouldItemRender={(item, value) => {

                        return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
                    }}
                    getItemValue={item => {

                        return item.name
                    }}
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
                    onSelect={(value, item) => {
                        this.props.handleValue(value, item.id)
                    }}
                />
            </div>

        )
    }
}