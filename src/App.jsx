import BreadCrumbs from "./components/BreadCrumbs";
import CardSection from "./components/CardSection";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import FlightCards from "./components/FlightCards";
import QuickView from "./components/QuickView";
import Info from "./components/Info";
import CitiesSection from "./components/CitiesSection";
import PopularFlightsSection from "./components/PopularFlightsSection";
import AirLinesSection from "./components/AirLinesSection";
import FaqSection from "./components/FaqSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <BreadCrumbs />
      <CardSection>
        <FlightCards />
      </CardSection>
      <CardSection style="mt-12">
        <FlightCards />
      </CardSection>
      <QuickView />
      <Info/>
      <CitiesSection/>
      <PopularFlightsSection/>
      <AirLinesSection/>
      <FaqSection/>
    </>
  );
}
export default App;
