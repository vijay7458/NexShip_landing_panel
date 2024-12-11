import React, { useState } from 'react';
import './AllFeatures.css';

const features = [
  { 
    title: "Branded Tracking", 
    icon: "📦", 
    description: "Track your shipments with your own brand for a personalized experience.",
    benefits: [
      "Custom branding for a professional experience",
      "Customer confidence with your brand",
      "Better customer engagement with branded tracking pages",
    ],
  },
  { 
    title: "Multiple courier partners", 
    icon: "🚚", 
    description: "Choose from a variety of courier partners for flexibility and better service.",
    benefits: [
      "Wide selection of reliable couriers",
      "Choose based on delivery speed, price, or service",
      "Access to both local and international options",
    ],
  },
  { 
    title: "Payment options", 
    icon: "💳", 
    description: "Multiple payment methods for seamless transactions.",
    benefits: [
      "Secure payment gateways",
      "Multiple payment options like credit, debit, and wallets",
      "Easier transactions for businesses and customers",
    ],
  },
  { 
    title: "Broad pin code reach", 
    icon: "📍", 
    description: "We cover a wide range of pin codes, ensuring deliveries across locations.",
    benefits: [
      "Nationwide coverage for better reach",
      "Deliver to remote areas without hassle",
      "Increase customer satisfaction with guaranteed deliveries",
    ],
  },
  { 
    title: "Early cod remittance", 
    icon: "💵", 
    description: "Get COD remittance faster for better cash flow.",
    benefits: [
      "Receive payments quicker",
      "Better financial planning and liquidity",
      "Reduce delays in cash flow management",
    ],
  },
  { 
    title: "Better shipping rates", 
    icon: "⚖️", 
    description: "Access competitive and affordable shipping rates for all your needs.",
    benefits: [
      "Bulk shipping discounts",
      "Access to best-in-market rates for various shipment sizes",
      "Cost-effective solutions for every budget",
    ],
  },
  { 
    title: "Integrated with marketplaces", 
    icon: "🛒", 
    description: "Seamlessly integrate with major marketplaces like Amazon, eBay, and more.",
    benefits: [
      "Sync orders and shipping from your marketplace directly",
      "Manage multiple marketplace orders on one platform",
      "Reduce manual efforts and errors",
    ],
  },
  { 
    title: "NDR management", 
    icon: "📊", 
    description: "Efficiently manage non-delivery reports (NDR) to reduce delivery failures.",
    benefits: [
      "Track failed delivery attempts",
      "Automated process for managing NDRs",
      "Resolve issues quickly to improve delivery success",
    ],
  },
  { 
    title: "Business Analytics", 
    icon: "📈", 
    description: "Gain insights into your business performance with detailed analytics.",
    benefits: [
      "Access to actionable data and metrics",
      "Track key performance indicators (KPIs)",
      "Make data-driven decisions for business growth",
    ],
  },
  { 
    title: "Handling returns made simple", 
    icon: "🔄", 
    description: "Simplify your return management process with an easy-to-use system.",
    benefits: [
      "Automated return processes",
      "Easy-to-use platform for handling returns",
      "Better customer experience with simple returns",
    ],
  },
  { 
    title: "Integrations", 
    icon: "🔗", 
    description: "Integrate easily with your existing software tools and platforms.",
    benefits: [
      "Connect to your ERP, CRM, and accounting software",
      "Automate logistics workflow with seamless integrations",
      "Reduce manual data entry and errors",
    ],
  },
  { 
    title: "Multifunctional platform accessibility", 
    icon: "🔑", 
    description: "Access all logistics functionalities from a single, easy-to-use platform.",
    benefits: [
      "One platform to manage orders, shipments, and payments",
      "Simplify operations and reduce complexity",
      "Accessible from any device, anytime",
    ],
  },
  { 
    title: "Better pin code coverage", 
    icon: "📍", 
    description: "Expanded pin code coverage for better reach and service.",
    benefits: [
      "Reach more customers with extended coverage",
      "Deliver across the country without restrictions",
      "Optimized delivery for difficult locations",
    ],
  },
  { 
    title: "Competitive rates", 
    icon: "💸", 
    description: "Benefit from competitive rates across multiple shipping partners.",
    benefits: [
      "Choose from the best rates for different shipment types",
      "Get the lowest possible rates for bulk shipments",
      "Price transparency with no hidden costs",
    ],
  },
  { 
    title: "Courier recommendation engine", 
    icon: "⚙️", 
    description: "Our engine recommends the best courier based on your shipping needs.",
    benefits: [
      "Smart suggestions based on your past shipments",
      "Optimize delivery speed and cost",
      "Choose the most reliable couriers for specific routes",
    ],
  },
  { 
    title: "Extensive courier network", 
    icon: "🌐", 
    description: "Leverage a vast network of couriers for quick and reliable deliveries.",
    benefits: [
      "Access to a broad network of trusted couriers",
      "Quick and reliable delivery across the nation",
      "International shipping options with trusted partners",
    ],
  },
  { 
    title: "Insurance cover", 
    icon: "🛡️", 
    description: "Get your shipments insured to safeguard against loss or damage.",
    benefits: [
      "Protect your goods with comprehensive insurance",
      "Peace of mind knowing your shipments are covered",
      "Simple claims process for fast resolution",
    ],
  },
  { 
    title: "Manage fixed and variable costs", 
    icon: "💼", 
    description: "Efficiently manage both fixed and variable logistics costs.",
    benefits: [
      "Track and manage shipping expenses easily",
      "Predict costs and optimize budget allocation",
      "Save on shipping costs with optimized routes and carriers",
    ],
  },
  { 
    title: "Shipping Intelligence", 
    icon: "🧠", 
    description: "Make smarter shipping decisions with our intelligent system.",
    benefits: [
      "Analyze shipping data for smarter decision-making",
      "Leverage AI to predict and optimize routes",
      "Identify cost-saving opportunities with data-driven insights",
    ],
  },
  { 
    title: "Single platform consolidation", 
    icon: "🌟", 
    description: "Consolidate all your logistics operations into a single platform for easier management.",
    benefits: [
      "All logistics operations in one centralized platform",
      "Reduce complexity by managing shipments, orders, and payments together",
      "Enhanced visibility and control over all logistics activities",
    ],
  },
];

const AllFeatures = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const handleCardClick = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="all-features-section">
      <h2 className="features-heading">All Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div 
            className={`feature-card ${expandedFeature === index ? 'feature-card-expanded' : ''}`} 
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className="feature-icon">
              <span className={`feature-icon-animation ${expandedFeature === index ? 'active' : ''}`}>
                {feature.icon}
              </span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className={`feature-description ${expandedFeature === index ? 'feature-description-expanded' : ''}`}>
              {expandedFeature === index ? feature.description : `${feature.description.slice(0, 80)}...`}
            </p>
            {expandedFeature === index && (
              <div className="feature-benefits">
                <h4>Benefits:</h4>
                <ul>
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="benefit-item">
                      ✅ {benefit}
                    </li>
                  ))}
                </ul>
                <div className="collapse-indicator">Click to collapse</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFeatures;
