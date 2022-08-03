import React from "react";
import BuildYourBeautyProfile from "./Build_your_beauty_profile";
import TopCategoriesForYou from "./Top_Categories_for_you";
import TrendingStores from "./Trending_Stores";
import '../assets/styles/Build_your_beauty_profile.css';

function BeautyCategoryStores() {
  return (
    <div className="Beauty_Category_Storesdiv">
    <BuildYourBeautyProfile/>
    <TopCategoriesForYou/>
    <TrendingStores/>
    </div>
  );
}

export default BeautyCategoryStores;
                