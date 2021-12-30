import React from 'react'
import Button from './Button'
import Menu from './Menu'
import List from './List'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const onClick=()=>{
        console.log('hi')
    }
    return (
        <div className='Navbar'>
            <List text="Bon plan" top='0px' left='40px'/>
            <List text="Code Promo" top='0px' left='198px'/>
            {/* <Button color='#ED5525'   text = "S'inscrire" left = '375px' top='10px' tcolor='white'  />
            <Button color='#ffffff00' text="Se connecter" left = '550px' top='10px' tcolor='#ED5525'/> */}
            <Link to ='/inscription' className='btn btntext' style={{backgroundColor:'#ED5525',top:'10px',left:'375px',textAlign:'center',color:'white' , textDecoration:'none' }}> S'inscrire</Link>
            <Link to ='/connexion' className='btn btntext' style={{backgroundColor:'#ffffff00',top:'10px',left:'550px',textAlign:'center',color:'#ED5525' , textDecoration:'none' }}> Se connecter</Link>
            <Menu />
        </div>
    )
}

export default Navbar
