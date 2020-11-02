import React from 'react'
import Calculator from './Calculator/Calculator'
import Counter from './Counter/Counter'
import Form from './Form/Form'
import Login from './Form/Login/Login'
import Greeting from './Greetings/Greeting'
import Card from './Netflix/Card'
import Clock from './Time/Clock'
import Time from './Time/Time'
import Todo from './Todolist/Todo'
//import Slot from './SlotMachine/Slot'
//import Netflix from './Netflix/Netflix'
function Main(){
    return(
        <div>
            <Todo />
            <Greeting />
            <Calculator />
            <Card />
            <Counter />
            <Time />
            <Clock />
            <Form />
            <Login />
        </div>
    )
}
export default Main