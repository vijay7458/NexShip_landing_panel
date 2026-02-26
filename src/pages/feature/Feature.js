import React from 'react'
import BannerGraphic from '../../components/HomePage/Components/HeroBanner/BannerGraphic/BannerGraphic'
import TopNav from '../../navbar/TopNav'
import FeatureBanner from '../../components/banner/FeatureBanner'
import FeatureMid from './FeatureMid'
import PartnerCard from '../../components/Partners/PartnerCard'
import Discount from '../../components/discount/Discount'
import GenericFaq from '../../components/faq/GenericFaq'
import GnericCard from '../../components/genericCard/GnericCard'
import cardImage1 from "../../assets/image/landingImage/cardimg.png"
import cardImg2 from "../../assets/image/landingImage/ChatGPT Image Jan 15, 2026, 01_23_20 PM.png"
import ShipmentCounter from '../../components/shipmentCounter/ShipmentCounter'
import CTASection from '../../components/cta/CTASection'
import OrderStep from '../../components/steps/OrderSteps'
import Footer from '../../websiteFooter/Footer'

const questionAnswer = [
  {
    question: "What is Real-time Tracking and how does it help my business?",
    answer:
      "Real-time Tracking allows you to monitor every shipment’s journey as it happens. It provides instant updates on delivery status, location, and ETA — improving visibility and helping your customers stay informed.",
  },
  {
    question: "How does Automated Dispatch improve delivery speed?",
    answer:
      "Our Automated Dispatch system intelligently assigns couriers based on location, service type, and performance metrics. This reduces manual work, minimizes delays, and ensures faster deliveries.",
  },
  {
    question: "Can I view performance data through the Analytics Dashboard?",
    answer:
      "Yes. The Analytics Dashboard gives you insights into delivery performance, SLA compliance, and cost trends, helping you make data-driven decisions to optimize logistics efficiency.",
  },
  {
    question: "Does your platform support multiple courier integrations?",
    answer:
      "Absolutely. With Courier Aggregation, you can connect and manage multiple courier partners from a single dashboard — making it easy to switch, compare, and automate shipments.",
  },
  {
    question: "How does Returns Intelligence help reduce losses?",
    answer:
      "Returns Intelligence uses predictive analytics to identify risky shipments and automate return workflows. This reduces reverse logistics costs and improves customer satisfaction.",
  },
];


const genericCardTitles = ["Smarter Shipping. Better Business.", "Automate and scale your deliveries intelligently."]

const cardData = [
  {
    imgUrl: cardImage1,
    cardTitle: "Automated Order Management",
    cardSubtitle: "Streamline your workflow", // new field
    description:
      "Import, process, and dispatch orders from multiple sales channels like Shopify, WooCommerce, and Amazon — all in one place.",
    btnText: "Explore Now",
    route: "sign-up"
  },
  {
    imgUrl: cardImg2,
    cardTitle: "Real-time Tracking Dashboard",
    cardSubtitle: "Know every step of the journey", // new field
    description:
      "Gain end-to-end shipment visibility with live status updates, smart alerts, and customer notifications across all courier partners.",
    btnText: "Track Smarter",
    route: "track"
  },
  {
    imgUrl: cardImage1,
    cardTitle: "Intelligent Courier Allocation",
    cardSubtitle: "AI-powered delivery optimization", // new field
    description:
      "Leverage AI to automatically select the fastest and most cost-efficient courier for every order — saving time and reducing costs.",
    btnText: "Learn More",
    route:"/sign-up"
  },
];


export default function Feature() {
  return (
    <div>
      {/* <Discount /> */}
      <TopNav />
      <FeatureBanner />
      <PartnerCard />
      <GnericCard titles={genericCardTitles} cardData={cardData} />
      <ShipmentCounter />
      <OrderStep />
      <GenericFaq queAns={questionAnswer} />
      <FeatureMid />
      <CTASection />
    </div>
  )
}
