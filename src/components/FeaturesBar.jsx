import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Baroque Design",
    desc: "Ornate decorations and rounded domes inspired by royal palaces."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Genuine Hospitality",
    desc: "Warm and world-class service committed to your experience."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Exquisite Dining",
    desc: "Multi-cuisine flavors and panoramic rooftop views coming soon."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Book & Coffee",
    desc: "A cozy party hall with a curated library for relaxation."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    title: "Travel Desk",
    desc: "Seamless arrangements for Jagannath Darshan and local tours."
  }
];

const FeaturesBar = () => {
  return (
    <div className="bg-cream px-6 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border-b border-cream-dark">
      {features.map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={`flex flex-col items-center text-center px-6 py-6 lg:py-0 ${idx !== features.length - 1 ? 'lg:border-r border-navy/10' : ''}`}
        >
          <div className="w-12 h-12 mb-4 text-gold">
            {item.icon}
          </div>
          <h4 className="font-sans text-[0.65rem] font-bold tracking-[2px] uppercase text-navy mb-2">
            {item.title}
          </h4>
          <p className="text-[0.78rem] text-navy/60 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesBar;
