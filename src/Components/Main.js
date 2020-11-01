import React from 'react'
import Calculator from './Calculator/Calculator'
import Greeting from './Greetings/Greeting'
import Netflix from './Netflix/Netflix'
function Main(){
    return(
        <div>
            <Greeting />
            <Calculator />
            <Netflix imgSrc="https://wallpapercave.com/wp/wp4056410.jpg" 
            category="Netflix Original Series" title="DARK" 
            link="https://www.netflix.com/in/title/80990668?source=35" />
            {/*<Netflix imgSrc="https://wallpapercave.com/wp/wp1917154.jpg" 
            category="Netflix Original Series" title="Extra Curicular" 
            link="https://www.netflix.com/in/title/80990668?source=35" />
            <Netflix imgSrc="https://wallpapercave.com/wp/wp4056410.jpg" 
            category="Netflix Original Series" title="Sherlock Homes" 
    link="https://www.netflix.com/in/title/80990668?source=35" />*/}
        </div>
    )
}
export default Main