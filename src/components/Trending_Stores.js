import React from "react";
import '../assets/styles/Trending_Stores.css';
import makeup from '../assets/images/makeup.png'; 
//import makeUp from '../assets/images/makeup.png'; 
import The_BestDeals from '../assets/images/The_BestDeals.png'; 

function TrendingStores() {
  return (
    <div className="MainTrending_storesdiv"> 
        <div className="MainTrending_stores">
        <div className="Trending_stores">
        Trending stores
        </div>
        <div className="MakeUpimg">
           <img src={makeup} className='MakeUp' alt='MakeUp Banner'/>
        </div>
        <div className="The_BestDealsimg">
           <img src={The_BestDeals} className='The_BestDeals' alt='BestDeals Banner'/>
        </div>
        </div>
    </div>
  );
}

export default TrendingStores;
                