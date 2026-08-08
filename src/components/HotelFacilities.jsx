import { motion } from 'framer-motion';
import { facilities } from '../data/siteConfig';

const facilityIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 2h4M10 5h4M9 5v15a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 4h6v16a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V4z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="8" width="16" height="8" rx="4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 3c2 0 3 1 4 1s2-1 4-1c2 0 4 2 4 5 0 7-3 13-6 13-1.5 0-2-2-2-4s-.5-4-2-4-2 2-2 4-.5 4-2 4c-3 0-6-6-6-13 0-3 2-5 4-5z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 3h10v18H7z" />
      <path d="M7 8h10" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 8h10v5a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8z" />
      <path d="M16 9h2a2 2 0 0 1 0 4h-2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 6h8v3a6 6 0 0 1-12 0V6h4" />
      <path d="M16 8h2a2 2 0 0 1 0 4h-2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M12 7v6" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="6" width="18" height="6" rx="2" />
      <path d="M8 15v3M12 15v5M16 15v3" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 4h12v16H6z" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  ),
];

const HotelFacilities = () => {
  return (
    <section className="bg-navy py-24 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Facilities & Services</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Property Amenities</h2>
          <span className="block text-gold text-lg tracking-[4px] mt-4 select-none">— ✦ —</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-4 bg-white/5 p-5 rounded-[4px] border border-white/5 hover:border-gold/30 transition-all group"
            >
              <div className="w-8 h-8 text-gold flex-shrink-0 group-hover:scale-110 transition-transform">
                {facilityIcons[idx % facilityIcons.length]}
              </div>
              <span className="text-[0.65rem] font-bold tracking-[1.5px] uppercase text-white/80 leading-tight">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFacilities;
