import React, { Component } from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
            <a href="/" className={styles.navbarHome}><Image src="/ml-logo-white.png" alt="ml-logo" width="44" height="44" /></a>
            <AnchorLink href="#projects" className={styles.navbarItem}>Projects</AnchorLink>
            <AnchorLink href="#about" className={styles.navbarItem}>About</AnchorLink>
            {/* <AnchorLink href="#contact" className={styles.navbarItem}>Contact</AnchorLink> */}
            {/* <a href="#projects" className={styles.navbarItem}><div>Projects</div></a>
            <a href="#about" className={styles.navbarItem}><div>About</div></a> */}
            {/* <a href="/" className={styles.navbarItem}><div className={styles.navbarItem}>Blog</div></a> */}
        </div>
        );
    }
}
    
export default Navigation;
