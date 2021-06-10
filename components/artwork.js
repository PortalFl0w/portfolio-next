import React, { Component } from 'react'
import styles from '../styles/Artwork.module.css'

// Day Night Cycle notes
// Color gradient to pick background color from depending on time of day
// Sun/Moon setting in the middle of the screen, moving smoothly behind the scene, and animating in, in the middle of the sky.
// 7PM cutoff for day/night state

// oscillating gradient, with sun and moon in the middle of day/night rising/setting correctly.

class Artwork extends Component {
    constructor() {
        super()
        this.renderRef = React.createRef()
        this.skyRef = React.createRef()
        this.tickRate = 200 // Frequency of ticks in ms -- Real time is 1000
        this.timeSpeed = 1000
        this.maxTime = 86400
        this.state = {
            time: 0,
            computedTime: null,
            skyOffset: null
        }
    }

    tick() {
        // this.setState({time:this.getCurrentDaySeconds()})
        // this.setState({skyOffset:this.getNextSkyOffset(this.state.skyOffset, 1)})
        this.setState({computedTime:this.getComputedCurrentSeconds(this.timeSpeed)})
        this.setState({skyOffset:this.getAbsoluteSkyOffset()})
        console.log(this.state)
    }

    getTickRateToSeconds() {
        return this.tickRate / 1000
    }

    getAbsoluteSkyOffset() {
        let time = this.state.computedTime
        let maxOffset = this.skyRef.current.offsetHeight - window.innerHeight// (- screen size?)
        // if (maxOffset < (window.innerHeight * 2)) {
        //     return 0
        // }
        let maxTime = this.maxTime
        let oscillationTime = maxTime / 2 // Mid Day.
        let step = maxOffset / oscillationTime // Each step in pixels
        // it will need to reach maxOffset at oscillationTime.
        let offset = 0
        // return maxOffset - diff
        if (time > oscillationTime) {
            // Sun Setting
            // Offset decreasing
            console.log("setting")
            offset = (maxTime - time) * step
        } else {
            // Sun Rising
            // Offset increasing
            console.log("rising")
            offset = time * step
        }
        return -Math.floor(offset)
    }

    // getNextSkyOffset(currentOffset) {
    //     if (!currentOffset) {
    //         currentOffset = 0
    //     }
    //     let maxOffset = this.skyRef.current.offsetHeight
    //     let maxTime = this.maxTime
    //     let oscillationTime = maxTime / 2 // Mid Day.
    //     let step = maxOffset / oscillationTime
    //     // When current time is 0, we want the offset to be 0.
    //     // When current time is max time, we want the offset to be max offset.

    //     // Needs to calculate absolute position at any given time.
    //     // Rather than the next offset
    //     // as it'll always start from 0 otherwise.

    //     // Increment or decrement offset depending on whether we're past oscillation time
    //     console.log(step, oscillationTime)
    //     if (this.state.time > oscillationTime) {
    //         // Sun Setting
    //         return currentOffset - step 
    //     } else {
    //         // Sun Rising
    //         return currentOffset + step 
    //     }
    //     // if (currentOffset > maxOffset) 
    // }

    getCurrentDaySeconds() {
        let date = new Date()
        let seconds = date.getSeconds() + (60 * date.getMinutes()) + (60 * 60 * date.getHours())
        return seconds
    }

    getComputedCurrentSeconds(speed) {
        if (this.state.computedTime == null) {
            return this.getCurrentDaySeconds()
        }
        if (this.state.computedTime >= this.maxTime){
            return 0
        }
        return this.state.computedTime + (1 * speed)
    }

    componentDidMount() {
        this.setState({computedTime:this.getCurrentDaySeconds()})
        this.tick()
        const timeInterval = setInterval(() => this.tick(), this.tickRate)
        this.setState({timeInterval})
        
        

        // const p5 = require('../libs/p5.min.js')
        // this.sketch = new p5( p => {

        //     p.setup = ()  => {
        //         p.createCanvas(p.windowWidth, p.windowHeight)
        //         .parent(this.renderRef.current);
        //         // p.background('white');
        //         this.setGradient(p, 0, 0, p.width, p.height, p.color(135,206,235), p.color(255,128,0), p.X_AXIS);
        //         p.strokeWeight(5);
        //     }
        //     p.windowResized = () => {
        //         p.resizeCanvas(p.windowWidth, p.windowHeight)
        //     }
      
        //     p.draw = () => {

                
        //         // this.setGradient(p, 0, 0, p.width, p.height, p.color(135,206,235), p.color(255,128,0), p.X_AXIS);

        //         p.textSize(32)
        //         p.text(Date.now(),50,50)

        //         if(p.mouseIsPressed){
        //             p.stroke(225)
        //         } else{
        //             p.stroke(0, 0, 0);
        //         }
        //         p.line(p.mouseX , p.mouseY, p.mouseX , p.mouseY);
        //         p.line(p.mouseX, p.mouseY , p.mouseX, p.mouseY);

        //     }
      
        // });
      
      
    }

    componentWillUnmount() {
        clearInterval(this.state.timeInterval);
    }

    setGradient = function(p, x, y, w, h, c1, c2, axis) {
        p.noFill();
      
        if (axis === p.Y_AXIS) {
          // Top to bottom gradient
          for (let i = y; i <= y + h; i++) {
            let inter = p.map(i, y, y + h, 0, 1);
            let c = p.lerpColor(c1, c2, inter);
            p.stroke(c);
            p.line(x, i, x + w, i);
          }
        } else if (axis === p.X_AXIS) {
          // Left to right gradient
          for (let i = x; i <= x + w; i++) {
            let inter = p.map(i, x, x + w, 0, 1);
            let c = p.lerpColor(c1, c2, inter);
            p.stroke(c);
            p.line(i, y, i, y + h);
          }
        }
    }

    render() {
        return (
        <div className="artwork">
            <div className={styles.skyContainer} style={{transition: "linear " + this.getTickRateToSeconds() + "s", top: this.state.skyOffset + "px"}} ref={this.skyRef}>
                <div className="sky-day">
                    {this.state.time}
                </div>
            </div>
            <div ref={this.renderRef}></div>
        </div>
        );
    }
}
    
export default Artwork;


// beginShape()
// //   line(50,50,50,100)
  
// //   line(50,100,100,100)
  
//   // vertex(100,100)
//   bezier(50,50,80,100,100,130,150,150)
//   bezier(150,150,80,100,100,130,150,150)
//   // bezier(0,0,30,60,50,70,100,100)

//   endShape(CLOSE)