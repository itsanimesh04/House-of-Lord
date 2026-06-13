import { motion } from "framer-motion";

const rooms = [
  {
    image: "/images/room1.png",
    title: "Deluxe Room",
    price: "₹2,499",
    desc: "Elegant interiors with modern comforts and round-the-clock room service.",
    amenities: [
      "King Size Bed",
      "High Speed Wi-Fi",
      "Intercom",
      "Air Conditioning",
    ],
  },
  {
    image: "/images/room2.jpeg",
    title: "Premium Deluxe Room",
    price: "₹2,999",
    desc: "Thoughtfully designed for a truly regal stay with luxury appointments.",
    amenities: [
      "Flat Screen TV",
      "Premium Bedding",
      "24-Hour Service",
      "Secure Safe",
    ],
  },
  {
    image: "/images/room3.png",
    title: "Super Premium Deluxe Room",
    price: "₹3,499",
    desc: "Spacious luxury designed for both business and leisure travelers.",
    amenities: [
      "Work Desk",
      "Coffee Maker",
      "Regal Decor",
      "Modern Facilities",
    ],
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="bg-cream py-24 px-6 md:px-20">
      <div className="text-center mb-14">
        <span className="section-tag">Luxury Accommodations</span>

        <h2 className="section-title">Select Well-Appointed Rooms</h2>

        <span className="block text-gold text-lg tracking-[4px] mt-2 select-none">
          — ✦ —
        </span>

        <p className="max-w-2xl mx-auto mt-6 text-navy/60 text-[0.9rem] leading-relaxed">
          HOUSE OF LORD offers beautifully appointed Deluxe rooms, each crafted
          to evoke the grandeur of ancient royal palaces while providing modern
          world-class hospitality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group bg-white rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            {/* Room Image */}
            <div className="h-[280px] overflow-hidden relative">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute top-4 right-4 bg-gold px-3 py-1 text-navy text-[0.6rem] font-bold tracking-widest uppercase rounded-full">
                Boutique
              </div>
            </div>

            {/* Room Content */}
            <div className="p-8">
              {/* Title + Price */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-serif text-2xl font-semibold text-navy leading-tight">
                  {room.title}
                </h3>

                <div className="bg-gold/10 border border-gold/20 rounded-[4px] px-4 py-2 text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-gold">{room.price}</p>

                  <p className="text-[0.65rem] tracking-[2px] uppercase text-navy/50">
                    Per Night
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[0.85rem] text-navy/60 leading-relaxed mb-6">
                {room.desc}
              </p>

              {/* Amenities */}
              <div className="grid grid-cols-2 gap-y-3 mb-8">
                {room.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-[0.68rem] font-bold tracking-widest uppercase text-navy/70"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-gold"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    {amenity}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/917788000911?text=${encodeURIComponent(
                  `Namaste! I want to enquire about ${room.title} availability.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold w-full justify-center group"
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
                Book Your Stay
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
