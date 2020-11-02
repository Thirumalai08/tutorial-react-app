import React, { useState } from 'react'
import './form.css'
function Form(){
    // handling multiple states
    // name state
    const [name,setName] = useState({
        fname:'',
        lname:''
    })
    // on change event
    const inputChangeEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        //const value = event.target.value
        //const name = event.target.name
        const {name,value} = event.target
        setName((preValue)=>{
            return {
                ...preValue,
                [name]:value,
            }
            /*if(name === 'fname'){
                return {
                fname: value,
                lname: preValue.lname,
                }
            }else if(name === 'lname'){
                return {
                fname: preValue.fname,
                lname: value,
                }
            } */
        })
    }
    // on click event
    const handleSubmit = (event) =>{
        event.preventDefault()
        alert('Form Submitted')
    }
    return(
        <div className="form">
            <div className="form-content">
                <h4>Hello {name.fname} {name.lname}</h4>

                <input type="text" placeholder="Enter Name" 
                name="fname"
                onChange={inputChangeEvent} 
                value={name.fname}/> <br />

                <input type="text" placeholder="Enter Name" 
                name="lname"
                onChange={inputChangeEvent} 
                value={name.lname}/> <br />

                <button onClick={handleSubmit}>Click</button>
            </div>
        </div>
    )
}
export default Form