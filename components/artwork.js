import React, { Component } from 'react'
import Image from 'next/image'
import styles from '../styles/Artwork.module.css'
import Treeline from './artwork/treeline'
import Sky from './artwork/sky'
import LoadingOverlay from './ui-elements/loading-overlay'
import { connect } from 'react-redux'

// Day Night Cycle notes
// Color gradient to pick background color from depending on time of day
// Sun/Moon setting in the middle of the screen, moving smoothly behind the scene, and animating in, in the middle of the sky.
// 7PM cutoff for day/night state

// oscillating gradient, with sun and moon in the middle of day/night rising/setting correctly.

class Artwork extends Component {
    constructor(props) {
        super(props)
        this.renderRef = React.createRef()
        this.state = {
            computedTime: this.props.time,
            loaded: false
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
        <div className={styles.artwork}>
            <Sky />
            <div className={styles.treelines}>
                <div className={styles.mountain + " " + styles.mountainBack}></div>
                <Treeline position={80} scale={0.5} initialOffset={110} hue={"#2a2a2a"} />
                <Treeline position={60} scale={0.6} initialOffset={60} hue={"#1e1e1e"} />
                <Treeline position={0} scale={0.8} initialOffset={250} hue={"#111111"} />
                <div className={styles.mountain + " " + styles.mountainFront}></div>
                <Treeline position={-75} scale={1} initialOffset={125} hue={"#0a0a0a"} />
            </div>
            <div ref={this.renderRef}></div>
            {/* <LoadingOverlay/> */}
        </div>
        );
    }
}
    
export default connect(state => state)(Artwork);
