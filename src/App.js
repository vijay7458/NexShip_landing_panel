
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ScrollToTop from "./ScrollToTop";
import HomePage from './components/HomePage/HomePage';
import TopHeader from './components/TopHeader/TopHeader';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

import AllFeatures from './components/page/Features/AllFeatures/AllFeatures';
import DamagedShipment from './components/page/Features/DamagedShipment/DamagedShipment';
import ShipmentProtection from './components/page/Features/ShipmentProtection/ShipmentProtection';
import NDRManagement from './components/page/Features/NDRManagement/NDRManagement';
// import RateCalculator from './components/page/Offerings/RateCalculator/RateCalculator';
import CarrierIntegration from './components/page/Integration/CarrierIntegration/CarrierIntegration';
import ReferAndEarn from './components/page/Resources/ReferAndEarn/ReferAndEarn';
import ContactUs from './components/page/ContactUs/ContactUs';
import APIIntegration from './components/page/Integration/APIIntegration/APIIntegration';
import HyperLocal from './components/page/Features/HyperLocal/HyperLocal';
import AmazonSelfShip from './components/page/Features/AmazonSelfShip/AmazonSelfShip';
import EarlyCOD from './components/page/Features/EarlyCOD/EarlyCOD';
import PickupLocations from './components/page/Features/PickupLocations/PickupLocations';
import PrepaidAndCOD from './components/page/Offerings/PrepaidAndCOD/PrepaidAndCOD';
import ChannelIntegration from './components/page/Integration/ChannelIntegration/ChannelIntegration';
import WhatsAppIntegration from './components/page/Integration/WhatsAppIntegration/WhatsAppIntegration';
import Media from './components/page/Resources/Media/Media';
import PriceAndPlans from './components/page/Offerings/PriceAndPlans/PriceAndPlans';
import TrackingOrder from './components/page/TrackingOrder/TrackingOrder';
import DetailedFooter from './components/DetailedFooter/DetailedFooter';
import TermsAndConditions from './components/Footer/Components/TermsAndConditions/TermsAndConditions';
// import PrivacyPolicy from './components/Footer/Components/PrivacyPolicy/PrivacyPolicy';
import AboutPage from './components/page/about/AboutPage';
import Customers from './components/page/Customers/Customers';
import HelpCenter from './components/page/HelpCenter/HelpCenter';
import FAQDetail from './components/page/HelpCenter/FAQDetail';
import SubCategoryPage from './components/page/HelpCenter/SubCategoryPage';
import VolumetricWeightCalculator from './components/page/VolumetricWeightCalculator/VolumetricWeightCalculator';
import './responsive.css'
import NotFound from './components/page/NotFound/NotFound';
import TopNav from './navbar/TopNav';
import FeatureBanner from './components/banner/FeatureBanner';
import FeatureMid from './pages/feature/FeatureMid';
import TermCondition from './pages/feature/term&condition/TermCondition';
import Discount from './components/discount/Discount';
import Footer from './websiteFooter/Footer';
import PrivacyPolicy from './pages/feature/privacypolicy/PrivacyPolicy';
import RateCalculator from './pages/feature/rateCalculator/RateCalculator';
import Rto from './pages/feature/rto/Rto';
import About from './pages/feature/about/About';
import Career from './pages/feature/career/Career';
import OurTeam from './pages/feature/ourteam/OurTeam';
import Partner from './pages/feature/partner/Partner';
import InvestorRelation from './pages/feature/investorRelation/InvestorRelation';
import NewsRoom from './pages/feature/newsroom/NewsRoom';
import Stories from './pages/feature/customerStories/Stories';
import EcommerceShipping from './pages/feature/ecommerceShipping/EcommerceShipping';
import WarehouseFullFillment from './pages/feature/warehouseFullfillment/WarehouseFullFillment';
import Feature from './pages/feature/Feature';
import Blog from './pages/feature/blog/Blog';
import Knowledge from './pages/feature/knowledgeBase/Knowledge';
import FaqMain from './components/page/faq/FaqMain';
import TrackOrderMain from './components/trackOrder/TrackOrderMain';
import MetaPixelTracker from "./components/metafixel/MetaPixelTracker";
// import Feature from './Feature';


function App() {
  return (
    <>
      {/* <TopHeader /> */}
      {/* <Header /> */}
      {/* <Discount />
      <TopNav /> */}
      <ScrollToTop />
      <MetaPixelTracker /> 
      <Discount /> 
      <Routes>
        <Route path='/terms' element={<TermCondition />} />
        <Route path='/' element={<Feature />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/rate-calculator' element={<RateCalculator />} />
        <Route path='/calculator' element={<RateCalculator />} />
        <Route path='/track' element={<TrackOrderMain />} />
        {/* Features Routes */}
        <Route path='/all-features' element={<AllFeatures />} />
        <Route path='/damaged-shipment' element={<DamagedShipment />} />
        <Route path='/shipment-protection' element={<ShipmentProtection />} />
        <Route path='/ndr-management' element={<NDRManagement />} />
        <Route path='/hyper-local' element={<HyperLocal />} />
        <Route path='/amazon-self-ship' element={<AmazonSelfShip />} />
        <Route path='/early-cod' element={<EarlyCOD />} />
        <Route path='/pickup-locations' element={<PickupLocations />} />
        <Route path='/solutions/rto-prediction' element={<Rto />} />
        {/* Offering Routes */}
        <Route path='/plans-pricing' element={<PriceAndPlans />} />
        {/* <Route path='/rate-calculator' element={<RateCalculator />} /> */}
        <Route path='/prepaid-cod' element={<PrepaidAndCOD />} />
        {/* Integration Routes */}
        <Route path='/carrier-integration' element={<CarrierIntegration />} />
        <Route path='/api-integration' element={<APIIntegration />} />
        <Route path='/channel-integration' element={<ChannelIntegration />} />
        <Route path='/whatsapp-integration' element={<WhatsAppIntegration />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/investors' element={<InvestorRelation />} />
        {/* Resources Routes */}
        <Route path='/refer-and-earn' element={<ReferAndEarn />} />
        <Route path='/media' element={<Media />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/support/home' element={<Blog />} />
        {/* /support/home */}

        <Route path='/careers' element={<Career />} />
        {/* <Route path='/support/home' element={<HelpCenter/>} /> */}
        <Route path='/solutions/fulfillment' element={<WarehouseFullFillment />} />
        <Route path='/partners' element={<Partner />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/solutions/ecommerce' element={<EcommerceShipping />} />
        <Route path='/order-tracking' element={<TrackingOrder />} />
        <Route path="/order-tracking/:awbNumber" element={<TrackingOrder />} />
        <Route path='/track-order' element={<TrackingOrder />} />
        <Route path="/track-order/:awbNumber" element={<TrackingOrder />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsroom" element={<NewsRoom />} />
        <Route path='/contact' element={<ContactUs />} />
        {/* Footer Links */}
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/about-us' element={<AboutPage />} />
        {/* <Route path='/calculator' element={<AboutPage />} /> */}
        <Route path='/customers' element={<Customers />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/knowledge" element={<Knowledge />} />

        <Route path="/support/solutions/articles/:id" element={<FAQDetail />} />
        <Route path="/support/solutions/:category/:subCategory" element={<SubCategoryPage />} />
        <Route path="/volumetric-weight-calculator" element={<VolumetricWeightCalculator />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
      <Footer />
    </>
  );
}

export default App;
