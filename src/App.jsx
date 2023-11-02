import FlowerSection from "./components/flowerSection/FlowerSection";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OpenSection from "./components/openSection/OpenSection";
import Stats from "./components/stats/Stats";
import Cta from "./components/cta/Cta";
import Pastries from "./components/pastries/Pastries";
import Reservation from "./components/reservation/Reservation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <OpenSection />
      <FlowerSection />
      <Cta />
      <Pastries />
      <Reservation />
      <Footer />
    </>
  );
}

export default App;
