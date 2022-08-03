import React from 'react'
import'../assets/styles/Beauty_stop.css'
import wedding_frindly from '../assets/images/wedding_frindly.png'
import wedding_makeup from '../assets/images/wedding_makeup.png'
import wedding_planing from '../assets/images/wedding_planing.png'
import wedding_skincare from '../assets/images/wedding_skincare.png'
import Polygon from '../assets/images/Polygon.png'
const Beauty_stop=()=>{
    return(
        <div className='Beauty_div'>
        <h2 className='Beauty_stop'>The Beauty Stop</h2>
        <p className='Beauty_stop_p'>With SS Beauty, you can now hear makeup advice, tips & tricks,
        straight from the experts. From articles to video consults, we have it all!</p>
        <img src={wedding_frindly} alt='' className='wedding_frindly'></img>
        <div className='wedding_frindly_background'>
        <h1 className='Earth_Friendly_back'>Why it’s important to switch to Earth Friendly...</h1>
        <p className='Beauty_paragrah_wedding'>With SS Beauty, you can now hear makeup advice, tips & tricks, straight from the experts.</p></div>
        <img src={wedding_makeup} alt='' className='wedding_makeup'></img>
        <span className='video_btn1'>
        <img src={Polygon} alt='' className='video_click1'></img>
        </span>
        <img src={wedding_planing} alt='' className='wedding_planing'></img>
        <span className='video_btn2'>
        <img src={Polygon} alt='' className='video_click2'></img>
        </span>
        <img src={wedding_skincare} alt='' className='wedding_skincare'></img>
        <span className='video_btn3'>
        <img src={Polygon} alt='' className='video_click3'></img>
        </span>
        <div >
        <h1 className='wedding_video1'>video</h1>
        <h1 className='wedding_video2'>video</h1>
        <h1 className='wedding_video3'>video</h1>
        </div>
        <div className='wedding_makeup_back'>
        <h1>The Perfect Pre-Wedding Skincare Routine everyday</h1>
        <p>With SS Beauty, you can now hear makeup advice, 
        tips & tricks, straight from the experts.</p>
        </div>
        <div className='wedding_planing_back'>
        <h1>The Perfect Pre-Wedding Skincare Routine everyday</h1>
        <p>With SS Beauty, you can now hear makeup advice, 
        tips & tricks, straight from the experts.</p>
        </div>
        <div className='wedding_skincare_back'>
        <h1>The Perfect Pre-Wedding Skincare Routine everyday</h1>
        <p>With SS Beauty, you can now hear makeup advice, 
        tips & tricks, straight from the experts.</p>
        </div>
        <div className="Read_more_btn">
        <h1 className='read_name'>Read More</h1>
        </div>
        </div>
    )
}
export default Beauty_stop