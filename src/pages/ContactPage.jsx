import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  return (
    <div className="pt-[72px]">
      <div className="bg-navy py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-white font-bold uppercase tracking-wide">
          Contact Us
        </h1>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
