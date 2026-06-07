import { Link } from "react-router-dom";

const Footer = () => {
  const instagramUrl =
    "https://www.instagram.com/houseoflordbbsr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <footer className="bg-navy-dark border-t border-white/5 px-6 md:px-20 py-16 text-white/70">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
        <div className="flex flex-col gap-5">
          <img
            src="/images/logo.svg"
            alt="House of Lord"
            className="h-14 w-auto self-start"
          />
          <p className="text-[0.8rem] leading-7 text-white/50">
            A premier boutique hotel in Bhubaneswar, blending Baroque-inspired
            grandeur with world-class hospitality and timeless elegance.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-gold">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link
                to="/"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                Rooms & Facilities
              </Link>
            </li>
            <li>
              <Link
                to="/dining"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                Dining & Cafe
              </Link>
            </li>
            <li>
              <Link
                to="/travel"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                Travel Desk
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-gold">
            Our Offerings
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li className="text-[0.8rem] text-white/50">15 Deluxe Rooms</li>
            <li className="text-[0.8rem] text-white/50">Rooftop Royal Café</li>
            <li className="text-[0.8rem] text-white/50">
              Vindhyavan Restaurant
            </li>
            <li className="text-[0.8rem] text-white/50">
              Book & Coffee Library
            </li>
            <li className="text-[0.8rem] text-white/50">
              Jagannath Darshan Assistance
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-gold">
            Contact
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href="mailto:houseoflordhotel@gmail.com"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                houseoflordhotel@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+917788000910"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                +91 77880 00910
              </a>
            </li>
            <li>
              <a
                href="tel:+917788000911"
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                +91 77880 00911
              </a>
            </li>
            <li className="text-[0.8rem] text-white/50 leading-relaxed">
              Plot No. 906, K8 Kalinga Nagar,
              <br />
              Ghatikia, Back Side of SUM Hospital,
              <br />
              Bhubaneswar - 751003
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-[0.72rem] text-white/35">
          &copy; 2026 House of Lord. All rights reserved.
        </p>
        <p className="text-[0.72rem] text-white/35 uppercase tracking-widest font-bold">
          Timeless Elegance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
