import { motion } from 'framer-motion';

const HotelFacilities = () => {
  // const facilities = [
  //   { 
  //     title: "15 Deluxe Rooms", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  //         <polyline points="9 22 9 12 15 12 15 22" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "24-Hour Room Service", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "High-Speed Wi-Fi", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <path d="M5 12.55a11 11 0 0 1 14.08 0" />
  //         <path d="M1.42 9a16 16 0 0 1 21.16 0" />
  //         <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
  //         <line x1="12" y1="20" x2="12.01" y2="20" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "Travel Desk", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <circle cx="12" cy="12" r="10" />
  //         <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "Laundry Service", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
  //         <path d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  //         <path d="M17 5h-1a3 3 0 0 1-6 0h-1" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "On-Site Car Parking", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <rect x="1" y="3" width="22" height="18" rx="2" />
  //         <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "Power Backup", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "CCTV Security", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
  //         <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "Conference Hall", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
  //         <circle cx="9" cy="7" r="4" />
  //         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
  //         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "Porter Services", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <path d="M6 2v20M18 2v20M6 12h12" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "Lift / Elevator", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <path d="M3 5h18M3 19h18M7 10l5-5 5 5M7 14l5 5 5-5" />
  //       </svg>
  //     )
  //   },
  //   { 
  //     title: "Wheelchair Access", 
  //     icon: (
  //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //         <circle cx="12" cy="18" r="4" />
  //         <path d="M9 13v-3a3 3 0 0 1 3-3h1" />
  //         <path d="M18 13v-2" />
  //         <path d="M9 13h9" />
  //       </svg>
  //     )
  //   },
  // ];
  const facilities = [
    {
      title: "Water Bottle",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 2h4M10 5h4M9 5v15a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5" />
        </svg>
      ),
    },
    {
      title: "Shower Gel",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 4h6v16a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V4z" />
        </svg>
      ),
    },
    {
      title: "Soap",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="4" y="8" width="16" height="8" rx="4" />
        </svg>
      ),
    },
    {
      title: "Dental Kit",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M8 3c2 0 3 1 4 1s2-1 4-1c2 0 4 2 4 5 0 7-3 13-6 13-1.5 0-2-2-2-4s-.5-4-2-4-2 2-2 4-.5 4-2 4c-3 0-6-6-6-13 0-3 2-5 4-5z" />
        </svg>
      ),
    },
    {
      title: "Milk Powder",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M7 3h10v18H7z" />
          <path d="M7 8h10" />
        </svg>
      ),
    },
    {
      title: "Tea & Coffee Bags",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 8h10v5a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8z" />
          <path d="M16 9h2a2 2 0 0 1 0 4h-2" />
        </svg>
      ),
    },
    {
      title: "Electric Kettle",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M8 6h8v3a6 6 0 0 1-12 0V6h4" />
          <path d="M16 8h2a2 2 0 0 1 0 4h-2" />
        </svg>
      ),
    },
    {
      title: "TV",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8" />
        </svg>
      ),
    },
    {
      title: "Geyser",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M12 7v6" />
        </svg>
      ),
    },
    {
      title: "Air Conditioner",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="6" width="18" height="6" rx="2" />
          <path d="M8 15v3M12 15v5M16 15v3" />
        </svg>
      ),
    },
    {
      title: "Landline",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 4h12v16H6z" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      ),
    },
  ];

  
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
                {item.icon}
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
