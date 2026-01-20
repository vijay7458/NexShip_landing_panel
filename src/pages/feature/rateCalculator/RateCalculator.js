import React from 'react'
import CustomBanner from '../../../components/banner/CustomBanner'
import Discount from '../../../components/discount/Discount';
import TopNav from '../../../navbar/TopNav';
import GenericFaq from '../../../components/faq/GenericFaq';
import CTASection from '../../../components/cta/CTASection';
import Calculation from './Calculation';

export default function RateCalculator() {
  const imgArr = [
    "https://plus.unsplash.com/premium_photo-1678567671419-c799c782ac9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhdGUlMjBjYWxjdWxhdG9yfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1678567671419-c799c782ac9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhdGUlMjBjYWxjdWxhdG9yfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1683120796013-f2f18451a907?w=600&auto=format&fit=crop&q=60",
  ];

  const questionAnswer = [
    {
      question: "How does the Rate Calculator work?",
      answer:
        "The Rate Calculator instantly fetches live courier rates based on your shipment details — including origin, destination, weight, dimensions, and delivery type. It compares multiple courier partners to show you the most cost-efficient and fastest delivery options.",
    },
    {
      question: "What information do I need to calculate a shipping rate?",
      answer:
        "You’ll need to enter the pickup and delivery pincodes, shipment weight, dimensions (for volumetric weight), and whether the order is prepaid or COD. Based on these inputs, our system calculates accurate shipping rates and delivery timelines.",
    },
    {
      question: "What is volumetric weight and why does it matter?",
      answer:
        "Volumetric weight reflects the space a shipment occupies, not just its actual weight. Couriers charge by whichever is higher — actual or volumetric. The calculator automatically applies the standard volumetric formula to give you precise cost estimates.",
    },
    {
      question: "Does the calculator support COD (Cash on Delivery) shipments?",
      answer:
        "Yes. You can select the COD option while calculating rates. The system will automatically include applicable COD handling fees, helping you understand the full payable amount.",
    },
    {
      question: "Is the rate shown final or estimated?",
      answer:
        "The rates are estimated based on your entered data and live courier APIs. The final charge may vary slightly once the shipment is picked up and reweighed, ensuring accuracy based on actual dimensions and weight.",
    },
    {
      question: "Is there any limit on how many times I can use the calculator?",
      answer:
        "No. You can use the Rate Calculator as many times as you need, completely free of charge. Registered users also get access to advanced analytics and real-time courier rate APIs.",
    },
  ];

  return (
    <div>
      <Discount />
      <TopNav />
      <div className='mb-4'>
        <CustomBanner
          imgArr={imgArr}
          mainHedingFirst={"Calculate Rates"}
          mainHedingSecond={"Quick & Precise"}
          subHeading={
            "Get real-time courier rates, delivery timelines, and cost comparisons across multiple partners — all in one smart logistics dashboard built to simplify your shipping decisions."
          }
          btnText={"Calculate Now"}
        />
      </div>
      <Calculation />
        <GenericFaq queAns={questionAnswer}/>
      <CTASection />
    </div>
  )
}
