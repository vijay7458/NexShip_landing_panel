import React from 'react'
import TopNav from '../../../navbar/TopNav'
import Hero from './newsHero/Hero'
import PressReleases from './pressRelease/PressRelease'
import InTheMedia from './media/Inmedia'
import AnnouncementsUpdates from './announcement/Announcement'
import MediaResources from './resource/MediaResource'

export default function NewsRoom() {
  return (
    <div>
      <div className='mt-4'>
        <TopNav />
      </div>
      <Hero />
      <PressReleases />
      <InTheMedia />
      <AnnouncementsUpdates />
      <MediaResources />
    </div>
  )
}
