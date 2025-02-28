import Navbar from "./components/NavBar";
import HeroSection from "./components/heroSection";
import WhyAttend from "./components/WhyAttend";
import CollaboratorsSection from "./components/logosPart";
import Footer from "./components/footer";
import Gallery from "./components/Gallery";
import Faq8 from "./components/faq";
import AboutUs from "./components/About";
import Timeline from "./components/timeline";
function App() {
  return (
    <div className="font-[poppins] bg-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <Timeline/>
      <WhyAttend />
      <CollaboratorsSection/>
      <Gallery/>
      <Faq8/>
      <Footer/>
    </div>
  );
}
    
 

export default App;