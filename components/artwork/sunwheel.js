import React, { Component } from 'react'
import styles from '../../styles/Sunwheel.module.css'

class Sunwheel extends Component {
    constructor(props) {
        super(props)
        this.wheelRef = React.createRef()
        this.tickRate = this.props.tickRate
        this.maxTime = this.props.maxTime
        this.state = {
            sunwheelRotation: null,
            transitionTime: this.getTickRateToSeconds(),
            computedTime: this.props.computedTime
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            computedTime: nextProps.computedTime,
        };
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
        let time = this.state.computedTime
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
    
export default Sunwheel;
