import React, { useState } from 'react';
import './index.css';

const ServiceSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-100 abt-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div id="accordionFlushExample">

            {/* First Accordion Item */}
            <div className="w-full">
              <div className="flex items-center justify-start">
                <div className="bg-gray-800 text-white rounded-lg overflow-hidden w-full">
                  <h2 className="mb-0" id="flush-heading1">
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 text-left bg-gray-800 text-white focus:outline-none"
                      type="button"
                      aria-expanded={openAccordion === 0}
                      aria-controls="flush-collapse1"
                      onClick={() => toggleAccordion(0)}
                    >
                      <div className="flex items-center gap-3">
                        <img src="https://eplogproperties.com/wp-content/uploads/2023/10/icon1-1.svg" width="45" alt="" />
                        <h5 className="text-xl font-bold">We are <br /> Trustworthy</h5>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse1"
                    className={`${openAccordion === 0 ? '' : 'hidden'}`}
                    aria-labelledby="flush-heading1"
                  >
                    <div className="px-5 py-4 text-sm text-gray-200">
                      We are dedicated to your goals, we go the extra mile with steadfast commitment, ensuring a personalized and enduring partnership in every real estate endeavor.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Accordion Item */}
            <div className="w-full">
              <div className="flex items-center justify-end">
                <div className="bg-gray-800 text-white rounded-lg overflow-hidden w-full">
                  <h2 className="mb-0" id="flush-heading2">
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 text-left bg-gray-800 text-white focus:outline-none"
                      type="button"
                      aria-expanded={openAccordion === 1}
                      aria-controls="flush-collapse2"
                      onClick={() => toggleAccordion(1)}
                    >
                      <div className="flex items-center gap-3">
                        <img src="https://eplogproperties.com/wp-content/uploads/2023/10/icon2-1.svg" width="45" alt="" />
                        <h5 className="text-xl font-bold">We are <br /> Knowledgeable</h5>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse2"
                    className={`${openAccordion === 1 ? '' : 'hidden'}`}
                    aria-labelledby="flush-heading2"
                  >
                    <div className="px-5 py-4 text-sm text-gray-200">
                      We are dedicated to your goals, we go the extra mile with steadfast commitment, ensuring a personalized and enduring partnership in every real estate endeavor.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Accordion Item */}
            <div className="w-full">
              <div className="flex items-center justify-start">
                <div className="bg-gray-800 text-white rounded-lg overflow-hidden w-full">
                  <h2 className="mb-0" id="flush-heading3">
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 text-left bg-gray-800 text-white focus:outline-none"
                      type="button"
                      aria-expanded={openAccordion === 2}
                      aria-controls="flush-collapse3"
                      onClick={() => toggleAccordion(2)}
                    >
                      <div className="flex items-center gap-3">
                        <img src="https://eplogproperties.com/wp-content/uploads/2023/10/icon3-1.svg" width="45" alt="" />
                        <h5 className="text-xl font-bold">We are <br /> Committed</h5>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse3"
                    className={`${openAccordion === 2 ? '' : 'hidden'}`}
                    aria-labelledby="flush-heading3"
                  >
                    <div className="px-5 py-4 text-sm text-gray-200">
                      We are dedicated to your goals, we go the extra mile with steadfast commitment, ensuring a personalized and enduring partnership in every real estate endeavor.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
