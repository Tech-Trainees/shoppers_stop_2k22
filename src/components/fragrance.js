import Modelpic from "../assets/images/ambassador_model.png";
import Premiumpic from "../assets/images/premium_bottle.png";
import "../assets/styles/frag.css";
import Swipe from "./swipe.js";
import MobileModelPic from "../assets/images/ambassador_model_mobile.png"

export default function FragranceStore(){

return(
    <>
        <div className="fragrance">
            <h2 className="fragrance_topic" >FRAGRANCE STORE</h2><hr style={{marginTop:"28px",marginLeft:"77px",marginRight:"84px",background:"blue"}}/>
            <p className="fragrance_para">Fragrances You Will Love</p>
            <Swipe/>
            <div className="screen2">
                <img src={Modelpic} ></img>
                <div className="MobileModelPic" ></div>
                <div  className="datenight"><h1>Date  Night  Special</h1>

                <p style={{color:"#ffffff",opacity:"0.8",lineHeight:"40px"}}>Planning a Date Night? <span className="invisible">Keeping things Casual and seemingly spontaneous</span></p><br/>

                <button >VIEW BRANDS</button></div>
            </div><br/><br/>

            <div  className="screen3">
                <div className="premium"><h1>Premium Fragrances</h1>
                <p>Planning a Date Night? <span className="invisible"> Keeping things Casual and seemingly spontaneous</span></p><br/>
                <button >VIEW BRANDS</button></div>
                <img src={Premiumpic} ></img>
            </div>


        </div>
    </>
)
}