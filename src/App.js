// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import WeddingDecor from './pages/WeddingDecor';
// import CorporateEvents from './pages/CorporateEvents';
// import BirthdayParties from './pages/BirthdayParties';
// import BabyShowers from './pages/BabyShowers';
// import Gallery from './pages/Gallery';
// import DecorationPackages from './pages/DecorationPackages';
// import Contact from './pages/Contact';
// import About from './pages/About';
import './App.css';
import Home from './screens/home/home';
import WeddingDecor from './screens/weddingDecor';
import Gallery from './screens/gallery';
import DecorationPackages from './screens/decorationsPackages';
import About from './screens/about';
import Navbar from './components/navbar/navbar';
import AppFooter from './screens/footer';
import Contact from './screens/contact';
import './globalStyles.css'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#d4af37',
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#f5222d',
          colorInfo: '#1890ff',
          borderRadius: 8,
        },
      }}
    >
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wedding-decor" element={<WeddingDecor />} />
            {/* <Route path="/corporate-events" element={<CorporateEvents />} /> */}
            {/* <Route path="/birthday-parties" element={<BirthdayParties />} /> */}
            {/* <Route path="/baby-showers" element={<BabyShowers />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<DecorationPackages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <AppFooter />
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;