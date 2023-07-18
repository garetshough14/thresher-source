import './App.css';
import HomePage from './Components/HomePage';
import { Routes, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import OurServices from './Components/OurServices';
import StructuralSteel from './Components/StructuralSteel';
import HVACService from './Components/HVACService';
import GeneralContractingService from './Components/GeneralContractingService';
import Gallery from './Components/Gallery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/services" element={<OurServices />} />
      <Route path='/service/structural-steel-work' element={<StructuralSteel />} />
      <Route path='/service/hvac-services' element={<HVACService />} />
      <Route path='/service/general-contracting' element={<GeneralContractingService />} />
    </Routes>
  );
}

export default App;
