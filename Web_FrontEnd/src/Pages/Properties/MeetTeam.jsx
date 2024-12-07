import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import './index.css'

const MeetTeam = () => {

  return (
    <>
      <div className='mt-20 mx-10 max-w-[1140px]  mx-auto'>
        {/* HeaderSection */}
        <h1 className="  text-center text-[20px] md:text-[40px] font-bold ">
          Meet the Team
        </h1>
        {/* For dividing the columns */}
        {/* Arrow Signs */}
        <div className=" flex  justify-end  gap-x-4">
          <div className="border  border-black size-[50px] rounded-full flex justify-center items-center text-black">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="border border-black size-[50px] rounded-full flex justify-center items-center text-black">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>

        <div className='flex   text-[12px]'>
          {/* Left side */}
         <Sidebar/>

          {/* Right side */}
          <Advisors />
        </div>
      </div>
    </>
  )
}



const Sidebar = () => {
  const [selectedPlace, setSelectedPlace] = useState('Off Plans'); // Default selected place

  const places = [
    'Off Plans',
    'Business Bay',
    'DownTown Dubai',
    'Dubai Marina',
    'Palm Jumeriah',
    'Jumeriah Park',
  ];

  const handleClick = (place) => {
    setSelectedPlace(place); // Update selected place on click
  };

  return (
    <div className='flex text-[12px]'>
      {/* Left side */}
      <div className='p-4 w-[250px]'>
        {/* Outer div */}
        <ul className='space-y-2'>
          {places.map((place, index) => (
            <motion.li
              key={index}
              transition={{ duration: 0.3 }}
              onClick={() => handleClick(place)} // Set clicked item as selected
              className={`px-3 py-1 rounded-md cursor-pointer ${
                selectedPlace === place ? 'bg-black text-white' : ''
              }`}
            >
              {place}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};




const Advisors = () => {
  const data = [
    {
      name: 'Rizwan Sabir',
      title: 'Property Advisor',
      imgSrc: '/Media/p7.jpg',
    },
    {
      name: 'Sarah Khan',
      title: 'Real Estate Agent',
      imgSrc: '/Media/p7.jpg',
    },
    {
      name: 'Ali Hassan',
      title: 'Investment Consultant',
      imgSrc: '/Media/p7.jpg',
    },
    {
      name: 'Ayesha Malik',
      title: 'Property Manager',
      imgSrc: '/Media/p7.jpg',
    },
  ];

  return (
    <div className='flex items-center justify-center gap-x-5 ml-10 '>
      {data.map((advisor, index) => (
        <div key={index} className='w-[200px] h-[200px] rounded-2xl overflow-hidden relative '>
          
        <div className='absolute w-full h-full   bgColorShadow'>

        </div>

          <div className='z-20 text-white absolute mx-2 bottom-4 leading-[15px] flex justify-between w-full items-center '>
            <div>
              <p className='text-[12px]'>{advisor.name}</p>
              <p className='text-[10px]'>{advisor.title}</p>
            </div>
            <div className='border border-white rounded-full size-[35px] mr-4 flex items-center justify-center'>
              <i className='fa-brands fa-whatsapp'></i>
            </div>
          </div>
          <img src={advisor.imgSrc} className='object-cover object-top -z-10 w-full h-full' alt={advisor.name} />
        </div>
      ))}
    </div>
  );
};




export default MeetTeam