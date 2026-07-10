import React from 'react'
import Hero from './investorHero/Hero'
import Overview from './overview/Overview'
import Matrix from './matrix/Matrix'
import FinancialReports from './financialReport/FinancialReport'
import Governance from './governance/Governance'
import GenericFaq from '../../../components/faq/GenericFaq'
import TopNav from '../../../navbar/TopNav'

export default function InvestorRelation() {

      const investorFAQ = [
        {
            question: "How can I access the latest financial reports?",
            answer:
                "All our quarterly and annual financial reports are available in the 'Financial Reports & Filings' section of this page. You can also download them directly as PDFs for your convenience.",
        },
        {
            question: "How often does the company release its financial results?",
            answer:
                "We publish financial results on a quarterly and annual basis, in line with standard corporate reporting practices. Key updates and investor presentations are shared immediately after each release.",
        },
        {
            question: "Where can I find information about shareholding or ownership structure?",
            answer:
                "Details about our shareholding pattern, major investors, and ownership structure are available under the 'Shareholder Information' section of the Investor Relations page.",
        },
        {
            question: "Who should I contact for investor-related queries?",
            answer:
                "For any investor-related questions, please reach out to our Investor Relations team at investors@yourcompany.com. Our team will assist you with financial, governance, or compliance inquiries.",
        },
        {
            question: "Is the company planning an IPO or fundraising soon?",
            answer:
                "We continuously explore opportunities to enhance shareholder value. Any updates regarding IPOs, funding rounds, or major financial events will be announced through official press releases and filings.",
        },
        {
            question: "How does the company ensure corporate governance and compliance?",
            answer:
                "We follow strict governance policies, with oversight from an experienced Board of Directors, audit committees, and external compliance teams to maintain transparency and accountability.",
        },
        {
            question: "Where can I find information about ESG and sustainability initiatives?",
            answer:
                "Our sustainability and ESG (Environmental, Social, and Governance) commitments are detailed in the 'ESG Initiatives' section, showcasing how we integrate responsibility into business operations.",
        },
        {
            question: "Can individual investors participate or invest in the company?",
            answer:
                "Currently, investment opportunities are limited to registered stakeholders and institutional investors. Future updates regarding public investment options will be communicated officially.",
        },
    ];
    return (
        <div>
            <div className='mt-4'>
                <TopNav />
            </div>
            <Hero />
            <Overview />
            <Matrix />
            <FinancialReports />
            <Governance />
            <GenericFaq queAns={investorFAQ}/>
        </div>
    )
}
