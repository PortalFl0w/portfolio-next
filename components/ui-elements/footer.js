import React, { Component } from 'react'
import styles from '../../styles/ui-elements/Footer.module.css'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className={styles.footerWrapper}>
            &copy; 2021 - Matt Lipski
        </div>
        );
    }
}
    
export default Footer;
