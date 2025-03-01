import Navbar from "./components/NavBar";
import HeroSection from "./components/heroSection";
import WhyAttend from "./components/WhyAttend";
// import CollaboratorsSection from "./components/logosPart";
import Footer from "./components/footer";
import ImageGrid from "./components/Gallery";
import Faq8 from "./components/faq";
import ConsultingSection from "./components/TUCommunity"
import GlobalFutureSummit from "./components/About";
// import TimelineItem from "./components/timeline";
import SpeakersSection from "./components/speakers";

function App() {
  return (
    <div className="font-[poppins] bg-white min-h-screen w-full flex flex-col items-center justify-center">
      <Navbar />
      <section id="home">
      <HeroSection />
      </section>
      <section id="about">
      <GlobalFutureSummit/>
      </section>
   
      {/* <TimelineItem/> */}
      <section id="objective">
      <WhyAttend />
      </section>
      {/* <CollaboratorsSection/> */}
      <section className="w-[90%] mx-auto" id="speakers">
      <SpeakersSection/>
      </section>
     <section id="contact">
      <ConsultingSection/>
      </section>
      <ImageGrid/>
      <Faq8/>
      <Footer/>
    </div>
  );
}
    
 

export default App;