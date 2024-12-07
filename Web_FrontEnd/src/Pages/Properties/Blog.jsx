
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import { div } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const Blog = ({ Text = "Blog" }) => {

  let [User, setUser] = useState(['Guides', 'Brand']);
  const navigate = useNavigate()
  const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;
  return (
    <>

      <section className=" px-[50px]" onClick={() => { navigate('/ViewBlog') }}>

        <div className="max-w-[1140px]  mx-auto">
          <div className=" flex justify-between items-center mt-10">
            <div className="w-full flex items-center justify-center gap-10 ">
              <h1 className="section-title-small   text-center text-[20px] md:text-[40px]">
                {Text}
              </h1>
              <div className="line hidden md:flex">
                <img
                  src="/Media/dashed-line.svg"
                  className="w-full"
                  alt="dashed-line"
                />
              </div>

              <div>
                <div className="bg-[#82DFDF] w-[200px] h-[50px] rounded-full ml-auto flex justify-center gap-x-3 items-center ">
                  <a
                    href={`${url}/blogs/`}
                    className=" text-[16px] font-bold leading-[19.23px]"
                  >
                    View All
                  </a>
                  <div className="bg-white  size-[35px] rounded-full  flex justify-center items-center " >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <NavBar User={User} setUser={setUser} />
        </div>
        <BlogSection />
      </section>
    </>
  )
}




const NavBar = ({ User, setUser }) => {
  let users = [['Guides', 'Brand'], ['Blog', 'Influencer']]
  return (
    <>
      <div className="flex  flex-row justify-center  text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[200px]  border  rounded-full">
        <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
          {
            users.map((user) => {
              return (
                user[0] === User[0] ?
                  (<WhiteBackground key={user} user={user} setUser={setUser}>
                    <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="blog" ></motion.div>
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






const blogData = [
  {
    id: 1,
    title: "IMPZ Production City: A Creative Hub",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Explore Dubai's IMPZ, a modern haven for creatives and media professionals seeking innovative workspaces and networking opportunities."
  },
  {
    id: 2,
    title: "Discover Business Bay",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Business Bay is a vibrant district in Dubai known for its high-end business centers, luxury hotels, and bustling lifestyle."
  },
  {
    id: 3,
    title: "Dubai Silicon Oasis: Innovation Hub",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "An innovation-driven tech park, Dubai Silicon Oasis provides the ideal environment for tech startups and multinational corporations alike."
  },
  {
    id: 4,
    title: "Exploring Downtown Dubai",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Experience the heart of Dubai, home to iconic landmarks like Burj Khalifa and the Dubai Mall, offering an unmatched urban experience."
  },
  {
    id: 5,
    title: "Jumeirah Village Circle: A Family Paradise",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Jumeirah Village Circle is a family-friendly community with spacious villas, parks, and a close-knit neighborhood atmosphere."
  },
  {
    id: 6,
    title: "Dubai Marina's Waterside Living",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Dubai Marina offers luxurious waterside living with breathtaking views, upscale amenities, and a vibrant nightlife scene."
  },
  {
    id: 7,
    title: "Al Barsha: A Growing Community",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Al Barsha is a diverse residential area in Dubai, popular for its central location and close proximity to shopping and dining venues."
  },
  {
    id: 8,
    title: "Dubai Healthcare City: Medical Excellence",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Dubai Healthcare City is a specialized zone dedicated to healthcare services, medical research, and wellness facilities."
  },
  {
    id: 9,
    title: "Mirdif: Suburban Comfort",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Known for its community atmosphere, Mirdif offers comfortable suburban living with a variety of parks, schools, and shopping options."
  },
  {
    id: 10,
    title: "Exploring Dubai Sports City",
    imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
    link: "#",
    description: "Dubai Sports City provides world-class facilities and venues for sports enthusiasts and residents who enjoy an active lifestyle."
  }
  // Additional blog data...
];


const BlogSection = () => {
  const sliderRef = useRef(null);
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMouseDown = (e) => {
    sliderRef.current.isDown = true;
    sliderRef.current.startX = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    sliderRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!sliderRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - sliderRef.current.startX) * 0.5;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - walk;
  };

  // Helper function to truncate combined title and description to 20 characters
  const truncateCombinedText = (title, description, limit = 80) => {
    const combinedText = `${title} ${description}`;
    return combinedText.length > limit ? `${combinedText.slice(0, limit)}...` : combinedText;
  };

  return (
    <section className="mt-5 swiper-container-horizontal sm:px-0">
      <div className="w-[85%] md:w-full sm:ml-[100px]">
        <div
          ref={sliderRef}
          className="overflow-x-auto flex space-x-5 w-full pb-10"
          style={{ scrollbarWidth: "none" }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="ml-2 sm:ml-10 flex flex-shrink-0 sm:w-[272px] bg-transparent"
            >
              <a href={blog.link}>
                <div className="shadow-[5px_4px_44px_#00000017] h-full rounded-2xl">
                  <img src={blog.imgSrc} className="w-full" alt={blog.title} />
                  <div className="blog-detail text-center p-4  ">
                    <h3 className="font-bold leading-[25px]">{blog.title}</h3>
                    <p
                      className={`text-sm text-gray-500 pt-1  ${expanded[blog.id] ? "" : "line-clamp-2"
                        }`}
                    >
                      {expanded[blog.id]
                        ? blog.description
                        : truncateCombinedText(blog.title, blog.description)}
                    </p>
                    <button
                      className="text-[#7C3EFF] text-xs mt-1"
                      onClick={() => toggleDescription(blog.id)}
                    >
                      {expanded[blog.id] ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Blog