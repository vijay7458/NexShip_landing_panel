import React from 'react'
import CareerHero from './hero/CareerHero'
import TopNav from '../../../navbar/TopNav'
import WhyWorkWithUs from './workwithus/WhyWorkWithUs'
import OurCoreValues from './ourcorevalue/OurCoreValuess'
import Department from './department/Department'
import CareersCta from './CareersCta/CarrersCta'
import GenericFaq from '../../../components/faq/GenericFaq'


export default function Career() {
    const careerFAQ = [
        {
            question: "How can I apply for a position at your company?",
            answer:
                "You can visit our Careers page to explore open positions and apply directly by submitting your resume and contact details. If there are no openings listed, you can still reach out to our HR team at hr@yourcompany.com to stay informed about future opportunities.",
        },
        {
            question: "Do you offer remote or hybrid work options?",
            answer:
                "Yes, depending on the role and department. Many of our tech, design, and marketing teams work in hybrid or fully remote models, while our operations teams are office or warehouse based for better coordination.",
        },
        {
            question: "What kind of candidates are you looking for?",
            answer:
                "We look for passionate individuals who are self-driven, problem solvers, and eager to learn. Whether you're in engineering, operations, or customer success — we value curiosity, ownership, and collaboration above all.",
        },
        {
            question: "What does your hiring process look like?",
            answer:
                "Our hiring process typically includes an initial screening, one or two technical or functional interviews, and a final culture-fit discussion with the leadership team. We believe in a fair and transparent process for every applicant.",
        },
        {
            question: "Do you hire interns or fresh graduates?",
            answer:
                "Absolutely! We run internship and trainee programs throughout the year to help young professionals kickstart their careers in logistics and technology. Keep an eye on our Careers page for updates.",
        },
        {
            question: "What growth opportunities do employees have?",
            answer:
                "We believe in growing together. Our employees get access to mentorship, internal job mobility, leadership development programs, and continuous learning opportunities to help them thrive in their careers.",
        },
        {
            question: "How do you support work-life balance?",
            answer:
                "We promote flexible work hours, mental wellness initiatives, and team-building activities. We understand that happy, balanced employees create the best impact.",
        },
        {
            question: "I don’t see a role that fits my skills. What should I do?",
            answer:
                "No problem! You can send your resume to hr@yourcompany.com with your area of interest. We’ll keep your details in our talent pool and reach out when a suitable position opens up.",
        },
    ];
    return (
        <div>
            <div className='mt-2'>
                <TopNav />

            </div>
            <CareerHero />
            <Department />
            <WhyWorkWithUs />
            <OurCoreValues />
            <CareersCta />
            <GenericFaq queAns={careerFAQ} />
        </div>
    )
}
