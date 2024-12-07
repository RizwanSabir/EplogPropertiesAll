import React from 'react'
import HeroAboutSection from '../../Components/HeroAboutSection/HeroSection'
import PartnerSection from './PartnerSection'
import ServiceSection from './ServiceSection'
import EplogSection from './EplogSection'
import TeamSection from './TeamSection'
import FooterMain from '../Footer/FooterMain'
import NewsLetter from '../Footer/NewsLetter'
import Footer from '../Footer/Footer'

const About = () => {
  return (
   <>
   
   <HeroAboutSection/>
   <PartnerSection/>
   <ServiceSection/>
   <EplogSection/>
   <TeamSection/>
  <NewsLetter/>
  <Footer/>
   
   </>
  )
}

export default About