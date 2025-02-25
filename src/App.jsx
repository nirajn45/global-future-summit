import Navbar from "./components/Navbar"
import HeroSection from "./components/heroSection";
import WhyAttend from "./components/WhyAttend";
function App() {
  return (
    <div className="font-[poppins] bg-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <WhyAttend />
    </div>
  );
}

export default App;
