import React from 'react'
import HeroPropertiesSection from '../../Components/HeroPropertiesSection/HeroSection'
import PatnerSection from './PatnerSection'
import TrendingProperties from './TrendingProperties'
import ExploreProperties from './ExploreProperties'
import Blog from './Blog'
import Podcasts from './Podcasts'
import NewsLetter from '../Footer/NewsLetter'
import Footer from '../Footer/Footer'
import MeetTeam from './MeetTeam'
import ScreenSizeDisplay from '../../useCurrentScreenSize'
import { PropertyDataProvider } from '../../Context/PropertyDataContext';
const Properties = () => {
  return (
    <>

      <PropertyDataProvider>
        <HeroPropertiesSection />
      </PropertyDataProvider>

      <PatnerSection />
      <TrendingProperties />
      <ExploreProperties />
      {/* <MeetTeam/>  */}
      <Blog />
      <Podcasts />
      <NewsLetter />
      <Footer />
    </>

  )
}

export default Properties