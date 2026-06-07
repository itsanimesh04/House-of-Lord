import { motion } from 'framer-motion';

const DiningSection = () => {
  return (
    <section
      id="dining"
      className="bg-cream py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Rooftop Cafe - Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block bg-gold px-4 py-1.5 text-navy text-[0.65rem] font-bold tracking-[2px] uppercase rounded-full mb-6">
              Opening Soon
            </div>
            <span className="section-tag !text-left">State-of-the-Art</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Rooftop Café.
            </h2>
            <p className="text-navy/70 text-[0.9rem] leading-relaxed mb-8">
              A fully glass-covered Rooftop Royal Café offering panoramic views
              of Bhubaneswar. Experience the city like never before in a
              sophisticated ambiance that blends modern design with
              Baroque-inspired elegance.
            </p>
            <div className="flex flex-col gap-4 mb-10 text-[0.75rem] font-bold tracking-widest uppercase text-navy/80">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Panoramic City Views
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Fully Glass-Covered Setting
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Premium Artisan Coffee
              </div>
            </div>
            <a
              href="https://wa.me/917788000911?text=Namaste! I want to enquire about the Royal Cafe opening."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold group"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 448 512"
                fill="currentColor"
                className="mr-2 group-hover:scale-110 transition-transform"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.8-1.5-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Get Notified
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gold rounded-[4px] z-0" />
            <img
              src="/images/cafe.png"
              alt="Royal Cafe Rooftop"
              className="relative z-10 w-full h-[500px] object-cover rounded-[4px] shadow-xl"
            />
          </motion.div>
        </div>

        {/* Ground Floor Restaurant - Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/restaurant.png"
              alt="Multi-Cuisine Restaurant"
              className="w-full h-[400px] object-cover rounded-[4px] shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-navy/10 px-4 py-1 text-navy text-[0.6rem] font-bold tracking-[2px] uppercase rounded-full mb-6">
              Opening Soon
            </div>
            <span className="section-tag !text-left">Dining Facilities</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
              Multi-Cuisine Restaurant
            </h2>
            <p className="text-navy/70 text-[0.85rem] leading-relaxed mb-6">
              Located on the ground floor, our upcoming featured restaurant will
              offer an extensive menu featuring authentic local flavors and
              international favorites. Experience genuine hospitality in one of
              Bhubaneswar's most distinguished boutique settings.
            </p>
            <div className="p-6 bg-navy/5 border-l-4 border-gold italic text-[0.85rem] text-navy/80 leading-relaxed">
              "A culinary landmark on the ground floor, poised to provide
              exceptional experiences in a setting of timeless elegance."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
