import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining & Cafe', path: '/dining' },
    { name: 'Travel Desk', path: '/travel' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const whatsappUrl = "https://wa.me/917788000911?text=Namaste! I would like to enquire about House of Lord.";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-navy-dark shadow-[0_4px_24px_rgba(0,0,0,0.35)]' : 'bg-navy-dark border-b border-white/5'
        }`}
      >
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/images/logo.svg" alt="House of Lord" className="h-12 w-auto object-contain" />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                className={`font-sans text-[0.72rem] font-semibold tracking-[1.8px] uppercase transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? 'text-gold' 
                    : 'text-white/85 hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex flex-shrink-0 items-center gap-2.5 px-6 py-2.5 border-[1.5px] border-gold text-navy-dark bg-gold font-sans text-[0.7rem] font-bold tracking-[2px] uppercase transition-all hover:bg-navy-dark hover:text-gold group"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 448 512" 
              fill="currentColor"
              className="transition-transform group-hover:scale-110"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.8-1.5-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            WhatsApp Us
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-navy-dark pt-[72px] lg:hidden">
          <ul className="flex flex-col items-center gap-8 p-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`font-sans text-lg font-semibold tracking-[2px] uppercase transition-colors ${
                    location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 border-[1.5px] border-gold text-navy-dark bg-gold font-sans text-sm font-bold tracking-[2px] uppercase mt-4"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
