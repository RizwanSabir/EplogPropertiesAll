import PatnerSection from './PatnerSection'
import EplogSection from './EplogSection'
import InvestmentSection from './InvestmentSection'
import PropertySnag from './PropertySnag'
import LandDevelopement from './LandDevelopement'
import TrendingProperties from './TrendingProperties'
import TeamSection from './TeamSection'
import Testimonial from './Testimonial'
import CalenderSection from './CalenderSection'
import BlogSection from './BlogSection'
import NewsLetter from './NewsLetter'
import ContactUs from './ContactUs'
import Footer from './Footer'
import HeroSection from '../../Components/HeroSection/HeroSection'

const HomeIndex
 = () => {
  return (
   <>

            <HeroSection/>
            <PatnerSection />
            <EplogSection />
            <InvestmentSection />
            <PropertySnag />
            <LandDevelopement />
            <TrendingProperties />
            <TeamSection />
            <Testimonial />
            <CalenderSection />
            <BlogSection />
            <NewsLetter />
            <ContactUs/>
            <Footer />
   
   </>
  )
}

export default HomeIndex
