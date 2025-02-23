import HeroSection from "./components/heroSection";

import Gallery from "./components/Gallery";


import CompanyLogos from "./components/sumit";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      <CompanyLogos/>
      <Gallery />


    </div>
    
  );
}

export default App;