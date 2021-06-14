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
            <a href="/projects" className={styles.navbarItem}><div>Projects</div></a>
            <a href="/about" className={styles.navbarItem}><div>About</div></a>
            {/* <a href="/" className={styles.navbarItem}><div className={styles.navbarItem}>Blog</div></a> */}
        </div>
        );
    }
}
    
export default Navigation;
