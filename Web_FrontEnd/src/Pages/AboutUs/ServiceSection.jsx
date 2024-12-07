import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const ServiceSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Knowledgeable",
      content: "At Eplog Properties, we pride ourselves on being experts in the real estate market. Our team brings deep industry knowledge and a wealth of experience to every transaction, ensuring our clients receive informed guidance. Whether it's understanding market trends, pricing strategies, or the nuances of property law, we are dedicated to providing you with the insights needed to make the best possible decisions.",
      icon: "/Svg/icon1-1.svg",
    },
    {
      title: "Trustworthy",
      content: "Trust is the foundation of every relationship we build. Our clients rely on us for honest advice, transparent communication, and ethical practices throughout the real estate process. We put your needs first, offering reliable solutions and consistently following through on our promises. At Eplog Properties, integrity is at the core of everything we do.",
      icon: "/Svg/icon2-1.svg", // Add appropriate icon
    },
    {
      title: "Committed",
      content: "We are fully invested in your success. Our commitment to excellence drives us to go above and beyond to achieve the best outcomes for our clients. Whether you're buying, selling, or renting, we remain dedicated to guiding you through every step of the process with unwavering focus, personalized attention, and a relentless pursuit of your goals.",
      icon: "/Svg/icon3-1.svg", // Add appropriate icon
    },
  ];

  return (
    <section className="py-10 bg-gray-100  text-white  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  abt-services">
        <div className="space-y-6 bordeRed w-full z-20">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`sm:w-[50%] ${index===1?'sm:ml-auto ':""} rounded-[48px] cursor-pointer bg-[#96A0A7]`}
              onClick={() => toggleAccordion(index)}
            >
              <div className='rounded-[48px] px-5 py-6 bg-[#374957] flex justify-between items-center'>
                <div className="flex items-center gap-3">
                  <img src={item.icon} width="45" alt="" />
                  <h5 className="text-xl font-bold text-white">{item.title}</h5>
                </div>
                <div className='text-xl'>
                  {openAccordion === index ? (
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded"
                  >
                    <p className='mt-4 px-10 pb-5'>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
