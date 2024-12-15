
import { Route, Routes } from 'react-router-dom';
import './App.css'
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

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/all-features' element={<AllFeatures />} />
          <Route path='/damaged-shipment' element={<DamagedShipment />} />
          <Route path='/shipment-protection' element={<ShipmentProtection />} />
          <Route path='/ndr-management' element={<NDRManagement />} />
          <Route path='/rate-calculator' element={<RateCalculator />} />
          <Route path='/carrier-integration' element={<CarrierIntegration />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
