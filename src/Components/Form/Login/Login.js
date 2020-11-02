import React, { useState } from 'react'
import '../form.css'
function Login(){
    // name state
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    // first name state
    const [firstName,setFirstName] = useState()
    // last name state
    const [lastName,setLastName] = useState()
    // on change event
    const inputChangeEvent = (event) => {
        console.log(event.target.value)
        setFname(event.target.value)
    }
    const inputChangeEventTwo = (event) => {
        console.log(event.target.value)
        setLname(event.target.value)
    }
    // on click event
    const handleSubmit = (event) =>{
        event.preventDefault()
        setFirstName(fname)
        setLastName(lname)
    }
    return(
        <div className="form">
            <div className="form-content">
                <form onSubmit={handleSubmit}>
                    <h4>Hello-{firstName} {lastName}</h4>
                    <input type="text" placeholder="Enter First Name" 
                    onChange={inputChangeEvent} value={fname}/> <br />
                    <input type="text" placeholder="Enter Lasst Name" 
                    onChange={inputChangeEventTwo} value={lname}/> <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login