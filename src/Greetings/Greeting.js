import React from 'react'
import './greeting.css'

function Greeting(){
    // Date
  let curDate = new Date()
  curDate = curDate.getHours()
  // Styling
  const greetingStyle = {  }
  let greeting = ''
  /* Greeting
  let greeting = curDate >= 1 && curDate < 12 ? 'Good Morning' : 
                curDate >=12 && curDate < 16 ? 'Good Afternoon': 
                curDate >= 16 && curDate < 19 ? 'Good Evening' : 'Good Night' */
  if(curDate >= 1 && curDate < 12){
    greeting = 'Good Morning'
    greetingStyle.color = "green"
  }else if(curDate >=12 && curDate < 16){
    greeting = 'Good Afternoon'
    greetingStyle.color = "yellow"
  }else if(curDate >= 16 && curDate < 19){
    greeting  = 'Good Evening'
    greetingStyle.color = "blue"
  }else{
    greeting = 'Good Night'
    greetingStyle.color = "#333"
  }
    return(
        <div className="greeting">
            <h1>Hello React App, <span style={greetingStyle}>{greeting}</span></h1>
        </div>
    )
}
export default Greeting