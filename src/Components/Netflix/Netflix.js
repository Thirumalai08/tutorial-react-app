import React from 'react'
import './netflix.css'

function Netflix(props){
    return(
        <div>
        <h2 style={{textAlign:"center",marginTop:"60px"}}>List of Web Series</h2>
            <div className="cards">
                <div class="card">
                    <div class="card-header">
                        <img src={props.imgSrc} alt="card" />
                    </div>
                    <div class="card-body">
                        <span class="tag tag-teal">{props.category}</span>
                        <h4>{props.title}</h4>
                        <p>This is Paragraph</p>
                        <a href={props.link}>Watch Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Netflix