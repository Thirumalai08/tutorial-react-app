import React from 'react'
import './card.css'
function Card(props){
    return(
        <div>
            <div className="cards">
                <div className="card">
                    <img src={props.imgSrc} alt="" className="card__img" />
                    <div className="text">
                        <h3>{props.category}</h3>
                        <h4>{props.title}</h4>
                        <a href={props.link}>Watch Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card