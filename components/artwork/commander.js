import React, { Component } from 'react'
import { wrapper } from '../store'
import { connect } from 'react-redux'
import Icon from '../icons/icon'
import styles from '../../styles/Commander.module.css'


class Commander extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commanderOpen: false
        }
    }

    updateTimeSpeed = event => {
        console.log("Updating Speed to " + event.target.value)
        this.props.dispatch({type: 'TIME_SPEED', payload: event.target.value});
    }

    toggleCommander = () => {
        this.setState({commanderOpen:!this.state.commanderOpen})
    }

    render() {
        return (
        <div className={styles.commanderWrapper} style={{right: this.state.commanderOpen ? "0" : "-20vw"}}>
            <div className={styles.commanderOpen} onClick={this.toggleCommander}>
                <Icon icon="cog" color="#FCB045" />
            </div>
            <form>
                <label>Time Speed</label>
                <input className={styles.commanderInput} type="number" name="timeSpeed" onChange={this.updateTimeSpeed} placeholder={this.props.globalTimeSpeed}></input>
            </form>
        </div>
        );
    }
}
    
export default connect(state => state)(Commander);