import React from 'react'
import {add , sub , mul , div} from './Calc'
import './calculator.css'
function Calculator(){
    return(
        <div>
            <div className="testimonials">
                <h2 className="heading">Calculator</h2>
                <div className="container">
                    <div className="contentBx">
                        <p>Add Two Numbers</p>
                        <h3>{add(5,5)}</h3>
                    </div>
                    <div className="contentBx">
                        <p>Sub Two Numbers</p>
                        <h3>{sub(6,5)}</h3>
                    </div>
                    <div className="contentBx">
                        <p>Mul Two Numbers</p>
                        <h3>{mul(5,5)}</h3>
                    </div>
                    <div className="contentBx">
                        <p>Divide Two Numbers</p>
                        <h3>{div(6,5)}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calculator