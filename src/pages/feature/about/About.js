import React from 'react'
import AboutHero from './hero/AboutHero'
import TopNav from '../../../navbar/TopNav'
import Vision from './misson/Vision'
import Story from './story/Story'
import CoreValue from './core/CoreValue'
import Seller from './seller/Seller'
import CTASection from '../../../components/cta/CTASection'

export default function About() {
  return (
    <div>
   <div className='mt-2'>
    <TopNav />
    </div> 
      <AboutHero />
      <Vision />
      <Story />
      <CoreValue />
      <Seller />
      <CTASection />
    </div>
  )
}
