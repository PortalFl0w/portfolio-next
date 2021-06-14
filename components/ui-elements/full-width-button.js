import React, { Component } from 'react'
import styles from '../../styles/ui-elements/FullWidthButton.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class FullWidthButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <a href={this.props.link} target="_blank">
            <div className={styles.fullWidthButton}>
                <FontAwesomeIcon icon={this.props.icon} color={this.props.iconColor} size="1x"/>
                <span>{this.props.text}</span>
            </div>
        </a>
        );
    }
}
    
export default FullWidthButton;
