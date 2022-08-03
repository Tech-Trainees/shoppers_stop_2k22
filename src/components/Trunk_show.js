import React from 'react'
import '../assets/styles/Trunk_show.css'
import Trunk_Ladies from '../assets/images/Trunk_Ladies.png'
import Trun_Makeup from '../assets/images/Trun_Makeup.png'
const Trunk=()=>{
    return(
        <div className='Trunk_div'>
        <div className='Trunk_show'>
        <h1 className='Trunk'>Trunk Show</h1>

        <img src={Trunk_Ladies} alt='' className='Trunk_Ladies' ></img>
        <h1 className='fashion_tips'>Daily fashion Tips</h1>
        <h1 className='fashion_tips_p'>Follow us for more such content</h1>
        <img src={Trun_Makeup} alt='' className='Trun_Makeup' ></img>
        <h1 className='fashion_tips2'>Daily fashion Tips</h1>
        <h2 className='fashion_tips_p1'>Follow us for more such content</h2>
        </div>
        </div>
    )
}
export default Trunk