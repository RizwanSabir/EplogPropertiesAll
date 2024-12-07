import React from 'react'
import HeroAboutSection from '../../Components/HeroAboutSection/HeroSection'
import HeroServiceSection from '../../Components/HeroServiceSection/HeroSection'
import ServiceSection from './ServiceSection'
import ScreenSizeDisplay from '../../Hooks/useCurrentScreenSize'
import FooterMain from '../Footer/FooterMain'
import NewsLetter from '../Footer/NewsLetter'
import Footer from '../Footer/Footer'

const ServiceIndex = () => {
  return (
  
<>
<HeroServiceSection/>
<ServiceSection/>
<NewsLetter/>
<Footer/>

</>

)
}

export default ServiceIndex