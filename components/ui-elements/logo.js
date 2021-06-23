import React, { Component } from 'react'
import Image from 'next/image'

class Logo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Image src="/ml-logo-white.png" alt="ml-logo" width={this.props.width} height={this.props.height} />
        );
    }
}
    
export default Logo;
