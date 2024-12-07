import React, { useRef } from 'react';

import './index.css';

// Example array of blog data
const blogData = [
  {
    id: 1,
    title: "IMPZ Production City",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Business Bay",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/2.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Dubai Marina",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Dubai Marina",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Dubai Marina",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Dubai Marina",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
    link: "#",
  },
  // Add more blog entries here
];

const BlogSection = () => {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse down event
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  // Mouse leave or mouse up event
  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  // Mouse move event
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 0.5; // Multiplied by 2 for faster scrolling
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
   <>

   
   <section className="section swiper-container-horizontal  sm:px-0">
      <div className="max-w-[1140px] mx-auto ">
        <div className="flex flex-row">
          <div className="w-full p-0">
            <h1 className="section-title-small">Blogs</h1>
          </div>
        </div>
      </div>

      <div className="w-[85%] md:w-full sm:ml-[100px] mt-7  ">
        {/* Scrollable div with hidden scrollbar */}
        <div
          ref={sliderRef}
          className="overflow-x-auto flex space-x-5 w-full  pb-10"
          style={{ scrollbarWidth: 'none', }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {/* Dynamically render blog boxes using blogData array */}
          {blogData.map((blog) => (
            <div key={blog.id} className="ml-2 sm:ml-10   flex-shrink-0 w-[300px] sm:w-[356px]" >
              <a href={blog.link}>
                <div className="blog-box">
                  <img
                    src={blog.imgSrc}
                    className="w-full"
                    alt={blog.title}
                  />
                  <div className="blog-detail text-center">
                    <h3 className="pt-5">{blog.title}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="swiper-scrollbar  mb-10 relative ml-auto">
  <div className="swiper-scrollbar-drag " >
  </div>
</div>

    </section>
   
   </>
  );
};

export default BlogSection;
