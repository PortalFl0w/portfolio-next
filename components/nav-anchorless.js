import React, { Component } from 'react'
import Image from 'next/image'
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
            <a href="/" className={styles.navbarHome}><Image src="/logo.png" alt="ml-logo" width="48" height="48" /></a>
        </div>
        );
    }
}
    
export default Navigation;
