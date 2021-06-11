import React, { Component } from 'react'
import Image from 'next/image'
import styles from '../../styles/Treeline.module.css'
import Tree from './tree'

class Treeline extends Component {
    constructor(props) {
        super(props)
        this.rowPosition = this.props.position
        this.initialOffset = this.props.initialOffset
        this.density = 3
        this.scale = this.props.scale
        this.treeSize = {w: 250, h: 250 * this.scale}
        this.state = {
            trees: [],
            hue: this.props.hue || "#000000"
        }
    }

    generateTrees() {
        let numberOfTrees = Math.floor(window.innerWidth / (this.treeSize.w / this.density)) + 4
        let ongoingOffset = -this.initialOffset
        let tempTrees = []
        for (let i = 0; i < numberOfTrees; i++) {
            tempTrees.push(<Tree key={i} hue={this.state.hue} treeSize={this.treeSize} offset={ongoingOffset} />)
            ongoingOffset += this.treeSize.w / this.density
        }
        this.setState({trees:tempTrees})
    }

    componentDidMount() {
        this.generateTrees()
    }

    render() {
        console.log("Rendering Treeline")
        return (
        <div className={styles.treeline} style={{bottom: this.rowPosition + "px"}} >
            {/* <Tree hue={this.state.hue} treeSize={this.treeSize} offset={0}/> */}
            {this.state.trees}
        </div>
        );
    }
}
    
export default Treeline;
