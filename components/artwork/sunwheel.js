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
            computedTime: this.props.computedTime
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            computedTime: nextProps.computedTime,
        };
    }

    tick() {
        this.setState({sunwheelRotation:this.getAbsoluteSunwheelRotation()})
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
        console.log("Rendering Sunwheel")
        return (
        <div className={styles.sunWheel} style={{transform: "rotate("+this.state.sunwheelRotation+"deg)"}}>
            <div className={styles.sun}></div>
            <div className={styles.moon}></div>
        </div>
        );
    }
}
    
export default Sunwheel;
