import TravelDeskSection from '../components/TravelDeskSection';

const TravelPage = () => {
  return (
    <div className="pt-[72px]">
      <div className="bg-navy py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-white font-bold uppercase tracking-wide">
          Travel Desk & Darshan
        </h1>
      </div>
      <TravelDeskSection />
    </div>
  );
};

export default TravelPage;
