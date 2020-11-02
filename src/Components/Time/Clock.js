import React, { useState } from 'react'
import '../Counter/counter.css'
function Clock(){
    let time = new Date().toLocaleTimeString()
    // State to manage the time
    const [clock,setClock] = useState(time)
    // update clock
    const updateClock = () => {
        time = new Date().toLocaleTimeString()
        setClock(time)
    }
    setInterval(updateClock,1000)
    return(
        <div className="counter">
            <div className="counter-content">
                <h4>{clock}</h4>
            </div>
        </div>
    )
}
export default Clock