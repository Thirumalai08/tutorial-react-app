import React from 'react'
import {add , sub , mul , div} from './Calc'
function Calculator(){
    return(
        <div>
            <div>
                <h1>Calculator</h1>
                <ol>
                    <li>Add 2 Nos: {add(5,5)}</li>
                    <li>Subtract 2 Nos: {sub(6,5)}</li>
                    <li>Multiply 2 Nos: {mul(5,5)}</li>
                    <li>Divide 2 Nos: {div(6,5)}</li>
                </ol>
            </div>
        </div>
    )
}
export default Calculator