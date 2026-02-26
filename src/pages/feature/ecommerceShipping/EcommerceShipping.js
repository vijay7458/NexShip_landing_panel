import React from 'react'
import TopNav from '../../../navbar/TopNav'
import Hero from './hero/Hero'
import ChooseUs from './why/ChooseUs'
import HowItWorks from './howitworks/HowItWorks'
import EcommerceFeatures from './feature/EcommerceFeature'
import FinalCTA from './finalCta/FinalCta'

export default function EcommerceShipping() {
  return (
    <div>
      <div className='mt-4'>
        <TopNav />
      </div>
      <Hero />
      <ChooseUs />
      <HowItWorks />
      <EcommerceFeatures />
      <FinalCTA />
    </div>
  )
}
