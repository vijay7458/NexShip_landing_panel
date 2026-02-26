import React from 'react'
import Hero from './customerHero/Hero'
import TopNav from '../../../navbar/TopNav'
import FeaturedStory from './feature/FeatureStory'
import CustomerGrid from './grid/CustomerGrid'
import Testimonial from './testinomial/Testinomial'
import CustomerBrands from './brand/CustomerBrand'
import StoriesCta from './cta/StoriesCta'

export default function Stories() {
  return (
    <div>
        <div className='mt-4'>
            <TopNav />
        </div>
      <Hero />
      <FeaturedStory />
      <CustomerGrid />
      <Testimonial />
      <CustomerBrands />
      <StoriesCta />
    </div>
  )
}
