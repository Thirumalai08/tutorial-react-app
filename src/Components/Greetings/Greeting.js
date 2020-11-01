import React from 'react'
import './greetings.css'

function Greeting(){
    // Date
    let curDate = new Date()
    curDate = curDate.getHours()
    // Styling
    const greetingStyle = {  }
    let greeting = ''
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
        <div className="banner">
            <div className="content">
                <h4>Hello React App</h4>
                <p style={greetingStyle}>{greeting}</p>
            </div>
        </div>
    )
}
export default Greeting