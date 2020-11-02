import React, { useState } from 'react'
import '../Counter/counter.css'
function Time(){
    let newTime = new Date().toLocaleTimeString()
    // State to manage the time
    const [time,setTime] = useState(newTime)
    const updateTime = () => {
        newTime = new Date().toLocaleTimeString()
        setTime(newTime)
        //console.log('Clicked')
    }
    return(
        <div className="counter">
            <div className="counter-content">
                <h4>{time}</h4>
                <button onClick={updateTime}>Get Time</button>
            </div>
        </div>
    )
}
export default Time