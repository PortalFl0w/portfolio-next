import React, { Component } from 'react'
import styles from '../styles/Navbar.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from './ui-elements/logo'

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
            <AnchorLink href="#projects" className={styles.navbarItem}>Projects</AnchorLink>
            <AnchorLink href="#about" className={styles.navbarItem}>About</AnchorLink>
            {/* <a href="/" className={styles.navbarItem}><div className={styles.navbarItem}>Blog</div></a> */}
        </div>
        );
    }
}
    
export default Navigation;
