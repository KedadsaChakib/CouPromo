import React from 'react'
import Info from './Info'
import SearchBar from './SearchBar'
import bell from './bell.png'

const BlueRectangle = () => {
    return (
        <div className='bluerectangle'>
            <Info/>
            <SearchBar/>
            <img src={bell} className='bellimage'/>
            
        </div>
        
    )
}

export default BlueRectangle
