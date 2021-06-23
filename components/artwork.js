import React, { Component } from 'react'
import styles from '../styles/Artwork.module.css'
import Treeline from './artwork/treeline'
import Sky from './artwork/sky'
import Image from 'next/image'
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
            brightness: null
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    getHue(brightness=1) {
        // (value-min)/(max-min)
        let time = this.props.globalTime || 0
        let normalTime = 0
        let maxTime = this.props.globalMaxTime
        normalTime = (time) / (maxTime)

        let colors = [
            {percent: 0,  color: [100,100,100]},
            {percent: 0.2,  color: [131,58,180]},
            {percent: 0.25,  color: [253,29,29]},
            {percent: 0.325,  color: [252,176,69]},
            {percent: 0.6,  color: [0,110,51]},
            {percent: 0.675,  color: [252,176,69]},
            {percent: 0.75,  color: [253,29,29]},
            {percent: 0.8,  color: [131,58,180]},
            {percent: 1,  color: [100,100,100]},
        ]

        let hue = colors.find(o => o.percent >= normalTime)

        if (hue) {
            // apply brightness
            hue.color = hue.color.map(val => Math.floor(val * brightness))
        }

        return hue
    }

    getHueRGBString(brightness) {
        let hue = this.getHue(brightness)
        if (hue) {
            return "rgb(" + hue.color.join(",") + ")"
        }
        return null
    }

    render() {
        return (
        <div className={styles.artwork}>
            <Sky />
            <div className={styles.treelines}>
                <div className={styles.mountain + " " + styles.mountainFar}></div>
                <div className={styles.mountain + " " + styles.mountainBack}></div>
                <Treeline position={80} scale={0.5} initialOffset={110} hue={this.getHueRGBString(0.3)} />
                <Treeline position={60} scale={0.6} initialOffset={60} hue={this.getHueRGBString(0.2)} />
                <Treeline position={0} scale={0.8} initialOffset={90} hue={this.getHueRGBString(0.1)} />
                <div className={styles.mountain + " " + styles.mountainFront} >
                    <svg viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid meet">
                        <path d=" M 0 282.939 Q 340.903 343.952 527 341.951 C 713.097 339.95 755.393 213.903 962.5 212.902 C 1169.608 211.902 1227.894 339.95 1432 341.951 Q 1636.106 343.952 1920 284 L 1920 400 L 0 400 L 0 282.939 Z " fill={this.getHueRGBString(0.15)}/>
                    </svg>
                </div>
                <div className={styles.campfire}>
                    <Image src="/fire.gif" width="60" height="40" />
                </div>
                <Treeline position={-40} scale={1} initialOffset={125} variation="clearing" hue={"#0a0a0a"} />
            </div>
            <div ref={this.renderRef}></div>
            {/* <LoadingOverlay/> */}
        </div>
        );
    }
}
    
export default connect(state => state)(Artwork);
