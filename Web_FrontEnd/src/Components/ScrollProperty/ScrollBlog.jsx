

import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import CustomLoader from "../Loaders/CustomLoader";
import { div } from "framer-motion/client";



const ScrollProperty = ({ Page, Image = { default: false } }) => {
  const dummyBlogData = [
    {
      id: "blog001",
      photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
      title: "Dubai Real Estate Trends 2024",
      description: "Exploring the latest trends in Dubai's dynamic real estate market and what to expect in the coming year.",
      Category: "Blog",
      Tags: ["MARKET ANALYSIS", "INVESTMENT"],
      alt: "Dubai Real Estate Market",
      link: "#",
      newParam: {
        Likes: 245,
        Comments: 48,
        Readminutes: 8
      }
    },
    {
      id: "blog002",
      photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
      title: "Top 10 Luxury Areas in Dubai",
      description: "A comprehensive guide to Dubai's most prestigious residential neighborhoods and what makes them special.",
      Category: "Blog",
      Tags: ["LUXURY", "NEIGHBORHOODS"],
      alt: "Luxury Dubai Areas",
      link: "#",
      newParam: {
        Likes: 189,
        Comments: 32,
        Readminutes: 12
      }
    },
    {
      id: "blog003",
      photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
      title: "Investment Guide: Off-Plan Blog",
      description: "Everything you need to know about investing in off-plan Blog in Dubai's growing market.",
      Category: "Blog",
      Tags: ["INVESTMENT", "OFF-PLAN"],
      alt: "Off Plan Investment",
      link: "#",
      newParam: {
        Likes: 312,
        Comments: 67,
        Readminutes: 15
      }
    },
    {
      id: "blog004",
      photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
      title: "Sustainable Living in Dubai",
      description: "Discover eco-friendly Blog and sustainable development projects reshaping Dubai's real estate.",
      Category: "Blog",
      Tags: ["SUSTAINABILITY", "GREEN LIVING"],
      alt: "Sustainable Blog",
      link: "#",
      newParam: {
        Likes: 156,
        Comments: 23,
        Readminutes: 10
      }
    },

    {
      id: "blog001",
      photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
      title: "Dubai Real Estate Trends 2024",
      description: "Exploring the latest trends in Dubai's dynamic real estate market and what to expect in the coming year.",
      Category: "Blog",
      Tags: ["MARKET ANALYSIS", "INVESTMENT"],
      alt: "Dubai Real Estate Market",
      link: "#",
      newParam: {
        Likes: 245,
        Comments: 48,
        Readminutes: 8
      }
    },
    {
      id: "blog002",
      photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
      title: "Top 10 Luxury Areas in Dubai",
      description: "A comprehensive guide to Dubai's most prestigious residential neighborhoods and what makes them special.",
      Category: "Blog",
      Tags: ["LUXURY", "NEIGHBORHOODS"],
      alt: "Luxury Dubai Areas",
      link: "#",
      newParam: {
        Likes: 189,
        Comments: 32,
        Readminutes: 12
      }
    },
    {
      id: "blog003",
      photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
      title: "Investment Guide: Off-Plan Blog",
      description: "Everything you need to know about investing in off-plan Blog in Dubai's growing market.",
      Category: "Blog",
      Tags: ["INVESTMENT", "OFF-PLAN"],
      alt: "Off Plan Investment",
      link: "#",
      newParam: {
        Likes: 312,
        Comments: 67,
        Readminutes: 15
      }
    },
    {
      id: "blog004",
      photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
      title: "Sustainable Living in Dubai",
      description: "Discover eco-friendly Blog and sustainable development projects reshaping Dubai's real estate.",
      Category: "Blog",
      Tags: ["SUSTAINABILITY", "GREEN LIVING"],
      alt: "Sustainable Blog",
      link: "#",
      newParam: {
        Likes: 156,
        Comments: 23,
        Readminutes: 10
      }
    }];


  const [Blog, setBlog] = useState(dummyBlogData);
  const [loading, setLoading] = useState(true);
  let [User, setUser] = useState(['New Projects', 'NEW']);
  const navigate = useNavigate();
  const handleClickItem = (propertyId, Type, DeveloperLogo) => {
    navigate(`/viewblog`);
  };

  return (
    <div className="pt-2 text-[12px] sm:text-[14px] h-fit max-w-[1140px]  mx-auto ">
      <div>
      </div>
      {loading && !Blog.length ? (
        <div className='mt-10'>
          <CustomLoader />
        </div>
      ) : (
        <>
          <PropertyListingNEW Type={User[1]} Blog={Blog} handleClickItem={handleClickItem} User={User} setUser={setUser} />

        </>
      )}
    </div>
  );
};


const PropertyListingNEW = ({ Blog, handleClickItem, Type, User, setUser, Image }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const formatPrice = (price) => {
    if (price >= 1_000_000) return `${(price / 1_000_000).toFixed(2)} M`;
    if (price >= 1_000) return `${(price / 1_000).toFixed(2)} K`;
    return `${price.toFixed(2)}`;
  };

  const handleNext = () => {
    if (currentIndex < Blog.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' }); // Adjust scroll distance if needed
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row space-y-3 justify-center items-center md:justify-between">
        <div className="shrink-0 ">
          <NavBar User={User} setUser={setUser} Image={Image} />
        </div>

        <div className={` flex ${Image?.default ? 'text-white' : 'text-black'} gap-x-4 justify-center md:justify-end`}>
          <div className={`border ${Image?.default ? 'border-white' : 'border-black'} size-[50px] rounded-full flex justify-center items-center text-black cursor-pointer" onClick={handleBack}`}
            onClick={handleBack}
            disabled={currentIndex === 0}>
            <i className={`fa-solid ${Image?.default ? 'text-white' : 'text-black'}  fa-chevron-left`}></i>
          </div>
          <div
            className={`border ${Image?.default ? 'border-white' : 'border-black'} size-[50px] rounded-full flex justify-center items-center text-black cursor-pointer" onClick={handleBack}`}

            onClick={handleNext}
            disabled={currentIndex === Blog.length - 1}>
            <i className={`fa-solid ${Image?.default ? 'text-white' : 'text-black'} fa-chevron-right`}></i>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="md:ml-[100px] mt-[20px] overflow-x-scroll flex scrollbar-hide"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex space-x-2 sm:space-x-5">
            {Blog.map((blog, index) => (
              <div key={index} onClick={handleClickItem} className="  rounded-3xl shadow-[5px_4px_44px_#00000017] !w-[272px] mdm:!w-[250px] md:!w-[270px] overflow-hidden mb-9 relative  cursor-pointer" >

                {/* */}

                <a href={blog.link}>
                  <div className=" bg-gray-100  ">
                    <img
                      src={blog.photos}
                      // property.photos[0]
                      className="w-full object-cover h-[150px] "
                      alt={blog.alt}
                    />
                    {/* Whole Upper  */}
                    <div className="px-4 ">

                      {/* Outer div */}
                      <div className='mt-2 flex justify-between'>
                        {/* Left side */}
                        <div className=' '>
                          <div className='flex'>

                            <h5 className="box-title text-lg font-bold  flex space-x-1 text-center leading-5">

                              <p> {blog.title}</p>
                            </h5>
                          </div>

                          <div className='mt-2'>
                            <div className='leading-4'>
                              <div className='flex'>
                              </div>
                            </div>


                            <div className='leading-5 mt-2'>
                              <div className='flex'>
                                <img src="/Svg/Category.svg" alt="" />
                                <p>{blog.Category}</p>
                              </div>

                            </div>
                          </div>
                        </div>

                      </div>

                      <div className=''>
                        <div className="line my-2 border-b"></div>
                        <div className="property-data flex justify-between text-sm pb-5 ">
                          <div className="bed flex items-center gap-x-1 ">
                            <p className='text-[#7C3EFF]'><i className="fa-solid fa-heart"></i></p>

                            <p>{blog.newParam?.Likes} </p>
                            <p className='text-[#7C3EFF]'><i className="fa-solid fa-comment"></i></p>
                            <p>{blog.newParam?.Comments}</p>
                            {/* property.newParam.bedroomMax */}
                          </div>
                          <div className="bathroom flex items-center gap-x-1 px-1">
                      
                          </div>
                          <div className="area flex items-center gap-x-1">
                            <p className='text-[#7C3EFF]'><i className="fa-brands fa-readme"></i></p>
                            <p> {blog.newParam?.Readminutes} minutes read </p>
                            {/* MAx size .newParam.maxSize*/}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>

    </>
  );
};

const NavBar = ({ User, setUser, Image }) => {
  let users = [['Buy', 'SELL'], ['New Projects', 'NEW'], ['Rent', 'RENT']]
  return (
    <>
      <div className="flex  flex-row justify-center   text-[10px] leading-[25px] sm:leading-[30px]  w-full sm:text-[12px]  sm:w-[250px]  border  rounded-full">
        <div className="flex flex-row  py-1 w-full justify-around items-center rounded-3xl bg-white">
          {
            users.map((user) => {
              return (
          user[0] === User[0] ?
                  (<WhiteBackground key={user} user={user} setUser={setUser}>
                    <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId={Image?.default ? "explore" : "Trending"} ></motion.div>
                  </WhiteBackground>
                  ) : <WhiteBackground key={user} user={user} setUser={setUser} />

              );
            })
          }

        </div>
      </div>
    </>
  )
}

const WhiteBackground = ({ user, setUser, children }) => {
  return (
    <motion.div key={user} onMouseEnter={() => { setUser(user) }} className={`poppins-regular px-4 py-1   relative z-30 cursor-pointer`}>
      <h1 >{user[0]}</h1>
      {children}
    </motion.div>
  );
};




export default ScrollProperty