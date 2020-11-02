import React from 'react'
import Calculator from './Calculator/Calculator'
import Counter from './Counter/Counter'
import Greeting from './Greetings/Greeting'
import Card from './Netflix/Card'
//import Slot from './SlotMachine/Slot'
//import Netflix from './Netflix/Netflix'
function Main(){
    return(
        <div>
            <Greeting />
            <Calculator />
            <Card />
            <Counter />
        </div>
    )
}
export default Main