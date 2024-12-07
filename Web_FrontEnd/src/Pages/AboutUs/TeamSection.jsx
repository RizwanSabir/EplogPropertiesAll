import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import './index.css'

const TeamSection = () => {

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const teammates = [
    {
      name: 'Saliq Zahoor',
      designation: 'FOUNDER',
      phone: '+971  55  247  7432',
      email: 'saliq@eplogproperties.com',
      linkedIn: 'https://www.linkedin.com/',
      image: '/Svg/1-1.svg',
      description1: 'I have been in the industry since 2013, and in addition to my role as a real estate agent buying and selling for clients , my qualification and experience as a construction engineer enables me to offer valuable guidance to private real estate developers, covering aspects from land acquisition, design, feasibility study, development, and sales. ',
      description2: 'My integrity, personalized approach, and comprehensive skill set have earned me a reputation as a trusted advisor in the industry.'
    },
    {
      name: 'Anife Osmanova ',
      designation: 'CEO | CO-FOUNDER ',
      phone: '+971  55  482  6366',
      email: 'anife@eplogproperties.com',
      linkedIn: 'https://www.linkedin.com/',
      image: '/Svg/2-1.svg',
      description1: 'Anife has been a prominent figure in the Dubai real estate market for over a decade, consistently delivering exceptional results and a proven track record of closing deals worth hundreds of millions of dirhams. Known for a personalized and attentive approach, Anife goes beyond the transaction to truly understand each client’s unique needs and financial goals. ',
      description2: 'This commitment ensures that every property deal is carefully tailored to meet specific requirements, whether it involves apartments, villas, luxury properties, or commercial spaces. With a stellar reputation and an impressive portfolio of successful transactions, Anife has earned the trust of clients and is widely regarded as the go-to agent in the market.'
    }
  ];

  return (
    <section className="team-section pb-0   mx-5">
      <div className="container mx-auto">
        <div className="mb-4 mb-md-3">
          <h1 className=" text-center text-[20px] md:text-[50px]  md:my-20 font-semibold">Meet the team</h1>
        </div>
      </div>

      <div className="hidden md:block">
        {teammates.map((teammate, index) => (
          index === 1 ? <Teammate key={index} {...teammate} Swap={1} /> : <Teammate key={index} {...teammate} Swap={0} />
        ))}
      </div>

      <div>
        {teammates.map((teammate, index) => (
          <div key={index} className="block md:hidden ">
            <div>
              <h2>
                <div
                  className={`flex justify-between items-center gap-2 pr-2 pt-1 ${index === 1 ? 'bg-[#7C3EFF] text-white' : 'bg-[#82DFDF]'}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex gap-x-2">
                    <img
                      className="w-[100px] mt-auto mr-auto transform "
                      style={{ transform: "rotateY(175deg)" }}
                      src={teammate.image}
                      alt={teammate.name}
                    />
                    <div className="mt-2 pb-3">
                      <p className="text-2xl font-semibold">{teammate.name}</p>
                      <p className="text-lg font-semibold">{teammate.designation}</p>
                    </div>
                  </div>
                  <div className="flex items-end flex-col flex-shrink">
                    <div className={`${index === 0 ? 'bg-[#75C8C8]' : 'bg-[#9665FF]'} w-[2px] h-[60px] mr-[2px]`}></div>
                    <div className="flex gap-x-2 mt-3">
                      <p className="text-sm w-[70px]">Read more</p>
                      <i className="fas fa-chevron-down text-sm"></i>
                    </div>
                  </div>
                </div>
              </h2>
              <AnimatePresence>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full text-[14px] leading-[21px] bg-[#374957] text-white"
                  >
                    <div className="flex justify-between p-4">
                      <p className="mb-0">
                        <span className="text-[#FFCB2B]">P:</span>{' '}
                        <a
                          href={`tel:${teammate.phone}`}
                          className="text-yellow-500"
                        >
                          {teammate.phone}
                        </a>{' '}
                        |{' '}
                        <span className="text-[#FFCB2B]">E:</span>{' '}
                        <a
                          href={`mailto:${teammate.email}`}
                          className="text-yellow-500"
                        >
                          {teammate.email}
                        </a>
                      </p>
                      <p className="mb-0">
                        <a href={teammate.linkedIn}>
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </p>
                    </div>
                    <div className="h-[1px] bg-white px-4"></div>
                    <p className="p-4">{teammate.description1}</p>
                    <p className="mt-1 p-4">{teammate.description2}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>



      {/* End of Mobile section */}
    </section>
  );
};

export default TeamSection;




// Teammate.js

const Teammate = ({ name, designation, phone, email, linkedIn, image, description1, description2, Swap }) => {
  return (
    <div className="team-data-divider  my-3">
      <div className="teammate-data pt-[60px]  rounded-xl">
        <div className="container mx-auto">
          <div className={`flex items-center  ${Swap ? 'flex-row-reverse ml-28' : ''} `}>
            <div className="w-full mt-auto md:w-1/2 ">
              <img className={`w-[80%] ${Swap ? 'ml-auto' : 'mr-auto'}`} src={image} alt={name} />
            </div>
            <div className="w-full md:w-1/2 pl-4 pb-10">
              <h1 className="text-[35px] leading-[37px] font-bold">{name}</h1>
              <p className="my-5">{designation}</p>
              <div className="flex justify-between">
                <p className="mb-0">
                  <span className='text-[#FFCB2B]'>P:</span> <a href={`tel:${phone}`} className="text-yellow-500">{phone}</a> |
                  <span className='text-[#FFCB2B]'> E:</span> <a href={`mailto:${email}`} className="text-yellow-500">{email}</a>
                </p>
                <p className="mb-0">
                  <a href={linkedIn}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </p>
              </div>
              <div className='h-[1px] bg-white my-2'></div>
              <p >{description1}</p>
              <p className='mt-5'>{description2}</p>
              <div className='mt-8'>
                <a href="https://eplogproperties.com/contact-us/" className="bg-primary btn text-white py-2 px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary" target="_self">
                  Schedule a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

