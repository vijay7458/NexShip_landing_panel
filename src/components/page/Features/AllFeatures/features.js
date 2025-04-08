import BetterShippingRates from "./Icons/BetterShippingRates";
import BrandedTracking from "./Icons/BrandedTracking";
import BusinessAnalytics from "./Icons/BusinessAnalytics";
import CourierSelection from "./Icons/CourierSelection";
import CustomIntegration from "./Icons/CustomIntegration";
import GstSplit from "./Icons/GstSplit";
import Integration from "./Icons/Integration";
import NdrReport from "./Icons/NdrReport";
import RealTimeTrack from "./Icons/RealTimeTrack";
import referal from "./Icons/referal";
import ReportScheduling from "./Icons/ReportScheduling";
import ReturnHandling from "./Icons/ReturnHandling";
import ReturnManagement from "./Icons/ReturnManagement";
import SaveOnFreight from "./Icons/SaveOnFreight";
import ShipmentInsurance from "./Icons/ShipmentInsurance";
import SubAccount from "./Icons/SubAccount";
import Support from "./Icons/Support";
import UnifiedPlatform from "./Icons/UnifiedPlatform";
import WhatsApp from "./Icons/WhatsApp";
import WiderPinocde from "./Icons/WiderPinocde";

const features = [
    {
        "id": 1,
        "title": "Brand Promotion via Tracking",
        "iconNew": BrandedTracking,
        "icon": "📍",
        "description": "Personalize your shipment tracking experience with your own branding.",
        "benefits": [
            "Create a professional look with custom branding",
            "Increase customer trust with your logo and theme",
            "Improve engagement through branded tracking pages"
        ]
    },
    {
        "id": 2,
        "title": "Multiple Courier Partners",
        "icon": "🚚",
        "description": "Select from a range of courier services to suit your needs, from speed to cost.",
        "benefits": [
            "Choose reliable couriers for varying needs",
            "Flexibility in shipping speed, pricing, and service",
            "Access both local and international delivery options"
        ]
    },
    {
        "id": 3,
        "title": "Flexible Payment Options",
        "icon": "💳",
        "description": "Offer customers a variety of secure payment methods for smoother transactions.",
        "benefits": [
            "Integrate multiple payment methods such as credit card, debit card, wallets, UPI and NEFT",
            "Enhance security with trusted payment gateways as Razorpay",
            "Facilitate faster and easier transactions"
        ]
    },
    {
        "id": 4,
        "title": "Customizable Shipping Labels",
        "icon": "🏷️",
        "description": "Design and print shipping labels that match your brand’s look and feel.",
        "benefits": [
            "Create personalized labels to strengthen your brand image",
            "Streamline the shipping process with custom label printing",
            "Maintain consistency with your branding across all shipments"
        ]
    },
    {
        "id": 5,
        "title": "Customizable Invoices & POD",
        "icon": "📜",
        "description": "Generate invoices and proof of delivery documents with fully customizable templates.",
        "benefits": [
            "Design invoice layouts that match your brand style",
            "Ensure consistency and professionalism in all documents",
            "Fetch Proof of Delivery (POD) on single click"
        ]
    },
    {
        "id": 6,
        "title": "Automated GST Split",
        "iconNew": GstSplit,
        "icon": "📊",
        "description": "Simplify tax management by automatically splitting GST charges across different accounts.",
        "benefits": [
            "Streamline your GST reporting and filing",
            "Ensure accurate tax calculations for each shipment",
            "Save time and reduce errors in tax documentation"
        ]
    },
    {
        "id": 7,
        "title": "Sub-Account Management",
        "iconNew": SubAccount,
        "icon": "🔑",
        "description": "Create and manage multiple user accounts with customized access levels.",
        "benefits": [
            "Assign specific roles and permissions to team members",
            "Easily manage different user groups within your organization",
            "Maintain security and control over account activity"
        ]
    },
    {
        "id": 8,
        "title": "WhatsApp Integration & Bots",
        "iconNew": WhatsApp,
        "icon": "💬",
        "description": "Enhance customer support and automate communication using WhatsApp integration and bots.",
        "benefits": [
            "Engage customers directly via WhatsApp for real-time support",
            "Automate frequent inquiries using bots for better efficiency",
            "Boost customer satisfaction with fast and responsive communication"
        ]
    },
    {
        "id": 9,
        "title": "Comprehensive System Integration",
        "iconNew": Integration,
        "icon": "🔗",
        "description": "Seamlessly integrate your entire logistics and business ecosystem, including channels, OMS, and marketplaces.",
        "benefits": [
            "Multi-Channel Integration: Connect stores and marketplaces seamlessly.",
            "Automation: Sync data effortlessly, reduce errors.",
            "Unified Operations: Centralize logistics and workflows."
        ]
    },
    {
        "id": 10,
        "title": "Automated Report Scheduling",
        "iconNew": ReportScheduling,
        "icon": "📅",
        "description": "Schedule and automate the generation of insightful business reports.",
        "benefits": [
            "Automate report creation and distribution for timely insights",
            "Stay informed with consistent updates on key business metrics",
            "Make data-driven decisions with regular, automated reports"
        ]
    },
    {
        "id": 11,
        "title": "24/7 Customer Support",
        "iconNew": Support,
        "icon": "🙋‍♂️",
        "description": "Access dedicated support anytime for fast issue resolution and guidance.",
        "benefits": [
            "Round-the-clock assistance to address concerns promptly",
            "Get expert help with logistics, technical, or operational issues",
            "Enhance customer satisfaction with continuous support"
        ]
    },
    {
        "id": 12,
        "title": "Simplified Return & Exchange Management",
        "iconNew": ReturnManagement,
        "icon": "🔄",
        "description": "Efficiently manage returns and exchanges with an automated, user-friendly platform.",
        "benefits": [
            "Easily handle returns and exchanges to improve customer service",
            "Reduce friction with automated return processes and refunds",
            "Offer hassle-free returns to enhance the customer experience"
        ]
    },
    {
        "id": 13,
        "title": "Business Health Monitoring",
        "icon": "🏥",
        "description": "Track the health of your business using detailed performance analytics.",
        "benefits": [
            "Monitor key business metrics and KPIs for growth",
            "Identify areas for improvement with data-driven insights",
            "Optimize business processes for increased efficiency"
        ]
    },
    {
        "id": 14,
        "title": "Referral Program Benefits",
        "iconNew": referal,
        "icon": "🎁",
        "description": "Reward customers for referring others and grow your business network.",
        "benefits": [
            "Offer incentives like discounts or bonuses for successful referrals",
            "Expand your customer base with word-of-mouth marketing",
            "Encourage loyalty and engagement through referral rewards"
        ]
    },
    {
        "id": 15,
        "title": "Exhaustive Real-Time Tracking",
        "iconNew": RealTimeTrack,
        "icon": "📍",
        "description": "Track shipments in real-time and provide complete visibility to customers.",
        "benefits": [
            "Stay updated with live tracking information for every shipment",
            "Provide customers with precise delivery timelines",
            "Optimize delivery routes based on real-time data"
        ]
    },
    {
        "id": 16,
        "title": "Smart Weight Management",
        "icon": "⚖️",
        "description": "Ensure accurate weight reporting and reconciliation for efficient shipping cost management.",
        "benefits": [
            "Reconcile weight discrepancies and improve cost accuracy",
            "Ensure precise weight calculations for better cost optimization",
            "API based weight validation from courier on real time basis"
        ]
    },
    {
        "id": 17,
        "title": "Marketplace Integrations",
        "icon": "🛒",
        "description": "Seamlessly connect with leading marketplaces like Amazon, Flipkart, and others.",
        "benefits": [
            "Manage multiple marketplace orders in one platform",
            "Syncing and tracking update on real time basis",
            "Reduce manual work and errors with direct integration"
        ]
    },
    {
        "id": 18,
        "title": "Non-Delivery Report (NDR) Management",
        "iconNew": NdrReport,
        "icon": "📊",
        "description": "Efficiently handle non-delivery issues to minimize failed deliveries.",
        "benefits": [
            "Track and manage failed delivery attempts",
            "Resolve delivery issues quickly with automated workflows",
            "Improve delivery success rate with better NDR management"
        ]
    },
    {
        "id": 19,
        "title": "Advanced Business Analytics",
        "iconNew": BusinessAnalytics,
        "icon": "📈",
        "description": "Leverage powerful analytics to make informed business decisions.",
        "benefits": [
            "Track performance metrics and key business indicators",
            "Make data-driven decisions to optimize business growth",
            "Access comprehensive insights to improve logistics efficiency"
        ]
    },
    {
        "id": 20,
        "title": "Integrated Return Handling",
        "iconNew": ReturnHandling,
        "icon": "🔄",
        "description": "Manage returns efficiently with a smooth and easy-to-use platform.",
        "benefits": [
            "Automate the return process for quick resolution",
            "Simplify return handling for better customer satisfaction",
            "Offer easy returns and exchanges to enhance the customer experience"
        ]
    },
    {
        "id": 21,
        "title": "Unified Logistics Platform",
        "iconNew": UnifiedPlatform,
        "icon": "🔑",
        "description": "Centralize all logistics operations for seamless management and visibility.",
        "benefits": [
            "Manage shipments, orders, and payments in one place",
            "Reduce complexity and improve operational efficiency",
            "Access your platform from any device at any time"
        ]
    },
    {
        "id": 22,
        "title": "Wider Pincode Coverage",
        "iconNew": WiderPinocde,
        "icon": "📍",
        "description": "Expand your reach with coverage across more pin codes, even to the remotest location.",
        "benefits": [
            "Deliver to more locations, including hard-to-reach areas",
            "Ensure nationwide delivery coverage without restrictions",
            "Increase customer satisfaction with a wider service area"
        ]
    },
    {
        "id": 23,
        "title": "Competitive Shipping Rates",
        "iconNew": BetterShippingRates,
        "icon": "💸",
        "description": "Access the best shipping rates from a range of courier partners.",
        "benefits": [
            "Save money with competitive rates for various shipment types",
            "Get the lowest rates for bulk shipments",
            "Enjoy transparent pricing with no hidden fees"
        ]
    },
    {
        "id": 24,
        "title": "Smart Courier Recommendation",
        "iconNew": CourierSelection,
        "icon": "⚙️",
        "description": "Use our recommendation engine to choose the best courier based on your needs.",
        "benefits": [
            "Get courier suggestions based on past shipment data",
            "Optimize delivery speed and cost with smart choices",
            "Select the most reliable couriers for your routes"
        ]
    },
    {
        "id": 25,
        "title": "Custom Courier & Carrier Integration",
        "iconNew": CustomIntegration,
        "icon": "🔗",
        "description": "Empower businesses to plug in their own courier and carrier services.",
        "benefits": [
            "Let businesses add their own couriers and carriers",
            "Support third-party logistics integration",
            "Offer flexible and custom shipping options"
        ]
    },
    {
        "id": 26,
        "title": "Shipment Insurance Coverage",
        "iconNew": ShipmentInsurance,
        "icon": "🛡️",
        "description": "Protect your shipments against loss or damage with comprehensive insurance options.",
        "benefits": [
            "Secure your goods with reliable shipment insurance",
            "Fast and easy claims process for peace of mind",
            "Minimize risk and ensure smooth operations"
        ]
    },
    {
        "id": 27,
        "title": "Save on Freight with Merging & Splitting",
        "iconNew": SaveOnFreight,
        "icon": "💸",
        "description": "Save on shipping costs by merging and splitting orders based on volume and destination.",
        "benefits": [
            "Reduce freight costs by combining multiple shipments into one",
            "Split larger orders to optimize shipping rates",
            "Increase cost efficiency by adjusting order sizes and destinations"
        ]
    }
]

export default features;