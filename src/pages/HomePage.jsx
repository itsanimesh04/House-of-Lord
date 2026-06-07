import Hero from '../components/Hero';
import FeaturesBar from '../components/FeaturesBar';
import AboutSection from '../components/AboutSection'; // Re-added
import RoomsSection from '../components/RoomsSection';
import HotelFacilities from '../components/HotelFacilities';
import TravelDeskSection from '../components/TravelDeskSection';
import StatsBar from '../components/StatsBar';
import DiningSection from '../components/DiningSection';
import Gallery from '../components/Gallery';
import ContactSection from '../components/ContactSection';
import CTAStrip from '../components/CTAStrip';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <AboutSection />
      <RoomsSection />
      <HotelFacilities />
      <TravelDeskSection />
      <StatsBar />
      <DiningSection />
      <Gallery />
      <ContactSection />
      <CTAStrip />
    </>
  );
};

export default HomePage;
