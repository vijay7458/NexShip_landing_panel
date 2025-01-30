
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ScrollToTop from "./ScrollToTop";
import HomePage from './components/HomePage/HomePage';
import TopHeader from './components/TopHeader/TopHeader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllFeatures from './components/page/Features/AllFeatures/AllFeatures';
import DamagedShipment from './components/page/Features/DamagedShipment/DamagedShipment';
import ShipmentProtection from './components/page/Features/ShipmentProtection/ShipmentProtection';
import NDRManagement from './components/page/Features/NDRManagement/NDRManagement';
import RateCalculator from './components/page/Offerings/RateCalculator/RateCalculator';
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
import Career from './components/page/Resources/Career/Career';
import PriceAndPlans from './components/page/Offerings/PriceAndPlans/PriceAndPlans';
import TrackingOrder from './components/page/TrackingOrder/TrackingOrder';


function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />

          {/* Features Routes */}
          <Route path='/all-features' element={<AllFeatures />} />
          <Route path='/damaged-shipment' element={<DamagedShipment />} />
          <Route path='/shipment-protection' element={<ShipmentProtection />} />
          <Route path='/ndr-management' element={<NDRManagement />} />
          <Route path='/hyper-local' element={<HyperLocal />} />
          <Route path='/amazon-self-ship' element={<AmazonSelfShip />} />
          <Route path='/early-cod' element={<EarlyCOD />} />
          <Route path='/pickup-locations' element={<PickupLocations />} />

          {/* Offering Routes */}
          <Route path='/plans-pricing' element={<PriceAndPlans />} />
          <Route path='/rate-calculator' element={<RateCalculator />} />
          <Route path='/prepaid-cod' element={<PrepaidAndCOD />} />

          {/* Integration Routes */}
          <Route path='/carrier-integration' element={<CarrierIntegration />} />
          <Route path='/api-integration' element={<APIIntegration />} />
          <Route path='/channel-integration' element={<ChannelIntegration />} />
          <Route path='/whatsapp-integration' element={<WhatsAppIntegration />} />

          {/* Resources Routes */}
          <Route path='/refer-and-earn' element={<ReferAndEarn />} />
          <Route path='/media' element={<Media />} />
          <Route path='/careers' element={<Career />} />

          <Route path='/order-tracking' element={<TrackingOrder />} />


          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
