import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer'>
            <h2 style={{color:'#ED5525',fontSize:'30px'}}> About us</h2>
            <p style={{fontSize:'36px' ,textAlign:'left',marginLeft:'200px' ,marginRight:'200px',fontFamily:'Source Sans Pro'}}>En tant qu’un groupe de jeunes algériens, nous avons constamment 
besoin d’un moyen de réduire le coùt de nos activités quotidiennes 
compte tenu du faible salaire qu’un citoyen de notre àge peut avoir.

<br/><br/>“Coupromo” a fleuri de cette nécéssité en fournissnt différents codes 
promos et bons plans de diverses marques et boutiques.

</p>
<p style={{fontSize:'36px' ,textAlign:'left',marginLeft:'200px' ,marginRight:'200px',fontFamily:'Source Sans Pro' , background: 'linear-gradient(90deg, #ED5525 0%, rgba(255, 208, 118, 0) 25%)'
    }}><strong>Inscrivez-vous pour ne rien rater !</strong></p>
    <Link to ='/inscription' className='btn btntext' style={{backgroundColor:'#ED5525',top:'377px',left:'900px',textAlign:'center',color:'white' , textDecoration:'none' }}> S'inscrire</Link>
        </div>
    )
}

export default Footer
