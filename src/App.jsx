import Navbar from "./components/Navbar";
import MenuRibbon from "./components/MenuRibbon";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex flex-col bg-slate-100">
      <Navbar />
      <MenuRibbon />
      <HeroSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/>
    </div>
  );
}

export default App;
