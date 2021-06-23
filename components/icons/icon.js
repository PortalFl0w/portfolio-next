
// import { library } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react'
import {getIcon} from './icon-lib'

class Icon extends Component {
    constructor(props) {
        super(props)
        this.icon = getIcon(this.props.icon)
        this.path = this.icon.path
        this.viewbox = this.icon.viewbox || "0 0 20 20"
    }

    render() {
        return (
        <svg viewBox={this.viewbox} fill={this.props.color}>
            <path fillRule="evenodd" clipRule="evenodd" d={this.path} />
        </svg>
        );
    }
}
    
export default Icon;