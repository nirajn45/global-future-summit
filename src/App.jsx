import Navbar from "./components/Navbar"
import HeroSection from "./components/heroSection";
import WhyAttend from "./components/WhyAttend";
import CollaboratorsSection from "./components/logosPart";
import Footer from "./components/footer";
import Portfolio2 from "./components/Gallery";
import Faq8 from "./components/faq";
function App() {
  return (
    <div className="font-[poppins] bg-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <WhyAttend />
      <CollaboratorsSection/>
      <Portfolio2/>
      <Faq8/>
      <Footer/>
    </div>
    
  );
}

export default App;