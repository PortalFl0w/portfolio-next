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