import React, { Component } from 'react'
import Image from 'next/image'
import styles from '../../styles/Tree.module.css'

class Tree extends Component {
    constructor(props) {
        super(props)
        this.id = React.createRef()
        this.treeSize = this.props.treeSize
        this.state = {
            hue: this.props.hue,
            offset: this.props.offset
        }
    }

    render() {
        console.log("Rendering Tree")
        return (
            <div className={styles.artworkTree} style={{width: this.treeSize.w, height: this.treeSize.h, bottom: 0, left: this.state.offset}}>
                {/* <Image src="/pine-test.svg" width={this.treeSize.w} height={this.treeSize.h} /> */}
                <svg className="svgTree" width={this.treeSize.w} height={this.treeSize.h} viewBox="0 0 283.000000 283.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,283.000000) scale(0.100000,-0.100000)" fill={this.state.hue} stroke="none">
                <path d="M1402 2666 c-18 -48 -99 -170 -161 -239 -28 -32 -51 -62 -51 -67 0
                -14 23 -17 60 -9 19 4 36 6 39 4 8 -9 -51 -75 -129 -147 -44 -40 -80 -79 -80
                -87 0 -11 14 -12 70 -7 58 6 70 5 70 -7 0 -19 -102 -114 -164 -153 -64 -40
                -60 -54 14 -54 55 0 60 -2 60 -21 0 -28 -107 -132 -194 -188 -101 -66 -93 -74
                57 -57 59 7 110 10 112 7 15 -14 -4 -36 -79 -93 -46 -34 -82 -66 -80 -70 3 -5
                23 -8 45 -8 25 0 39 -5 39 -12 -1 -15 -117 -108 -203 -162 -46 -29 -58 -42
                -55 -59 3 -20 8 -22 58 -19 30 1 81 5 113 8 48 5 57 3 57 -10 0 -22 -63 -61
                -253 -157 -120 -61 -157 -84 -155 -97 7 -38 259 -23 411 25 44 13 81 22 84 19
                8 -8 -96 -101 -196 -176 -47 -36 -157 -103 -244 -149 -134 -71 -158 -87 -155
                -105 3 -21 7 -21 208 -19 162 1 224 6 295 21 50 11 94 16 98 12 12 -10 -125
                -145 -191 -190 -38 -25 -52 -41 -50 -55 3 -19 10 -20 98 -17 116 3 226 18 303
                42 l57 18 0 -144 0 -144 110 0 110 0 0 146 c0 135 1 146 18 139 74 -32 387
                -77 427 -61 31 12 15 43 -42 81 -68 45 -198 174 -186 185 4 4 49 -1 98 -12 71
                -15 133 -20 295 -21 199 -2 205 -1 208 18 2 17 -24 35 -162 109 -160 86 -274
                164 -386 265 -30 27 -52 52 -48 56 3 3 42 -5 86 -19 100 -31 223 -48 327 -44
                126 5 116 21 -67 112 -161 81 -263 144 -260 161 3 10 15 11 147 4 76 -4 80 -3
                83 17 2 17 -9 29 -50 54 -77 47 -208 153 -208 168 0 7 15 12 40 12 52 0 52 18
                -3 52 -57 36 -124 106 -112 117 6 5 55 3 115 -4 147 -17 154 -10 53 56 -91 59
                -193 158 -193 187 0 20 5 22 54 22 30 0 57 4 61 9 3 6 -16 24 -42 42 -64 44
                -163 139 -163 156 0 12 13 13 70 7 52 -5 70 -3 70 6 0 6 -47 57 -105 112 -112
                107 -127 132 -72 121 50 -9 51 -9 54 7 2 8 -19 42 -47 75 -62 73 -135 180
                -155 229 -8 20 -17 36 -18 36 -2 0 -9 -15 -15 -34z"/>
                </g>
                </svg>
            </div>
        );
    }
}
    
export default Tree;
