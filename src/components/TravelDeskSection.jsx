import { motion } from 'framer-motion';

const TravelDeskSection = () => {
  const travelServices = [
    {
      title: "Jagannath Darshan",
      desc: "Priority and hassle-free Darshan arrangements for Lord Jagannath at Puri.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" />
          <path d="M12 22V12" />
          <path d="M12 12L20 7" />
          <path d="M12 12L4 7" />
          <path d="M12 7V2" />
        </svg>
      )
    },
    {
      title: "Car Rentals",
      desc: "Premium and budget-friendly car rental services for local and outstation travel.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="10" width="22" height="8" rx="2" />
          <path d="M7 10l2-4h6l2 4" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      )
    },
    {
      title: "Puri City Tours",
      desc: "Guided tours to Konark Sun Temple, Chilika Lake, and other local landmarks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      title: "Railway/Airport Pickup",
      desc: "Timely and safe pickup and drop services from nearby transit hubs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="travel" className="bg-white py-24 px-6 md:px-20 text-navy overflow-hidden relative border-t border-navy/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/[0.03] -skew-x-12 transform translate-x-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag !text-left">Premier Travel Desk</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-navy leading-tight">
              Spiritual Journeys,<br />
              Seamlessly Arranged.
            </h2>
            <p className="text-navy/70 text-[0.9rem] leading-relaxed mb-8 max-w-lg">
              We understand the sanctity of your visit. Our dedicated Travel Desk ensures 
              that your pilgrimage to Lord Jagannath is peaceful and well-organized, 
              from priority Darshan arrangements to verified professional drivers.
            </p>
            
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-[0.85rem] font-bold uppercase tracking-widest text-navy/80 leading-tight">Personalized Darshan Assistance at Puri</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-[0.85rem] font-bold uppercase tracking-widest text-navy/80 leading-tight">Verified Professional Porter & Car Services</p>
              </div>
            </div>

            <a 
              href="https://wa.me/917788000911?text=Namaste! I would like to enquire about Jagannath Darshan and travel services." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold group"
            >
              <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor" className="mr-2 group-hover:scale-110 transition-transform">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.8-1.5-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Plan Your Visit Now
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {travelServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white border border-navy/10 p-8 rounded-[4px] hover:border-gold transition-all duration-300 group cursor-default shadow-sm"
              >
                <div className="w-12 h-12 mb-6 text-gold transition-transform duration-300 flex items-center justify-center">
                  {service.icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-navy mb-3 transition-colors duration-300">{service.title}</h4>
                <p className="text-navy/50 text-[0.8rem] leading-relaxed group-hover:text-navy/70 transition-colors duration-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDeskSection;
