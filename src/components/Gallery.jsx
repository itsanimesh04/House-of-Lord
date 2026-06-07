import { motion } from 'framer-motion';

const images = [
  "/images/hero-building.png",
  "/images/room1.png",
  "/images/restaurant.png",
  "/images/meeting-room.png",
  "/images/cafe.png",
  "/images/room2.jpeg",
  "images/room3.png"
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="text-center mb-14 px-6">
        <span className="section-tag">Our Gallery</span>
        <h2 className="section-title">Grandeur Captured</h2>
        <span className="block text-gold text-lg tracking-[4px] mt-2 select-none">— ✦ —</span>
        <p className="max-w-2xl mx-auto mt-6 text-navy/60 text-[0.9rem] leading-relaxed">
          Witness the intricate Baroque architecture and regal interiors that define the 
          unique boutique experience at HOUSE OF LORD.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px] px-6 md:px-20">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`overflow-hidden cursor-pointer ${idx === 0 ? 'lg:row-span-2 h-full' : 'h-[260px]'}`}
          >
            <img 
              src={img} 
              alt={`House of Lord - ${idx + 1}`} 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.03] hover:brightness-[1.08]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
