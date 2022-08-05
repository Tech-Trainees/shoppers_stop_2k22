import React, { useState } from 'react'
import '../assets/styles/Editer.css'
import Very_mekup from '../assets/images/Very_mekup.png'
import Banish from '../assets/images/Banish.png'
import spring_scants from '../assets/images/spring_scants.png'
import Very_pery_makeup from '../assets/images/Very_pery_makeup.png'
import Lipstikes_we_love from '../assets/images/Lipstikes_we_love.png'
import Editer_simple from '../assets/images/Editer_simple.png'

const Editer=()=>{
    const[makeuplooks]=useState('Very pery makeup looks');
    const[shampoos]=useState('Moisturising shampoos that banish frizz')
    const[rightaway]=useState('Spring scents to hoard right away')
    const[veryMakeup]=useState('Very pery makeup looks')
    const[Lipstains]=useState('Lipstains we love!')
    const[banishfrizz]=useState('Moisturising shampoos that banish frizz')
    return(
        <div className='Editer_div'>
        
        <h1 className='Editer_pics_name'>Editor’s Picks</h1>
          <div className='Grid_editer'>
          <img src={Very_mekup} alt='' className='Very_mekup_cream' ></img>
          <img src={Banish} alt='' className='Banish_editer'  ></img>
          <img src={spring_scants} alt=''  className='spring_scants_editer' ></img>
          <img src={Very_pery_makeup} alt='' className='Very_pery_makeup_editer'  ></img>
          <img src={Lipstikes_we_love} alt='' className='Lipstikes_we_love_editer'  ></img>
          <img src={Editer_simple} alt=''  className='Editer_simple_editer' ></img>
          </div>
          <div>
          <span className='Editers_background'>
          <h1 className='makeuplooks'>{makeuplooks}</h1>
          </span>
          <span className='Editers_background2'> </span>
          <h1 className='shampoos'>{shampoos}</h1>
         
           <span className='Editers_background3'>
          <h1 className='rightaway'>{rightaway}</h1>
          </span> <span className='Editers_background4'>
          <h1 className='veryMakeup'>{veryMakeup}</h1>
          </span> 
          <span className='Editers_background5'>
          <h1 className='Lipstains'>{Lipstains}</h1>
          </span> 
          <span className='Editers_background6'>   </span>
          <h1 className='banishfrizz'>{banishfrizz}</h1>
       
          </div>
        </div>
    )
}
export default Editer