import Navbar from "./components/NavBar";
import HeroSection from "./components/heroSection";
import WhyAttend from "./components/WhyAttend";
import CollaboratorsSection from "./components/logosPart";
import Footer from "./components/footer";
import ImageGrid from "./components/Gallery";
import Faq8 from "./components/faq";
import TUC from "./components/TUCommunity"
import AboutUs from "./components/About";
import Timeline from "./components/timeline";
import SpeakersCarousel from "./components/speakers";

import RegisterPage from "./components/Register";
function App() {
  return (
    <div className="font-[poppins] bg-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <Timeline/>
      <WhyAttend />
      <CollaboratorsSection/>
      <SpeakersCarousel/>
     
      <TUC/>
      <ImageGrid/>
      <RegisterPage/>
      <Faq8/>
      <Footer/>
    </div>
  );
}
    
 

export default App;