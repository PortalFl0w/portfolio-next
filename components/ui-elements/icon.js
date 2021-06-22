
// import { library } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react'
import {getIconSvgPath} from '../../libs/heroicons-minimal'

class Icon extends Component {
    constructor(props) {
        super(props)
        this.path = getIconSvgPath(this.props.icon)
    }

    render() {
        return (
        <svg viewBox="0 0 20 20" fill={this.props.color}>
            <path fillRule="evenodd" clipRule="evenodd" d={this.path} />
        </svg>
        );
    }
}
    
export default Icon;