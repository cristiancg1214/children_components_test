
import './App.css';
import React from 'react'
export default class Tooltip extends React.Component {

    render() {
        return (
            <div>
                <label>{this.props.text}</label>
            </div>
        )
    }
}