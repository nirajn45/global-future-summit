import HeroSection from "./components/heroSection";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      <Gallery />
    </div>
  );
}

export default App;