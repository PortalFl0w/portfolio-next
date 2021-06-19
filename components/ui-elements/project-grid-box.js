import React, { Component } from 'react'
import styles from '../../styles/ui-elements/ProjectGridBox.module.css'
import Image from 'next/image'
// import { time } from '../stores/clock'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ProjectGridBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <a className={styles.projectGridBox} href={this.props.link}>
            <div>
                {/* <Image src={this.props.imageUrl} width="300px" height="225px"/> */}
                <div className={styles.projectCover} style={{backgroundImage:"url("+this.props.imageUrl+")"}}></div>
                {/* <FontAwesomeIcon icon={this.props.icon} color={this.props.iconColor} size="1x"/> */}
                <div className={styles.projectName}>
                    {this.props.text}
                </div>
            </div>
        </a>
        );
    }
}
    
export default ProjectGridBox;
