import React from 'react'
import PartnerHero from './hero/PartnerHero'
import TopNav from '../../../navbar/TopNav'
import WhoPartner from './whoPartner/WhoPartner'
import WhyPartner from './whypartner/WhyPartner'
import HowWork from './howwork/HowWork'

export default function Partner() {
    return (
        <div>
            <div className='mt-4'><TopNav /></div>
            <PartnerHero />
            <WhoPartner />
            <div style={{ marginBottom: "6rem" }}>
                <WhyPartner />
            </div>
            <HowWork />
        </div>
    )
}
