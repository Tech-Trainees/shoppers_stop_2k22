import product from "../assets/images/fragrance_bottle.png";

export default function RecommendationSlide(){
    return(
        <div className="recommendation_product_tile" >
        <div className="recommendation_fea_del" style={{display:"inline-flex",fontSize:"12px"}}>
            <span className="recommendation_star" ></span>
            <span className="recommendation_featured">Featured</span>
            <span className="recommendation_deliver">Express Delivery</span>
            <span className="recommendation_heartpng"></span>
        </div>
        <img src={product} ></img><br/>
        <h3 className="recommendation_prod_title">Bvlgari Omnia Golden Citrine Eua De Toilette Spray</h3>
        <div style={{display:"block"}}><p className="recommendation_sizes">2 Sizes available</p><br/>
            <div className="recommendation_pricedet" style={{display:"inline-flex"}}>
                <h3 >MRP : ₹1200</h3><p className="recommendation_strike">₹1500</p ><b>20% Off</b>
            </div><br/><br/>
            <u className="recommendation_gift">Free Gift Available</u><br/><br/>
        </div>
        <div className="recommendation_btn-2"><div className="recommendation_btncart" style={{background:"#DEA3B7"}}><p>ADD TO CART</p></div>  
        <div className="recommendation_btnbuy"><p>BUY NOW</p></div>
        </div>
    </div>
    )
}