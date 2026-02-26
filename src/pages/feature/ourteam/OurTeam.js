import React from 'react'
import HeroSection from './hero/HeroSection'
import TopHeader from '../../../components/TopHeader/TopHeader'
import TopNav from '../../../navbar/TopNav'
import Leadership from './leadership/Leadership'
import Department from './department/Department'
import Diversity from './diversity/Diversity'
import CareersCta from '../career/CareersCta/CarrersCta'

export default function OurTeam() {
  return (
    <div>
        {/* <TopHeader /> */}
       <div className='mt-2'>
        <TopNav />
        </div> 
      <HeroSection />
      <Leadership />
      <Department />
      <Diversity />
      
    </div>
  )
}
