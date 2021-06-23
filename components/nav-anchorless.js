import React, { Component } from 'react'
import Logo from './ui-elements/logo'
import styles from '../styles/Navbar.module.css'

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            open: true
        }
    }

    render() {
        return (
        <div className={styles.navbar}>
            <a href="/" className={styles.navbarHome}><Logo width="44" height="44"/></a>
        </div>
        );
    }
}
    
export default Navigation;
