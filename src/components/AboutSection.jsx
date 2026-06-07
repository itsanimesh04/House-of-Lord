import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-cream py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border-2 border-gold/50 rounded-[4px] z-0" />
            <img
              src="/images/hero-building.png"
              alt="House of Lord Building"
              className="relative z-10 w-full h-[500px] object-cover rounded-[4px] shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <span className="section-tag !text-left">About House of Lord</span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold text-navy leading-[1.15] mb-6">
              Grandeur Architecture.
              <br />
              Genuine Hospitality.
              <span className="block w-14 h-[2px] bg-gold mt-4" />
            </h2>
            <p className="text-[0.9rem] text-navy/70 leading-[1.8] mb-6">
              HOUSE OF LORD is a premier boutique hotel located in the heart of
              Bhubaneswar. Showcasing state-of-the-art design, the hotel draws
              inspiration from <strong>Baroque architecture</strong>- featuring
              ornate decorations, ceiling frescoes, dramatic lighting, rounded
              domes, and intricate leaf motifs.
            </p>
            <p className="text-[0.9rem] text-navy/70 leading-[1.8] mb-8">
              Every detail is carefully crafted to evoke the grandeur of ancient
              royal palaces. Despite its upscale ambiance, we remain affordably
              priced, ensuring a delightful and accessible stay for both
              business and leisure travelers.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
              <div className="flex items-center gap-3 text-[0.7rem] font-bold tracking-widest uppercase text-navy/80">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Spiral Columns
              </div>
              <div className="flex items-center gap-3 text-[0.7rem] font-bold tracking-widest uppercase text-navy/80">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Rounded Domes
              </div>
              <div className="flex items-center gap-3 text-[0.7rem] font-bold tracking-widest uppercase text-navy/80">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Ceiling Frescoes
              </div>
              <div className="flex items-center gap-3 text-[0.7rem] font-bold tracking-widest uppercase text-navy/80">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Dramatic Lighting
              </div>
            </div>
          </motion.div>
        </div>

        {/* Book & Coffee Library Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy p-10 md:p-16 rounded-[4px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gold px-4 py-1 text-navy text-[0.6rem] font-bold tracking-[2px] uppercase rounded-full mb-6">
                Opening Soon
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                The Book & Coffee Library
              </h3>
              <p className="text-white/70 text-[0.9rem] leading-relaxed mb-8">
                A cozy party hall with a curated library—perfect for relaxation,
                deep conversations, and small gatherings. Enjoy a premium coffee
                while surrounded by timeless literature.
              </p>
              <div className="flex items-center gap-4 text-gold">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span className="text-[0.75rem] font-bold tracking-widest uppercase">
                  Curated Relaxation
                </span>
              </div>
            </div>
            <div className="h-64 md:h-80 rounded-[4px] overflow-hidden border border-white/10">
              <img
                src="/images/book-cafe.png"
                alt="Book & Coffee Library"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
