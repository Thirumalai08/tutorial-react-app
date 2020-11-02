import React, { useState } from 'react'
import './form.css'
function Form(){
    // name state
    const [name,setName] = useState("")
    // full name state
    const [fullName,setFullName] = useState()
    // on change event
    const inputChangeEvent = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    // on click event
    const handleSubmit = () =>{
        setFullName(name)
    }
    return(
        <div className="form">
            <div className="form-content">
                <h4>Hello-{fullName}</h4>
                <input type="text" placeholder="Enter Name" 
                onChange={inputChangeEvent} value={name}/> <br />
                <button onClick={handleSubmit}>Click</button>
            </div>
        </div>
    )
}
export default Form