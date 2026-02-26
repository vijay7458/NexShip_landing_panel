import React from 'react'
import TopNav from '../../navbar/TopNav'
import TrackHero from './hero/Hero'
import TrackingOrder from '../page/TrackingOrder/TrackingOrder'

export default function TrackOrderMain() {
  return (
    <div>
      <div className='mt-2'>
        <TopNav />
      </div>
      <TrackingOrder />
    </div>
  )
}
