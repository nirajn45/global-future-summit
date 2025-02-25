<<<<<<< HEAD
import Navbar from "./components/Navbar"
import HeroSection from "./components/heroSection";
import WhyAttend from "./components/WhyAttend";
function App() {
  return (
    <div className="font-[poppins] bg-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <WhyAttend />
=======
import HeroSection from "./components/heroSection";

import Gallery from "./components/Gallery";


import CompanyLogos from "./components/sumit";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      <CompanyLogos/>
      <Gallery />


>>>>>>> 17c3e40e01d1cae7e0f18fba7e02672808f72f95
    </div>
    
  );
}

export default App;