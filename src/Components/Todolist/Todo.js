import React, { useState } from 'react'
function Todo(){
    // input state
    const [input,setInput] = useState("")
    // state for list of items
    const [items,setItems] = useState([])
    // onchange event
    const itemEvent = (event) => {
        setInput(event.target.value)
    }
    // on submit
    const handleSubmit = (event) => {
        event.preventDefault()
        setItems((prevInput)=>{
            // from input list
            return [...prevInput,input]
        })
        // for emptying the form after click
        setInput("")
    }
    //const delItems = (index) => {
        
    //}
    return(
        <div>
            <h4>Todo List</h4>
            <input type="text" placeholder="Enter Items" 
            value={input}
            onChange={itemEvent}/><br />
            <button onClick={handleSubmit}>Add Items</button>
            <ol>
                {
                // single component la pottu props la keyku indexah id indexah podu text thalli udu
                items.map((itemVal,index)=>{ 
                    return <li><button>Del</button>&nbsp;{itemVal}</li>
                })}
            </ol>
        </div>
    )
}
export default Todo