import React, { useState } from 'react';
import './index.css';
import TruncatedTextWithSplit from './TruncatedTextWithSplit';
import { useNavigate } from 'react-router-dom';
// import Comments from './Comments';
// Main BlogSection Component
const BlogSection = () => {

  const navigate=useNavigate()
  const handlePageClick = ({ selected }) => {
     navigate('/viewblog')
  };

  return (
    <>
      <div className="flex flex-col mb-5 mx-10 mt-32">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl  font-bold ">Search Result For:</h1>
          <div className="mt-5 sm:mt-0">
            <form action="https://eplogproperties.com/" method="get" className="flex">
              <div className="relative w-full mdm:w-[300px] flex">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                  <i className="font-light text-[16px] fa fa-search"></i>
                </span>
                <input
                  type="text"
                  name="s"
                  id="search"
                  className="block pl-10 pr-3 py-2 border border-gray-300 rounded-3xl placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Search positions"
                  aria-describedby="blog-search"
                />
              </div>
            </form>
          </div>
        </div>
        {/* <Blog blogData={blogData} /> */}


        <Blog
          Blog={dummyBlogData}
          handleClickItem={handlePageClick}
          Type="residential"
        />



      </div>
    </>
  );
};


const dummyBlogData = [


  {
    id: "blog001",
    photos: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    title: "Dubai Real Estate Trends 2024",
    description: "Exploring the latest trends in Dubai's dynamic real estate market and what to expect in the coming year.",
    Category:"Properties",
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
    Category:"Properties",
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
    title: "Investment Guide: Off-Plan Properties",
    description: "Everything you need to know about investing in off-plan properties in Dubai's growing market.",
    Category:"Properties",
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
    description: "Discover eco-friendly properties and sustainable development projects reshaping Dubai's real estate.",
    Category:"Properties",
    Tags: ["SUSTAINABILITY", "GREEN LIVING"],
    alt: "Sustainable Properties",
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
    Category:"Properties",
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
    Category:"Properties",
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
    title: "Investment Guide: Off-Plan Properties",
    description: "Everything you need to know about investing in off-plan properties in Dubai's growing market.",
    Category:"Properties",
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
    description: "Discover eco-friendly properties and sustainable development projects reshaping Dubai's real estate.",
    Category:"Properties",
    Tags: ["SUSTAINABILITY", "GREEN LIVING"],
    alt: "Sustainable Properties",
    link: "#",
    newParam: {
      Likes: 156,
      Comments: 23,
      Readminutes: 10
    }
  }



];

const Blog = ({ Blog, handleClickItem }) => {

  return (
    <div className="text-[14px] px-4 h-fit mt-[50px] ">

      <div
        key={Blog}
        className="  flex   ">
        <div className="grid gap-2 sm:grid-cols-2 mdm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  w-full justify-center">
         
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
                              {/* <img src="/Svg/Estate.svg" alt="" /> */}
                              <TruncatedTextWithSplit text={blog.description} maxLines={4} />
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
                          {/* <img
            src="/Svg/shower-icon.svg"
            width="15"
            alt="bathroom"
        /> */}
                          {/* <p> {property.newParam.totalUnits}-{property.newParam.totalUnits}  Bath</p> */}
                          {/* total units property.newParam.totalUnits */}
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

          {/* <Comments/> */}
        </div>
      </div>
    </div>
  );
};


export default BlogSection;
