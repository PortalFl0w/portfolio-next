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
        this.pattern = this.props.pattern
        this.treeSize = {w: 250, h: 275 * this.scale}
        this.trees = []
    }

    generateTreeBoundaries() {
        // window.innerWidth
        let numberOfTrees = Math.floor(window.innerWidth / (this.treeSize.w / this.density)) + 1
        let ongoingOffset = -this.initialOffset
        let tempTrees = []
        for (let i = 0; i < numberOfTrees; i++) {
            if (this.pattern == "clearing") {
                if (i >= (numberOfTrees / 2) - 1 && i <= (numberOfTrees / 2) + 1) {
                    // No trees
                } else {
                    tempTrees.push({index: i, offset: ongoingOffset})
                }
            } else {
                tempTrees.push({index: i, offset: ongoingOffset})
            }
            ongoingOffset += this.treeSize.w / this.density
        }
        return tempTrees
    }

    updateTreeHue() {
        if (this.trees.length > 0) {
            this.trees.forEach((r) => {
                r
            })
        }
    }

    componentDidMount() {
        this.trees = this.generateTreeBoundaries()
    }

    render() {
        return (
        <div className={styles.treeline} style={{bottom: this.rowPosition + "px"}} >
            <div className={styles.ground} style={{backgroundColor: this.props.hue}}></div>
            {this.trees.map((t) => {return <Tree key={t.index} hue={this.props.hue} treeSize={this.treeSize} offset={t.offset} />})}
        </div>
        );
    }
}
    
export default Treeline;
