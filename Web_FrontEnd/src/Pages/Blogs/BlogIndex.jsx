import React from 'react'
import HeroBlogSection from '../../Components/HeroBlogSection/HeroSection'
import BlogSection from './BlogSection'
import ScreenSizeDisplay from '../../Hooks/useCurrentScreenSize'
import Footer from '../Footer/Footer'
import FooterMain from '../Footer/FooterMain'
import './index.css'
import NewsLetter from '../Footer/NewsLetter'
const BlogIndex = () => {
  return (
    <>
    <HeroBlogSection/>
    <BlogSection/>
   <NewsLetter/>
   <Footer/>
    </>
  )
}

export default BlogIndex