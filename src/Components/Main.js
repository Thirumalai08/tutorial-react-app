import React from 'react'
import Calculator from './Calculator/Calculator'
import Greeting from './Greetings/Greeting'
import Card from './Netflix/Card'
import Slot from './SlotMachine/Slot'
//import Netflix from './Netflix/Netflix'
function Main(){
    return(
        <div>
            <Greeting />
            <Calculator />
            <Card />
            <Slot />
        </div>
    )
}
export default Main