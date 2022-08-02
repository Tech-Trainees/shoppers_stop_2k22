import React from "react";
import '../assets/styles/Pay_Securely_by.css';
import Visa from '../assets/images/Visa.png';
import redyello from '../assets/images/redyello.png';
import image71 from '../assets/images/image71.png';
import Rupay from '../assets/images/Rupay.png';
import googlePlay from '../assets/images/googlePlay.png';
import image74 from '../assets/images/image74.png';
import image72 from '../assets/images/image72.png';
import image75 from '../assets/images/image75.png';
import image73 from '../assets/images/image73.png';
import apple_pic from '../assets/images/apple_pic.png';

function Pay_Securely_By() {
  return (
    <div>
        <div className="Pay_securely_by">
        Pay securely by
        </div>
        <div>
          <div className="Visaimg">
            <img src={Visa}/>
          </div>
          <div className="redyelloimg">
            <img src={redyello}/>
          </div>
          <div className="image71img">
            <img src={image71}/>
          </div>
          <div className="Rupayimg">
            <img src={Rupay}/>
          </div>
        </div>
        <div className="rightsideline"></div>
        <div className=" Reach_out_to_us">
        Reach out to us
        </div>
        <div className="For_any_queries">For any queries, please write to us: customercare@ssbeauty.com</div>
        <div className="rightsideline2"></div>
        <div className="Download_the_app">Download the app</div>
        <div className="googlePlay">
          <img src={googlePlay}/>
        </div>
        <div className="apple_picimg">
          <img src={apple_pic} className="apple_picimage"/>
        </div>
        <div className="rightsideline3"></div>
        <div className="Verified_by">Verified by</div>
        <div className="image74img">
          <img src={image74}/>
        </div>
        <div className="image72img">
          <img src={image72}/>
        </div>
        <div className="image75img">
          <img src={image75}/>
        </div>
        <div className="image73img">
          <img src={image73}/>
        </div>

    </div>
  );
}

export default Pay_Securely_By;
                