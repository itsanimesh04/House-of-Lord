import DiningSection from '../components/DiningSection';

const DiningPage = () => {
  return (
    <div className="pt-[72px]">
      <div className="bg-navy py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-white font-bold uppercase tracking-wide">
          Dining & Cafe
        </h1>
      </div>
      <DiningSection />
    </div>
  );
};

export default DiningPage;
