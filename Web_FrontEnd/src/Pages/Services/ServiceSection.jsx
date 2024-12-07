import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Index.css';

// Move the services array outside the component
const services = [
  {
    id: '01',
    title: 'Property Buying Consultation',
    description1: 'Expert guidance to help you make informed decisions when purchasing a property. ',
    description2: 'We assist in identifying the best investment opportunities based on your needs, preferences, and budget',
    image: '/images/step-1.svg',
    alt: 'Step 1',
    link: '/properties/',
    linkText: 'Browse Properties'
  },
  {
    id: '02',
    title: 'Property Resale Services',
    description1: 'Helping clients sell properties quickly and at optimal prices.',
    description2: 'We handle everything from marketing and negotiations to closing the sale, ensuring a seamless experience.',
    image: '/images/step-2.svg',
    alt: 'Step 2',
    link: '/properties/',
    linkText: 'Learn More'
  },
  {
    id: '03',
    title: 'Legal & Documentation Assistance',
    description1: 'Expert support in handling all legal aspects of property transactions, including drafting contracts, verifying documents, and ensuring compliance with local laws and regulations',
    description2: '',
    image: '/images/step-3.svg',
    alt: 'Step 2',
    link: '/properties/',
    linkText: 'Learn More'
  },
  {
    id: '04',
    title: 'After-Sales Services',
    description1: 'Ongoing support post-purchase, including assistance with settling into your new property, addressing concerns, and managing any immediate needs.',
    description2: '',
    image: '/images/step-4.svg',
    alt: 'Step 2',
    link: '/properties/',
    linkText: 'Learn More'
  },
  {
    id: '05',
    title: 'Investment Analysis and Market Research',
    description1: 'Detailed market research and investment analysis to help you understand current market trends, evaluate potential investments, and make informed, profitable decisions.',
    description2: '',
    image: '/images/step-5.svg',
    alt: 'Step 2',
    link: '/properties/',
    linkText: 'Learn More'
  },
  {
    id: '06',
    title: 'Payment Plan Guidance',
    description1: 'Assisting buyers in navigating various payment plans, structuring flexible and manageable options to ease the financial burden of purchasing property.',
    description2: '',
    image: '/images/step-6.svg',
    alt: 'Step 2',
    link: '/properties/',
    linkText: 'Learn More'
  },
  {
    id: '07',
    title: 'Handover and Snagging Services',
    description1: 'Ensuring that your new property meets quality standards through comprehensive handover and snagging inspections, resolving any issues before you move in.',
    description2: '',
    image: '/images/step-6.svg',
    alt: 'Step 2',
    link: '/properties/',
    linkText: 'Learn More'
  },
  {
    id: '07',
    title: 'Exclusive Pre-Launch Access',
    description1: 'Providing early access to new developments before they hit the market, giving you the opportunity to secure prime properties at competitive prices.',
    description2: '',
    image: '/images/step-6.svg',
    alt: 'Step 2',
    link: '/properties/',
    linkText: 'Learn More'
  },
];

const ServiceSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index); // Toggle the accordion
  };

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia('(min-width: 768px)').matches; // Adjust the breakpoint as needed
      if (isLargeScreen) {
        setOpenAccordion(Array.from(services.keys())); // Open all accordions on large screens
      } else {
        setOpenAccordion(null); // Close all accordions on small screens
      }
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize); // Add listener for screen resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup the listener on unmount
  }, []); // No dependencies, so it only runs once on mount/unmount

  return (
    <>
      <div className=''>
        <div className="flex flex-col   gap-x-5 my-10 space-y-5 mdm:grid mdm:grid-cols-2 w-full">

          <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(0) : openAccordion === 0} onClick={() => handleAccordionClick(0)}
            service={services[0]} />
          <div></div>
          <div></div>
          <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(1) : openAccordion === 1} onClick={() => handleAccordionClick(1)}
            service={services[1]} />
          <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(2) : openAccordion === 2} onClick={() => handleAccordionClick(2)}
            service={services[2]} />
          <div></div>
          <div></div>
          <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(3) : openAccordion === 3} onClick={() => handleAccordionClick(3)}
            service={services[3]} />
          <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(4) : openAccordion === 4} onClick={() => handleAccordionClick(4)}
            service={services[4]} />
          <div></div>
          <div></div>
          <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(5) : openAccordion === 5} onClick={() => handleAccordionClick(5)}
            service={services[5]} />

        </div>
      </div>
    </>
  );
};

const ServiceBox = ({ isOpen, onClick, service }) => {
  return (
    <div className="service-box w-[190px] sm:w-[500px] mdm:w-full mx-auto px-[30px] h-fit py-10">
      <h4 className="counter hidden mdm:block text-4xl font-bold">{service.id}</h4>
      <div className="mdm:hidden flex justify-between">
        <p className="mb-0 service-title mdm:font-bold">{service.title}</p>
        <div
          className="bg-[#7C3EFF] size-[30px] mdm:hidden rounded-full flex justify-center items-center text-white"
          onClick={onClick}
        >
          <div className="p-10">
            <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mdm:flex w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mdm:w-[40%]">
              <div className="flex justify-between">
                <p className="hidden mdm:block mb-0 service-title mdm:font-bold">{service.title}</p>
              </div>
              <img
                className="mt-5 xs:mt-0"
                src={service.image}
                alt={service.alt}
              />
            </div>
            <div className="lg:px-10 mdm:w-[60%]">
              <p>{service.description1}</p>
              <p className="mt-5">{service.description2}</p>
              <div className="mt-5">
                <a
                  href={service.link}
                  className="bg-primary btn text-white py-2 px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary hover:outline hover:outline-[1px]"
                  target="_self"
                >
                  {service.linkText}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceSection;
