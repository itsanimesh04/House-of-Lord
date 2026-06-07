import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-cream py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <span className="section-tag !text-left">Get In Touch</span>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-navy leading-tight mb-6 relative">
            Experience<br />Genuine Hospitality
            <span className="block w-14 h-[2px] bg-gold mt-3.5" />
          </h2>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 text-gold flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <p className="text-[0.85rem] text-navy/70">houseoflordhotel@gmail.com</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-5 h-5 text-gold flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[0.85rem] text-navy/70">+91 77880 00910</p>
                <p className="text-[0.85rem] text-navy/70">+91 77880 00911</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-5 h-5 text-gold flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-[0.85rem] text-navy/70 leading-relaxed">
                Plot No. 906, K8 Kalinga Nagar,<br />
                Ghatikia, Back Side of SUM Hospital,<br />
                Bhubaneswar - 751003
              </p>
            </div>
          </div>

          <a 
            href="https://wa.me/917788000911?text=Namaste! I would like to schedule a visit to House of Lord." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold mt-8"
          >
            Schedule a Visit &nbsp;›
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 shadow-sm rounded-[4px]"
        >
          <div className="mb-6 p-4 bg-navy/5 border-l-4 border-gold text-[0.8rem] text-navy/70 italic">
            All enquiries are synchronized with our Central Booking Office via Email and WhatsApp for instant assistance.
          </div>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[0.68rem] font-bold tracking-[1.5px] uppercase text-navy">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full px-4 py-3 border border-navy/15 rounded-[4px] font-sans text-[0.85rem] text-navy bg-cream outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[0.68rem] font-bold tracking-[1.5px] uppercase text-navy">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 border border-navy/15 rounded-[4px] font-sans text-[0.85rem] text-navy bg-cream outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[0.68rem] font-bold tracking-[1.5px] uppercase text-navy">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+91 00000 00000" 
                className="w-full px-4 py-3 border border-navy/15 rounded-[4px] font-sans text-[0.85rem] text-navy bg-cream outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[0.68rem] font-bold tracking-[1.5px] uppercase text-navy">Message</label>
              <textarea 
                placeholder="Tell us about your event or enquiry…" 
                className="w-full px-4 py-3 border border-navy/15 rounded-[4px] font-sans text-[0.85rem] text-navy bg-cream outline-none focus:border-gold transition-colors resize-vertical min-h-[120px]"
              />
            </div>
            <button className="btn btn-gold w-full justify-center">
              Send Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
