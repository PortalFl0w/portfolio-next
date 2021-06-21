import React, { Component } from 'react'
import styles from '../../styles/Sky.module.css'
import Sunwheel from './sunwheel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from 'react-redux'

// Day Night Cycle notes
// Color gradient to pick background color from depending on time of day
// Sun/Moon setting in the middle of the screen, moving smoothly behind the scene, and animating in, in the middle of the sky.
// 7PM cutoff for day/night state

// oscillating gradient, with sun and moon in the middle of day/night rising/setting correctly.

class Sky extends Component {
    constructor(props) {
        super(props)
        this.renderRef = React.createRef()
        this.skyRef = React.createRef()
        this.tickRate = 1000 // Frequency of ticks in ms -- Real time is 1000
        this.timeSpeed = 1000 // Multiplier for each time step -- Real time is 1
        this.maxTime = 86400 // Maximum time per artwork loop in seconds -- Keep to 86400 for real time
        this.state = {
            computedTime: null,
            skyOffset: null
        }
    }

    tick() {
        this.setState({skyOffset:this.getAbsoluteSkyOffset()})
    }

    getTickRateToSeconds() {
        return this.tickRate / 1000
    }

    getComputedTimeToTimeString() {
        let today = new Date()
        today.setHours(0)
        today.setMinutes(0)
        today.setSeconds(this.props.globalTime)

        let isAM = null
        let hours = today.getHours()
        let minutes = today.getMinutes()

        if (minutes < 10) {
            minutes = "0" + minutes
        }

        return hours + ":" + minutes
    }

    getAbsoluteSkyOffset() {
        // Get the absolute offset in pixels for the sky element.
        // Calculated depending on current computedTime state.
        // it will need to reach maxOffset at oscillationTime.
        let time = this.props.globalTime
        let maxOffset = this.skyRef.current.offsetHeight - window.innerHeight
        let maxTime = this.maxTime
        let oscillationTime = maxTime / 2 // Mid Day.
        let step = maxOffset / oscillationTime // Each step in pixels
        let offset = 0
        // return maxOffset - diff
        if (time > oscillationTime) {
            // Sun Setting Offset decreasing
            offset = (maxTime - time) * step
        } else {
            // Sun Rising Offset increasing
            offset = time * step
        }
        return -Math.floor(offset)
    }

    componentDidMount() {
        // Interval for tickrate
        const timeInterval = setInterval(() => this.tick(), this.tickRate)
        this.setState({timeInterval})

        this.tick() // Tick once before interval starts
    }

    componentWillUnmount() {
        clearInterval(this.state.timeInterval);
    }

    render() {
        return (
        <div>
        <div className={styles.statusBar}>
            <div className={styles.statusElement}>{this.getComputedTimeToTimeString()}</div>
            <div className={styles.statusElement}>{" | "}</div>
            <div className={styles.statusElement}><FontAwesomeIcon icon={["far", "sun"]} color="#FCB045" size="10x"/></div>
            <div className={styles.statusElement}>Clear</div>
        </div>
        <div className={styles.skyContainer} style={{transition: "linear " + this.getTickRateToSeconds() + "s", top: this.state.skyOffset + "px"}} ref={this.skyRef}>
        </div>
        <Sunwheel computedTime={this.props.globalTime} maxTime={this.maxTime} tickRate={this.tickRate}/>
        </div>
        );
    }
}
    
export default connect(state => state)(Sky);
