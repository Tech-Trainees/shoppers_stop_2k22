import React from 'react'
import { Advertiseblog } from './Advertiseblog'
import AllproductsSlick from './AllproductsSlick'
import BeautyCategoryStores from './Beauty_Category_Stores'
import Beautystop from './Beauty_stop'
import Category from './Category_foucs'
import Editer from './Editer_pics'
import Exclusivess from './Exclusive_at_ss'
import FragranceStore from './fragrance'
import LuxeOffers from './Luxeoffers'
import { Banner } from './MainBanner'
import More from './More_offers'
import BasicTabs from './Tabs'
import Clearancesale from './Clearance_sale'
import Firstcitizenprogram from './First-citizen-program'
import TotalFooter from './TotalFooter'
// import { Banner } from './MainBanner'
// import More from './More_offers'
// import BasicTabs from './Tabs'
import Trunk from './Trunk_show'

// import SwipeableTextMobileStepper from './MainBannerCarousel'

export const ShoppersStop = () => {

  return (
    <div>
      <header className='mainheader'>
        <span className='mainheader-clr'>Bengaluru, 560047</span>

        <span className='mainheadercontentgta'>Get The App</span>
        <span className='mainheadercontentgc'>Gift Card</span>
        <span className='mainheadercontentse'>Stores and Events</span>
        <span className='mainheadercontenth'>Help</span>

      </header>
      <BasicTabs />
      <Banner />
      <AllproductsSlick />
      <Advertiseblog />
      <LuxeOffers />

      <BeautyCategoryStores />
      <FragranceStore />
      <Exclusivess />
      <More />
      <Category />
      <Clearancesale />
      <Firstcitizenprogram />
      <TotalFooter />

      <FragranceStore />

      <Exclusivess />
      <More />
      <Category />
      <Clearancesale />
      <Firstcitizenprogram />
      <Editer />
      <Trunk />
      <Beautystop />
    </div>

  )
}

