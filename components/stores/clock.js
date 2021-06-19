import {createStore} from 'nanostores'

const tickRate = 1000
const timeSpeed = 1000
const maxTime = 86400

export const time = createStore(() => {
    time.set(getCurrentComputedSeconds(timeSpeed))
    const ticking = setInterval(() => {
        time.set(getCurrentComputedSeconds(timeSpeed))
    }, tickRate)
    return () => {
        clearInterval(ticking)
    }
})

getCurrentDaySeconds = function() {
    let date = new Date()
    let seconds = date.getSeconds() + (60 * date.getMinutes()) + (60 * 60 * date.getHours())
    return seconds
}

getCurrentComputedSeconds = function(multiplier) {
    console.log(time)
    if (time == null) {
        return this.getCurrentDaySeconds()
    }
    if (time >= maxTime){
        return 0
    }
    return time + (1 * multiplier)
}

