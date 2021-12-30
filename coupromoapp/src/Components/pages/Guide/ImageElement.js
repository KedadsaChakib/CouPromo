import React from 'react'

const ImageElement = (left,top,text,title) => {
    return (
        <div className='imageelement' style={{top:top,left:left}}>
            
            <h2 className='title'>{title}</h2>
            <p className='text'>{text}</p>

            
        </div>
    )
}

export default ImageElement
