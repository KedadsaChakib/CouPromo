import React from 'react'
import {BiChevronDown} from 'react-icons/bi'

const List = ({text,top,left}) => {
    return (
        <div className='list' style={{ top : top , left : left}}>
           <h2>
                {text}{<BiChevronDown size={30} style={{position : 'absolute', top:'19px'}}/>}   
            </h2>
            
         </div>
    )
}

export default List
