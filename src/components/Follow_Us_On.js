import React from "react";
import '../assets/styles/Follow_Us_On.css';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';
import fb_pic_1 from '../assets/images/fb_pic_1.png';
import fb_pic_2 from '../assets/images/fb_pic_2.png';
import fb_pic_4 from '../assets/images/fb_pic_4.png';


function Follow_Us_On() {
  return (
    <div>
        <div className="mainfollow_us_on"></div>
        <div className="follow_us_on">Follow us on</div>
        <div className="twitterimg">
            <img src={twitter}/>
        </div>
        <div className="instagramimg">
            <img src={instagram}/>
        </div>
        <div className="Subscribe_to_our">Subscribe to our emails</div>
        <input type={'text'} className="email_input" placeholder="Enter your email"></input>
        <div className="Subscribe_div">
            <span className="Subscribe_span">Subscribe</span>
        </div>
    </div>
  );
}

export default Follow_Us_On;
                