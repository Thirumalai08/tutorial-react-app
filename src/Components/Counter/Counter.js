import React, { useState } from 'react'
import './counter.css'
function Counter(){
    // State to manage the count
    const [count,setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
        //console.log('Clicked')
    }
    return(
        <div className="counter">
            <div className="counter-content">
                <h4>{count}</h4>
                <button onClick={handleCount}>Click</button>
            </div>
        </div>
    )
}
export default Counter