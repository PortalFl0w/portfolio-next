import React, { Component } from 'react'
import styles from '../../styles/ui-elements/FullWidthButton.module.css'
import Icon from './icon'


class FullWidthButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <a href={this.props.link} target="_blank">
            <div className={styles.fullWidthButton}>
                <Icon icon={this.props.icon} color={this.props.iconColor} />
                <span>{this.props.text}</span>
            </div>
        </a>
        );
    }
}
    
export default FullWidthButton;
