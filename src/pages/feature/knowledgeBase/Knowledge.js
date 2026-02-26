import React from 'react'
import KnowledgeHero from './hero/Hero'
import KnowledgeBanner from './hero/Hero'
import TopNav from '../../../navbar/TopNav'
import KnowledgeCategories from './category/Category'
import KnowledgePopular from './popular/Popular'

export default function Knowledge() {
  return (
    <div>
        <div style={{marginTop:"2rem"}}>    <TopNav /></div>
      <KnowledgeBanner />
      <KnowledgeCategories />
      <KnowledgePopular />
    </div>
  )
}
