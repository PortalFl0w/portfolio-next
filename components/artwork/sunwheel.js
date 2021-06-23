import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/Sunwheel.module.css'

class Sunwheel extends Component {
    constructor(props) {
        super(props)
        this.wheelRef = React.createRef()
        this.tickRate = this.props.globalTickRate
        this.maxTime = this.props.globalMaxTime
        this.state = {
            sunwheelRotation: null,
            transitionTime: this.getTickRateToSeconds()
        }
    }

    tick() {
        let rotation = this.getAbsoluteSunwheelRotation()
        if (rotation >= 360) {
            rotation = 0
            this.setState({transitionTime: 0})
        } else if (this.state.transitionTime == 0) {
            this.setState({transitionTime: this.getTickRateToSeconds()})
        }
        this.setState({sunwheelRotation:rotation})
    }

    getTickRateToSeconds() {
        return this.tickRate / 1000
    }

    getAbsoluteSunwheelRotation() {
        let time = this.props.globalTime
        let maxRotation = 360
        let maxTime = this.maxTime
        let step = maxRotation / maxTime
        let rotation = time * step
        return Math.floor(rotation)
    }

    componentDidMount() {
        this.tick() // Tick once before interval starts

        // Interval for tickrate
        const timeInterval = setInterval(() => this.tick(), this.tickRate)
        this.setState({timeInterval})
    }

    componentWillUnmount() {
        clearInterval(this.state.timeInterval);
    }

    render() {
        return (
        <div className={styles.sunWheel} style={{transition: "linear "+this.state.transitionTime+"s", transform: "rotate("+this.state.sunwheelRotation+"deg)"}}>
            <div className={styles.sun}></div>
            <div className={styles.moon}></div>
        </div>
        );
    }
}
    
export default connect(state => state)(Sunwheel);
