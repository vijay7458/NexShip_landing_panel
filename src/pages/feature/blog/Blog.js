import React from 'react'
import BlogHero from './hero/BlogHero'
import BlogFeatured from './feature/Feature'
import TopNav from '../../../navbar/TopNav'
import BlogNewsletter from './newsletter/NewsLetter'

export default function Blog() {
    return (
        <div>
            <div>
                <TopNav />
            </div>
            <BlogHero />
            <BlogFeatured />
            <BlogNewsletter />
        </div>
    )
}
