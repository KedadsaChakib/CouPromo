import React from 'react'

const Button = ({text,color,top,left,tcolor,onClick}) => {
    return (
        <button onClick={onClick} className='btn btntext' style={{ backgroundColor : color , top : top  , left : left , color : tcolor}}>
            {text}
        </button>
    )
}

export default Button 
