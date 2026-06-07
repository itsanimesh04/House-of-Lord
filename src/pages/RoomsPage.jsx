import RoomsSection from '../components/RoomsSection';
import HotelFacilities from '../components/HotelFacilities';

const RoomsPage = () => {
  return (
    <div className="pt-[72px]">
      <div className="bg-navy py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-white font-bold uppercase tracking-wide">
          Luxury Rooms & Suites
        </h1>
      </div>
      <RoomsSection />
      <HotelFacilities />
    </div>
  );
};

export default RoomsPage;
