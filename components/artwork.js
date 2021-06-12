import React, { Component } from 'react'
import styles from '../styles/Artwork.module.css'
import Treeline from './artwork/treeline'
import Sky from './artwork/sky'

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
            computedTime: null
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        console.log("Rendering Artwork")
        return (
        <div className={styles.artwork}>
            <Sky />
            <div className="treelines">
                <Treeline position={60} scale={0.5} initialOffset={100} hue={"#202020"} />
                <Treeline position={40} scale={0.6} initialOffset={60} hue={"#222222"} />
                <Treeline position={-10} scale={0.8} initialOffset={250} hue={"#111111"} />
                <Treeline position={-50} scale={1} initialOffset={125} hue={"#000000"} />
            </div>
            <div ref={this.renderRef}></div>
        </div>
        );
    }
}
    
export default Artwork;
