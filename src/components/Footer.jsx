import { Link } from "react-router-dom";
import { siteMetadata, navLinks, siteOfferings } from "../data/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-white/5 px-6 md:px-20 py-16 text-white/70">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
        <div className="flex flex-col gap-5">
          <img
            src="/images/logo.svg"
            alt={siteMetadata.name}
            className="h-14 w-auto self-start"
          />
          <p className="text-[0.8rem] leading-7 text-white/50">
            A premier boutique hotel in {siteMetadata.address.city}, blending Baroque-inspired
            grandeur with world-class hospitality and timeless elegance.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={siteMetadata.instagramUrl}
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
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-gold">
            Our Offerings
          </h4>
          <ul className="flex flex-col gap-2.5">
            {siteOfferings.map((item, idx) => (
              <li key={idx} className="text-[0.8rem] text-white/50">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-sans text-[0.62rem] font-bold tracking-[2.5px] uppercase text-gold">
            Contact
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                {siteMetadata.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${siteMetadata.contactPhone1Raw}`}
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                {siteMetadata.contactPhone1}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${siteMetadata.contactPhone2Raw}`}
                className="text-[0.8rem] text-white/50 hover:text-gold transition-colors"
              >
                {siteMetadata.contactPhone2}
              </a>
            </li>
            <li className="text-[0.8rem] text-white/50 leading-relaxed">
              {siteMetadata.address.line1},
              <br />
              {siteMetadata.address.line2},
              <br />
              {siteMetadata.address.city} - {siteMetadata.address.pincode}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-[0.72rem] text-white/35">
          &copy; 2026 {siteMetadata.name}. All rights reserved.
        </p>
        <p className="text-[0.72rem] text-white/35 uppercase tracking-widest font-bold">
          Timeless Elegance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
