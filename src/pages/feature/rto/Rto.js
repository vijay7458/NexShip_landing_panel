import React from 'react'
import RtoHero from './rtoHero/RtoHero'
import TopNav from '../../../navbar/TopNav'
import WhatIsRto from './what/WhatRto'
import RtoWorks from './works/RtoWorks'
import RtoBenefits from './benifit/RtoBenifit'
import RtoCase from './casestudies/RtoCase'

export default function Rto() {
  return (
    <div>
      <div  className='mt-4'>
        <TopNav />
      </div>
      <RtoHero />
      <WhatIsRto />
      <RtoWorks />
      <RtoBenefits />
      <RtoCase />
    </div>
  )
}
