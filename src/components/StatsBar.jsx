import { motion } from 'framer-motion';

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
      </svg>
    ),
    value: "15",
    label: "Deluxe Rooms",
    desc: "Well-appointed rooms with modern facilities."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "24/7",
    label: "Room Service",
    desc: "Round-the-clock attentive hospitality."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    value: "Baroque",
    label: "Architecture",
    desc: "Inspired by ancient royal palaces."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      </svg>
    ),
    value: "2",
    label: "Dining Venues",
    desc: "Rooftop Café & Ground Floor Restaurant."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value: "Prime",
    label: "Location",
    desc: "Heart of Bhubaneswar, near SUM Hospital."
  }
];

const StatsBar = () => {
  return (
    <div className="bg-navy px-6 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
      {stats.map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={`flex items-start gap-[18px] px-6 py-6 lg:py-0 ${idx !== stats.length - 1 ? 'lg:border-r border-white/10' : ''}`}
        >
          <div className="w-10 h-10 flex-shrink-0 text-gold mt-1">
            {item.icon}
          </div>
          <div className="flex flex-col">
            <h3 className="font-serif text-3xl font-bold text-white leading-none mb-1 uppercase">
              {item.value}
            </h3>
            <span className="text-[0.6rem] font-bold tracking-[2px] uppercase text-gold mb-1.5 block">
              {item.label}
            </span>
            <p className="text-[0.75rem] text-white/60 leading-[1.4]">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsBar;
