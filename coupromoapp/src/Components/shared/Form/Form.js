import React from 'react'

const Form = () => {
    return (
     <div>
       
     <form className='formrect'>
     <h2 >S'inscrire</h2>
     <h3>Bienvenue sur coupromo</h3>
    
            <input type='email' placeholder='Mail'style={{top:'138px', left:'85px' }}/>   
            <input type='text' placeholder='Pseudo'style={{top:'202px', left:'85px'}}/>
            <input type='password' placeholder='Password' style={{top:'266px' , left:'85px'}}/>
            <button type='button'   className='formbutton'>
              
            </button>
<h4>S'inscrire</h4>     
        </form>
        </div>

    )
}

export default Form
