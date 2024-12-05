
import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage/HomePage';
import TopHeader from './components/TopHeader/TopHeader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
