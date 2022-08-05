import React from 'react'
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/mainbanner.css'
import Bannerimg1 from '../assets/images/banner1.png'
import Bannerimg2 from '../assets/images/banner2.png'
import Bannerimg3 from '../assets/images/banner3.png'


export const Banner = () => {
  const settings = {
    dots: true,
    className:"mainbannerimgpos",
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    adaptiveHeight:false,
  }
  let slides = [
    {
      image:Bannerimg1,
      
      imgid:1,
    },
    {
      image:Bannerimg2,
     
      imgid:2,
    },
    {
      image:Bannerimg3,
     
    },
  ]

  return(
    <>
   
    <div className='mainbanner'>
      <Slider {...settings}>
        {slides.map((data) => (
        
            <div key={data.imgid}>
              <img src={data.image} alt='banner img' className='bannerimgcss'/>
              <span className='bannertitle'>
            
              </span>
              <div className='bannercaption'>

              </div>
     
          </div>          
                      
        ))}

        </Slider >
      </div> 
      <div className='heder_name_head'>Own Your Beauty Power</div>
     
      <p className='header_paragrap'>An experiential, interactive and inspirational beauty site </p>
      <div className='backgroundcolor_div'>
      DISCOVER NOW
      </div>
      </> 
    )
}
