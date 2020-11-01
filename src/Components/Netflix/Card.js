import React from 'react'
import Netflix from './Netflix'
function Card(){
    return(
        <div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100vh",margin:"0"}}>
            <Netflix  />
            </div>
        </div>
    )
}
export default Card