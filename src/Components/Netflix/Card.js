import React from 'react'
import Netflix from './Netflix'
import Sdata from '../../Sdata'
function Card(){

    return(
        <div >
            {Sdata.map((val)=>{
                return (
                    <Netflix imgSrc={val.imgSrc} 
            category={val.category} title={val.title} 
            link={val.link} />
                )
            })}
        </div>
    )
}
export default Card