import React from 'react';
import '../assets/styles/topRecommendations.css'
import Slicker from './slicker';
import BuyingGuides from './BuyingGuides';
function TopRecommendations(){
 
    return(
        <div>
            {/* <div classname='topRecommendationMainDiv'>hey</div> */}
            <div>
            <div className='topRecommendationMainDiv'>
            </div>
                <div className='topRecommendationheading'>TOP RECOMMENDATIONS</div>
                
                <div className='topRecommendationModelImage'></div>
               <div> <Slicker/></div>
             </div>
             <div>
                <BuyingGuides/>
             </div>
        </div>
         
    )
}
export default TopRecommendations;