import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <div className="pt-[72px]">
      <div className="bg-navy py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-white font-bold uppercase tracking-wide">
          Our Gallery
        </h1>
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
