import React, { Component } from 'react'
import styles from '../styles/Artwork.module.css'
import Treeline from './artwork/treeline'
import Sky from './artwork/sky'
import LoadingOverlay from './ui-elements/loading-overlay'

// Day Night Cycle notes
// Color gradient to pick background color from depending on time of day
// Sun/Moon setting in the middle of the screen, moving smoothly behind the scene, and animating in, in the middle of the sky.
// 7PM cutoff for day/night state

// oscillating gradient, with sun and moon in the middle of day/night rising/setting correctly.

class Artwork extends Component {
    constructor() {
        super()
        this.renderRef = React.createRef()
        this.state = {
            computedTime: null,
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
            <div className="treelines">
                <Treeline position={80} scale={0.5} initialOffset={110} hue={"#2a2a2a"} />
                <Treeline position={60} scale={0.6} initialOffset={60} hue={"#1e1e1e"} />
                <Treeline position={0} scale={0.8} initialOffset={250} hue={"#111111"} />
                <Treeline position={-150} scale={1.5} initialOffset={125} hue={"#000000"} />
            </div>
            <div ref={this.renderRef}></div>
            <LoadingOverlay/>
        </div>
        );
    }
}
    
export default Artwork;
