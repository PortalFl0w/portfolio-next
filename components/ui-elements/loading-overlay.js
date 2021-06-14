import React, { Component } from 'react'
import styles from '../../styles/ui-elements/LoadingOverlay.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class LoadingOverlay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        // FIX: Dumb timeout for a loading screen for now... 
        setTimeout(() => this.setState({loaded:true}), 2000)
    }

    render() {
        return (
            <div className={styles.loadingOverlay} style={{opacity: this.state.loaded ? 0 : 100}}><FontAwesomeIcon icon={["fas", "fan"]} color="#eee" size="1x"/></div>
        );
    }
}
    
export default LoadingOverlay;
