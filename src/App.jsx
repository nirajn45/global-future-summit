import Navbar from "./components/Navbar"
import HeroSection from "./components/heroSection";
import WhyAttend from "./components/WhyAttend";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="font-[poppins] bg-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <WhyAttend />
      <Gallery />


    </div>
  );
}
    
 

export default App;