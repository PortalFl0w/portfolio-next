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
            <Image src="/logo.png" alt="ml-logo" width="48" height="48" />
            <div className={styles.navbarItem}>Home</div>
            <div className={styles.navbarItem}>About</div>
            <div className={styles.navbarItem}>Blog</div>
        </div>
        );
    }
}
    
export default Navigation;
