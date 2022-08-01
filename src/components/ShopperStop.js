import React from 'react'
import { Advertiseblog } from './Advertiseblog'
import AllproductsSlick from './AllproductsSlick'
import Exclusivess from './Exclusive_at_ss'
import Fragrance_Store from './fragrance'

import { Banner } from './MainBanner'
import BasicTabs from './Tabs'

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
        <Fragrance_Store />
        <Exclusivess />
    </div>
        
  )
}

